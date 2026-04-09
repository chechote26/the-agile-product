import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GraduationCap, Calendar, Rocket, CheckCircle, Target, User, Home, FileText, FlaskConical } from "lucide-react";
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
            <img src={logo} alt="The Agile Product" className="w-auto h-8 min-h-8 md:h-10 md:min-h-10 object-contain" />
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost"
              size="sm" 
              className="text-muted-foreground hover:text-foreground font-medium"
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-1" />
                {language === 'es' ? 'Inicio' : 'Home'}
              </Link>
            </Button>
            <Button 
              variant="ghost"
              size="sm" 
              className="text-muted-foreground hover:text-foreground font-medium"
              asChild
            >
              <Link to="/blog">
                <FileText className="w-4 h-4 mr-1" />
                {language === 'es' ? 'Blog' : 'Blog'}
              </Link>
            </Button>
            
            {/* CTA Header: Consultame con la flecha → */}
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              asChild
            >
              <a href="https://forms.gle/qAp7Xry7DFqTqDKo6" target="_blank" rel="noopener noreferrer">
                {language === 'es' ? 'Consultame →' : 'Contact me →'}
              </a>
            </Button>

            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link to="/laboratorio">
                <FlaskConical className="w-4 h-4 mr-1" />
                {language === 'es' ? 'Laboratorio' : 'Lab'}
              </Link>
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'es'
                ? 'De la ejecución reactiva a la creación de productos con propósito'
                : 'Stop firefighting and start delivering real value'}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'es'
                ? 'Formación práctica para equipos que necesitan agilidad real, potenciada por IA para eliminar la burocracia del proceso.'
                : 'Practical training for teams needing real agility, powered by AI to eliminate process bureaucracy.'}
            </p>
          </div>
        </section>

        {/* Why This Program */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Rocket className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                {language === 'es' ? '¿Qué problemas resolvemos?' : 'What problems do we solve?'}
              </h2>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'es' 
                  ? 'Si tu equipo sufre de estos síntomas, este programa es para vos:'
                  : 'If your team suffers from these symptoms, this program is for you:'
                }
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="p-4 rounded-lg bg-card border">
                  <h3 className="font-semibold text-foreground">
                    {language === 'es' ? 'Falta de foco y caos' : 'Lack of focus and chaos'}
                  </h3>
                </div>
                <div className="p-4 rounded-lg bg-card border">
                  <h3 className="font-semibold text-foreground">
                    {language === 'es' ? 'Entregas lentas' : 'Slow deliveries'}
                  </h3>
                </div>
                <div className="p-4 rounded-lg bg-card border">
                  <h3 className="font-semibold text-foreground">
                    {language === 'es' ? 'Desalineación total' : 'Total misalignment'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses: Contenido Completo Recuperado */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center gap-3 mb-12">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                {language === 'es' ? 'Tres pasos hacia la agilidad efectiva' : 'Three steps to effective agility'}
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Course 1 */}
              <div className="bg-card rounded-lg border p-6 h-full border-t-4 border-t-primary">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'es' ? '1. Organización Táctica y Estructura' : '1. Operational Order and Structure'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'es' ? 'Eliminá la confusión: quién hace qué y cómo se mide el éxito.' : 'Eliminate confusion: who does what and how success is measured.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Roles sin solapamientos (RACI dinámico)' : 'No-overlap roles (Dynamic RACI)'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Definition of Ready y Done' : 'Definition of Ready and Done'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-primary/80 italic">{language === 'es' ? 'IA: Automatizá reportes en Jira/Sheets' : 'AI: Automate reports in Jira/Sheets'}</span>
                  </li>
                </ul>
              </div>

              {/* Course 2 */}
              <div className="bg-card rounded-lg border p-6 h-full border-t-4 border-t-primary">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'es' ? '2. Claridad de Producto' : '2. Product Clarity'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'es' ? 'Dejá de construir por intuición: definí qué construir y por qué.' : 'Stop building on intuition: define what to build and why.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Inception Deck y Alineación' : 'Inception Deck and Alignment'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'User Story Mapping' : 'User Story Mapping'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-primary/80 italic">{language === 'es' ? 'IA: Prototipado rápido y análisis masivo' : 'AI: Rapid prototyping and massive analysis'}</span>
                  </li>
                </ul>
              </div>

              {/* Course 3 */}
              <div className="bg-card rounded-lg border p-6 h-full border-t-4 border-t-primary">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'es' ? '3. Ritmo de Delivery' : '3. Delivery Pace'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'es' ? 'Acelerá el ciclo: de la idea a producción sin fricciones.' : 'Accelerate the cycle: from idea to production with no friction.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Priorización por valor (RICE)' : 'Value-based prioritization (RICE)'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Métricas (Cycle & Lead Time)' : 'Metrics (Cycle & Lead Time)'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-primary/80 italic">{language === 'es' ? 'IA: Updates inteligentes de estatus' : 'AI: Smart status updates'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                {language === 'es' ? '¿Para quién es?' : 'Who is it for?'}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">PMs y POs</h3>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Que buscan liderar con evidencia' : 'Looking to lead with evidence'}</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">{language === 'es' ? 'Líderes y Tech Leads' : 'Leaders and Tech Leads'}</h3>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Que necesitan previsibilidad' : 'Who need predictability'}</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">{language === 'es' ? 'Equipos de Desarrollo' : 'Development Teams'}</h3>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Cansados de la burocracia' : 'Tired of bureaucracy'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA: Con el icono del gorrito GraduationCap */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <User className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                {language === 'es' ? 'Unite a la lista de espera' : 'Join the waitlist'}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'es' 
                ? 'Cupos ultra-limitados (máx 10 personas) para asegurar que salgas con un plan de acción real para tu equipo.'
                : 'Ultra-limited spots (max 10 people) to ensure you leave with a real action plan for your team.'
              }
            </p>
            
            <div className="flex justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://forms.gle/9RNDTanEZEMBxR2r9" target="_blank" rel="noopener noreferrer">
                  <GraduationCap className="mr-2 h-6 w-6" />
                  {language === 'es' ? 'Inscribirme ahora' : 'Join now'}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cursos;