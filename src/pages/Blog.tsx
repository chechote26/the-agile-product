import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            {language === 'es' ? 'Cargando' : 'Loading'}...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {language === 'es' ? 'Blog' : 'Blog'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Descubre insights sobre agilidad, liderazgo y transformación digital'
              : 'Discover insights on agility, leadership and digital transformation'
            }
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
              {language === 'es' ? 'No hay posts aún' : 'No posts yet'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'es' 
                ? 'Pronto publicaremos contenido interesante.'
                : 'We will publish interesting content soon.'
              }
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="line-clamp-2">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {formatDate(post.created_at)}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {truncateContent(post.content)}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-primary hover:underline"
                  >
                    {language === 'es' ? 'Leer más →' : 'Read more →'}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link 
            to="/"
            className="text-primary hover:underline"
          >
            ← {language === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;