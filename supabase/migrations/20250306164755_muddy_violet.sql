/*
  # Setup Storage for Testimonial Images

  1. Storage
    - Creates public bucket for testimonial images
    - Enables public read access
    - Restricts uploads to authenticated users
    - Validates file types

  2. Security
    - Enables RLS on storage objects
    - Adds policies for public read access
    - Adds policies for authenticated uploads
*/

-- Create public bucket for testimonial images
INSERT INTO storage.buckets (id, name, public)
VALUES ('public', 'public', true);

-- Enable Row Level Security
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow authenticated users to upload with file type validation
CREATE POLICY "Allow authenticated uploads" ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'public' AND
    (LOWER(RIGHT(name, 4)) IN ('.jpg', '.png', '.gif') OR 
     LOWER(RIGHT(name, 5)) IN ('.jpeg'))
  );

-- Create policy to allow public downloads
CREATE POLICY "Allow public downloads" ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'public');