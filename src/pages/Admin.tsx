import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trash2, Edit, Plus } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    published: false
  });
  const { toast } = useToast();
  const { language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      // Check if user has admin role
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (!roleData) {
        toast({
          title: language === 'es' ? "Acceso denegado" : "Access denied",
          description: language === 'es' 
            ? "No tienes permisos de administrador"
            : "You don't have admin permissions",
          variant: "destructive"
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      fetchPosts();
    } catch (error) {
      console.error('Auth error:', error);
      navigate("/auth");
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      toast({
        title: language === 'es' ? "Error" : "Error",
        description: language === 'es' 
          ? "El título y contenido son requeridos"
          : "Title and content are required",
        variant: "destructive"
      });
      return;
    }

    try {
      const slug = generateSlug(formData.title);
      
      if (editingPost) {
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title: formData.title,
            content: formData.content,
            slug,
            published: formData.published
          })
          .eq('id', editingPost.id);

        if (error) throw error;
        
        toast({
          title: language === 'es' ? "Post actualizado" : "Post updated",
          description: language === 'es' 
            ? "El post ha sido actualizado exitosamente"
            : "Post has been updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            title: formData.title,
            content: formData.content,
            slug,
            published: formData.published,
            author_id: user.id
          });

        if (error) throw error;
        
        toast({
          title: language === 'es' ? "Post creado" : "Post created",
          description: language === 'es' 
            ? "El post ha sido creado exitosamente"
            : "Post has been created successfully"
        });
      }

      setFormData({ title: '', content: '', published: false });
      setEditingPost(null);
      setShowForm(false);
      fetchPosts();
    } catch (error: any) {
      toast({
        title: language === 'es' ? "Error" : "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      published: post.published
    });
    setShowForm(true);
  };

  const handleDelete = async (postId: string) => {
    if (!confirm(language === 'es' ? '¿Estás seguro?' : 'Are you sure?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      
      toast({
        title: language === 'es' ? "Post eliminado" : "Post deleted",
        description: language === 'es' 
          ? "El post ha sido eliminado exitosamente"
          : "Post has been deleted successfully"
      });
      
      fetchPosts();
    } catch (error: any) {
      toast({
        title: language === 'es' ? "Error" : "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const cancelEdit = () => {
    setEditingPost(null);
    setFormData({ title: '', content: '', published: false });
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        {language === 'es' ? 'Cargando...' : 'Loading...'}
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {language === 'es' ? 'Panel de Administración' : 'Admin Dashboard'}
          </h1>
          <div className="flex gap-4">
            <Button onClick={() => navigate("/blog")}>
              {language === 'es' ? 'Ver Blog' : 'View Blog'}
            </Button>
            <Button onClick={handleLogout} variant="outline">
              {language === 'es' ? 'Cerrar Sesión' : 'Logout'}
            </Button>
          </div>
        </div>

        {/* New/Edit Post Form */}
        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {editingPost 
                  ? (language === 'es' ? 'Editar Post' : 'Edit Post')
                  : (language === 'es' ? 'Nuevo Post' : 'New Post')
                }
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">
                    {language === 'es' ? 'Título' : 'Title'}
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="content">
                    {language === 'es' ? 'Contenido' : 'Content'}
                  </Label>
                  <Textarea
                    id="content"
                    rows={10}
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="published"
                    checked={formData.published}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, published: checked }))}
                  />
                  <Label htmlFor="published">
                    {language === 'es' ? 'Publicado' : 'Published'}
                  </Label>
                </div>
                <div className="flex gap-2">
                  <Button type="submit">
                    {editingPost 
                      ? (language === 'es' ? 'Actualizar' : 'Update')
                      : (language === 'es' ? 'Crear' : 'Create')
                    }
                  </Button>
                  <Button type="button" variant="outline" onClick={cancelEdit}>
                    {language === 'es' ? 'Cancelar' : 'Cancel'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Add New Post Button */}
        {!showForm && (
          <div className="mb-8">
            <Button onClick={() => setShowForm(true)}>
              <Plus className="w-4 h-4 mr-2" />
              {language === 'es' ? 'Nuevo Post' : 'New Post'}
            </Button>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {language === 'es' ? 'Posts' : 'Posts'} ({posts.length})
          </h2>
          
          {posts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {language === 'es' ? 'No hay posts aún' : 'No posts yet'}
            </div>
          ) : (
            posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published 
                            ? (language === 'es' ? 'Publicado' : 'Published')
                            : (language === 'es' ? 'Borrador' : 'Draft')
                          }
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">
                        {language === 'es' ? 'Creado:' : 'Created:'} {new Date(post.created_at).toLocaleDateString()}
                      </p>
                      <p className="text-foreground line-clamp-2">
                        {post.content.substring(0, 150)}...
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(post)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;