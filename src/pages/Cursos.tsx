import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/The Agile Product (5).png";

const Cursos = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="The Agile Product" className="w-12 h-12 md:w-14 md:h-14" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              {language === 'es' ? 'Inicio' : 'Home'}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Coming Soon Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4 pt-32 min-h-screen flex items-center">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <GraduationCap className="w-24 h-24 text-primary mx-auto mb-6" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {language === 'es' ? 'Cursos' : 'Courses'}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            {language === 'es' ? 'Próximamente' : 'Coming Soon'}
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Estamos preparando contenido educativo excepcional sobre agilidad y gestión de producto. Mientras tanto, agenda una mentoría gratuita.'
              : 'We are preparing exceptional educational content on agility and product management. In the meantime, schedule a free mentorship.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/eze-tuero/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                {language === 'es' ? 'Agenda una mentoría gratuita' : 'Schedule a free mentorship'}
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/">
                {language === 'es' ? 'Volver al inicio' : 'Back to home'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cursos;