-- Remove the current public viewing policy for comments
DROP POLICY IF EXISTS "Anyone can view comments" ON public.comments;

-- Create a new policy that restricts public viewing (we'll use a view instead)
CREATE POLICY "Public cannot directly view comments table" 
ON public.comments 
FOR SELECT 
USING (false);

-- Create a policy for admins to view all comments including emails
CREATE POLICY "Admins can view all comments with emails" 
ON public.comments 
FOR SELECT 
USING (has_admin_role(auth.uid()));

-- Create a public view that excludes email addresses
CREATE OR REPLACE VIEW public.comments_public AS
SELECT 
  id,
  post_id,
  content,
  commenter_name,
  created_at
FROM public.comments;

-- Grant select access on the view to everyone
GRANT SELECT ON public.comments_public TO anon, authenticated;

-- Create RLS policy for the view (allowing public read access)
ALTER VIEW public.comments_public SET (security_invoker = on);
