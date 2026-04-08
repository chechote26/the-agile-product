import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, FileText, FlaskConical, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logo from "@/assets/The Agile Product (5).png";

const postFiles = import.meta.glob("/src/posts/*.md", { as: "raw", eager: true });

const parseFrontmatter = (content: string) => {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: { title: "", date: "" }, body: content };

  const raw = match[1];
  const body = match[2];
  const title = raw.match(/title:\s*"?([^"\n]+)"?/)?.[1] || "";
  const date = raw.match(/date:\s*"?([^"\n]+)"?/)?.[1] || "";

  return { meta: { title, date }, body };
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [body, setBody] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const key = `/src/posts/${slug}.md`;
    const content = postFiles[key] as string;

    if (!content) {
      setNotFound(true);
      return;
    }

    const { meta, body } = parseFrontmatter(content);
    setTitle(meta.title);
    setDate(meta.date);
    setBody(body);
  }, [slug]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            {language === 'es' ? 'Post no encontrado' : 'Post not found'}
          </h1>
          <Link to="/blog" className="text-primary hover:underline">
            ← {language === 'es' ? 'Volver al blog' : 'Back to blog'}
          </Link>
        </div>
      </div>
    );
  }

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
              <Link to="/blog"><ArrowLeft className="w-4 h-4 mr-1" />{language === 'es' ? 'Blog' : 'Blog'}</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link to="/cursos"><GraduationCap className="w-4 h-4 mr-1" />{language === 'es' ? 'Cursos' : 'Courses'}</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link to="/laboratorio"><FlaskConical className="w-4 h-4 mr-1" />{language === 'es' ? 'Laboratorio' : 'Lab'}</Link>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium" asChild>
              <a href="https://forms.gle/qAp7Xry7DFqTqDKo6" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-1" />{language === 'es' ? 'consultame' : 'Mentorship'}
              </a>
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Post */}
      <section className="py-20 px-4 pt-32">
        <div className="container mx-auto max-w-3xl">
          {date && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              {date}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-10">{title}</h1>

          <div className="prose prose-lg max-w-none text-foreground
            prose-headings:text-foreground
            prose-p:text-muted-foreground
            prose-strong:text-foreground
            prose-a:text-primary
            prose-li:text-muted-foreground">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t">
            <Link to="/blog" className="text-primary hover:underline text-sm">
              ← {language === 'es' ? 'Volver al blog' : 'Back to blog'}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-lg font-semibold">The Agile Product · Eze Tuero</h3>
          <p className="text-muted-foreground">{language === 'es' ? 'Consultor en Agilidad y Producto' : 'Agility and Product Consultant'}</p>
          <p className="text-sm text-muted-foreground mt-2">© 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
