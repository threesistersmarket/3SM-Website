/*
  # Create Storage Bucket for Testimonial Images

  1. New Storage Bucket
    - Creates a public bucket for storing testimonial profile images
    - Enables public access for image URLs
    - Sets up RLS policies for secure uploads

  2. Security
    - Enables RLS on bucket
    - Adds policy for authenticated uploads
    - Allows public read access
*/

-- Create public bucket for testimonial images
INSERT INTO storage.buckets (id, name, public)
VALUES ('testimonials', 'testimonials', true);

-- Enable RLS
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to testimonial images
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'testimonials');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'testimonials' AND
  (LOWER(storage.extension(name)) IN ('png', 'jpg', 'jpeg', 'gif'))
);