/*
  # Testimonials Table and Policies Setup

  1. Tables
    - Creates testimonials table for storing user stories
    - Adds status validation
    - Sets up timestamps and required fields

  2. Security
    - Enables RLS on testimonials table
    - Sets up public and authenticated access policies
    - Configures storage access rules

  Note: Policies are created with unique names to avoid conflicts
*/

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text,
  story text NOT NULL,
  image_url text,
  status text DEFAULT 'pending'::text,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT testimonials_status_check CHECK (status IN ('pending', 'approved', 'rejected'))
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies with unique names
CREATE POLICY "Public users can submit testimonials v1"
  ON testimonials FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Public can view approved testimonials v1"
  ON testimonials FOR SELECT
  TO public
  USING (status = 'approved');

CREATE POLICY "Authenticated users can view testimonials v1"
  ON testimonials FOR SELECT
  TO authenticated
  USING (true);

-- Storage policies with unique names
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view testimonial images v1"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'testimonials');

CREATE POLICY "Public can upload testimonial images v1"
  ON storage.objects FOR INSERT
  TO public
  WITH CHECK (
    bucket_id = 'testimonials' AND
    (LOWER(storage.extension(name)) IN ('png', 'jpg', 'jpeg', 'gif'))
  );