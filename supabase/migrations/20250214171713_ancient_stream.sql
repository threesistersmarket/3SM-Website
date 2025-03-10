/*
  # Add testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text)
      - `role` (text)
      - `story` (text)
      - `image_url` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on testimonials table
    - Add policy for public submissions
    - Add policy for authenticated users to view testimonials
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  story text NOT NULL,
  image_url text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit testimonials" ON testimonials
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view testimonials" ON testimonials
  FOR SELECT
  TO authenticated
  USING (true);