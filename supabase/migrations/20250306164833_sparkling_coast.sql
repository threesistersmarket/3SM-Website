/*
  # Testimonials and Storage Setup

  1. Tables
    - Creates testimonials table for storing user stories
    - Adds status field with validation
    - Sets up timestamps

  2. Security
    - Enables RLS on testimonials table
    - Adds policies for public viewing of approved testimonials
    - Adds policies for authenticated submissions

  3. Storage
    - Sets up storage policies for testimonial images
    - Configures public read access
    - Restricts uploads to authenticated users
*/

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  role text,
  story text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'::text,
  CONSTRAINT testimonials_status_check CHECK (status IN ('pending', 'approved', 'rejected'))
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access to approved testimonials
CREATE POLICY "Public can view approved testimonials" ON testimonials
  FOR SELECT 
  TO public
  USING (status = 'approved');

-- Allow authenticated users to insert testimonials
CREATE POLICY "Users can submit testimonials" ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Storage policies for testimonial images
DO $$
BEGIN
  -- Only create policies if they don't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Public can view testimonial images'
  ) THEN
    -- Allow public read access to testimonial images
    CREATE POLICY "Public can view testimonial images" ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'testimonials');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Authenticated users can upload testimonial images'
  ) THEN
    -- Allow authenticated users to upload images with type validation
    CREATE POLICY "Authenticated users can upload testimonial images" ON storage.objects
      FOR INSERT
      TO authenticated
      WITH CHECK (
        bucket_id = 'testimonials' AND
        (LOWER(storage.extension(name)) IN ('png', 'jpg', 'jpeg', 'gif'))
      );
  END IF;
END $$;