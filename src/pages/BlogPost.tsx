import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

interface Comment {
  id: string;
  commenter_name: string;
  content: string;
  created_at: string;
  post_id: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    content: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const { language } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      fetchPost();
      fetchComments();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    if (!slug) return;
    
    try {
      const { data: postData } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (!postData) return;

      const { data, error } = await supabase
        .from('comments_public')
        .select('*')
        .eq('post_id', postData.id)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post || !commentForm.name.trim() || !commentForm.content.trim()) {
      toast({
        title: language === 'es' ? 'Error' : 'Error',
        description: language === 'es' 
          ? 'Por favor completa los campos requeridos'
          : 'Please fill in the required fields',
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('comments')
        .insert({
          post_id: post.id,
          commenter_name: commentForm.name.trim(),
          commenter_email: commentForm.email.trim() || null,
          content: commentForm.content.trim()
        });

      if (error) throw error;

      toast({
        title: language === 'es' ? 'Comentario enviado' : 'Comment submitted',
        description: language === 'es' 
          ? 'Tu comentario ha sido publicado exitosamente'
          : 'Your comment has been posted successfully'
      });

      setCommentForm({ name: '', email: '', content: '' });
      fetchComments();
    } catch (error) {
      console.error('Error submitting comment:', error);
      toast({
        title: language === 'es' ? 'Error' : 'Error',
        description: language === 'es' 
          ? 'Error al enviar el comentario'
          : 'Error submitting comment',
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            {language === 'es' ? 'Cargando...' : 'Loading...'}
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              {language === 'es' ? 'Post no encontrado' : 'Post not found'}
            </h1>
            <Link to="/blog" className="text-primary hover:underline">
              ← {language === 'es' ? 'Volver al blog' : 'Back to blog'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="mb-12">
            <header className="mb-8">
              <Badge variant="secondary" className="mb-4">
                {formatDate(post.created_at)}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {post.title}
              </h1>
            </header>
            
            <div className="prose prose-lg max-w-none text-foreground">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Comments Section */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">
              {language === 'es' ? 'Comentarios' : 'Comments'} ({comments.length})
            </h2>

            {/* Comment Form */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>
                  {language === 'es' ? 'Deja un comentario' : 'Leave a comment'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">
                        {language === 'es' ? 'Nombre *' : 'Name *'}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">
                        {language === 'es' ? 'Email (opcional)' : 'Email (optional)'}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="content">
                      {language === 'es' ? 'Comentario *' : 'Comment *'}
                    </Label>
                    <Textarea
                      id="content"
                      rows={4}
                      value={commentForm.content}
                      onChange={(e) => setCommentForm(prev => ({ ...prev, content: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={submitting}>
                    {submitting 
                      ? (language === 'es' ? 'Enviando...' : 'Submitting...')
                      : (language === 'es' ? 'Enviar comentario' : 'Submit comment')
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <Card key={comment.id}>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{comment.commenter_name}</h3>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(comment.created_at)}
                      </span>
                    </div>
                    <p className="text-foreground whitespace-pre-wrap">
                      {comment.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
              
              {comments.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  {language === 'es' 
                    ? 'No hay comentarios aún. ¡Sé el primero en comentar!'
                    : 'No comments yet. Be the first to comment!'
                  }
                </div>
              )}
            </div>
          </section>

          <div className="text-center mt-12">
            <Link to="/blog" className="text-primary hover:underline">
              ← {language === 'es' ? 'Volver al blog' : 'Back to blog'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
