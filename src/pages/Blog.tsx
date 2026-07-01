import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, ArrowLeft, FileText, FlaskConical, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logo from "@/assets/The Agile Product (5).png";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

// Importamos todos los archivos .md de src/posts
const postFiles = import.meta.glob("/src/posts/*.md", { as: "raw", eager: true });

const parseFrontmatter = (content: string, filename: string): PostMeta => {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { slug: filename, title: filename, date: "", description: "" };

  const raw = match[1];
  const title = raw.match(/title:\s*"?([^"\n]+)"?/)?.[1] || filename;
  const date = raw.match(/date:\s*"?([^"\n]+)"?/)?.[1] || "";
  const description = raw.match(/description:\s*"?([^"\n]+)"?/)?.[1] || "";
  const slug = filename.replace("/src/posts/", "").replace(".md", "");

  return { slug, title, date, description };
};

const getPosts = (): PostMeta[] => {
  return Object.entries(postFiles)
    .map(([filename, content]) => parseFrontmatter(content as string, filename))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

const Blog = () => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="The Agile Product" className="w-auto h-8 min-h-8 md:h-10 md:min-h-10 object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link to="/"><ArrowLeft className="w-4 h-4 mr-1" />{language === 'es' ? 'Inicio' : 'Home'}</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link to="/laboratorio"><FlaskConical className="w-4 h-4 mr-1" />{language === 'es' ? 'Laboratorio' : 'Lab'}</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link to="/laboratorio"><FlaskConical className="w-4 h-4 mr-1" />{language === 'es' ? 'Laboratorio' : 'Lab'}</Link>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium" asChild>
              <a href="https://forms.gle/qAp7Xry7DFqTqDKo6" target="_blank" rel="noopener noreferrer">
                {language === 'es' ? 'Consultame →' : 'Contact me →'}
              </a>
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4 pt-32">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            {language === 'es' ? 'Blog' : 'Blog'}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {language === 'es' ? 'Ideas sobre producto y agilidad' : 'Ideas about product and agility'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'es'
              ? 'Sin teoría vacía. Solo lo que aprendí construyendo y trabajando con equipos reales.'
              : 'No empty theory. Just what I learned building and working with real teams.'}
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              {language === 'es' ? 'No hay posts todavía.' : 'No posts yet.'}
            </p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.slug} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <CardTitle className="text-xl">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    {post.description && (
                      <CardDescription className="text-base">{post.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.slug}`}>
                        {language === 'es' ? 'Leer más →' : 'Read more →'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-lg font-semibold">The Agile Product · Eze Tuero</h3>
          <p className="text-muted-foreground">{language === 'es' ? 'Product Management & Agile Advisory' : 'Product Management & Agile Advisory'}</p>
          <p className="text-sm text-muted-foreground mt-2">© 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
