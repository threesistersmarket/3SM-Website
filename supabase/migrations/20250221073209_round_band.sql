/*
  # Add ownership form submissions table

  1. New Tables
    - `ownership_submissions`
      - `id` (uuid, primary key)
      - `primary_first_name` (text)
      - `primary_last_name` (text)
      - `primary_email` (text)
      - `secondary_first_name` (text)
      - `secondary_last_name` (text)
      - `secondary_email` (text)
      - `email_updates` (text)
      - `address` (text)
      - `city` (text)
      - `state` (text)
      - `phone` (text)
      - `payment_option` (text)
      - `status` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `ownership_submissions` table
    - Add policy for public to insert submissions
    - Add policy for authenticated users to view submissions
*/

CREATE TABLE IF NOT EXISTS ownership_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  primary_first_name text NOT NULL,
  primary_last_name text NOT NULL,
  primary_email text NOT NULL,
  secondary_first_name text,
  secondary_last_name text,
  secondary_email text,
  email_updates text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  phone text NOT NULL,
  payment_option text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ownership_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit ownership form" ON ownership_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions" ON ownership_submissions
  FOR SELECT
  TO authenticated
  USING (true);