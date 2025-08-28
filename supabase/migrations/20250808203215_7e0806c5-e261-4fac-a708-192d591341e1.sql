-- Create user roles enum
CREATE TYPE public.app_role AS ENUM ('admin');

-- Create user roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    UNIQUE (user_id, role)
);

-- Create blog posts table
CREATE TABLE public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    published BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create comments table (no authentication required)
CREATE TABLE public.comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE NOT NULL,
    commenter_name TEXT NOT NULL,
    commenter_email TEXT,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check if user has admin role
CREATE OR REPLACE FUNCTION public.has_admin_role(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = 'admin'
  )
$$;

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (public.has_admin_role(auth.uid()));

-- RLS Policies for blog_posts
CREATE POLICY "Anyone can view published posts"
ON public.blog_posts
FOR SELECT
USING (published = true);

CREATE POLICY "Admins can view all posts"
ON public.blog_posts
FOR SELECT
USING (public.has_admin_role(auth.uid()));

CREATE POLICY "Admins can create posts"
ON public.blog_posts
FOR INSERT
WITH CHECK (public.has_admin_role(auth.uid()));

CREATE POLICY "Admins can update posts"
ON public.blog_posts
FOR UPDATE
USING (public.has_admin_role(auth.uid()));

CREATE POLICY "Admins can delete posts"
ON public.blog_posts
FOR DELETE
USING (public.has_admin_role(auth.uid()));

-- RLS Policies for comments
CREATE POLICY "Anyone can view comments"
ON public.comments
FOR SELECT
USING (true);

CREATE POLICY "Anyone can create comments"
ON public.comments
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can delete comments"
ON public.comments
FOR DELETE
USING (public.has_admin_role(auth.uid()));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN lower(regexp_replace(regexp_replace(title, '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '-', 'g'));
END;
$$ LANGUAGE plpgsql;
