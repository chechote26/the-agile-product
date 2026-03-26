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
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              asChild
            >
              <a href="https://calendly.com/eze-tuero/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-1" />
                {language === 'es' ? 'Mentoría' : 'Mentorship'}
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
                ? 'Dejá de apagar incendios y empezá a entregar valor real'
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

        {/* Courses */}
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
                  {language === 'es' ? '1. Orden Operativo y Estructura' : '1. Operational Order and Structure'}
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
                    <span className="text-sm">{language === 'es' ? 'Frameworks que se adaptan a vos, no al revés' : 'Frameworks that adapt to you, not vice versa'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Definition of Done: Calidad sin excusas' : 'Definition of Done: No-excuse quality'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-primary/80 italic">{language === 'es' ? 'IA: Automatizá reportes para dejar de perder tiempo en Jira/Sheets' : 'AI: Automate reports to stop wasting time in Jira/Sheets'}</span>
                  </li>
                </ul>
              </div>

              {/* Course 2 */}
              <div className="bg-card rounded-lg border p-6 h-full border-t-4 border-t-primary">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'es' ? '2. Claridad y Alineación de Producto' : '2. Product Clarity and Alignment'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'es' ? 'Dejá de construir por intuición: definí qué construir y por qué.' : 'Stop building on intuition: define what to build and why.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Inception Deck: Alineación total de stakeholders' : 'Inception Deck: Total stakeholder alignment'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'User Story Mapping para no perder el foco' : 'User Story Mapping to keep focus'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Roadmaps realistas, no promesas vacías' : 'Realistic roadmaps, not empty promises'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-primary/80 italic">{language === 'es' ? 'IA: Prototipado rápido y análisis de feedback masivo en segundos' : 'AI: Rapid prototyping and massive feedback analysis in seconds'}</span>
                  </li>
                </ul>
              </div>

              {/* Course 3 */}
              <div className="bg-card rounded-lg border p-6 h-full border-t-4 border-t-primary">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'es' ? '3. Ritmo y Ejecución de Delivery' : '3. Delivery Pace and Execution'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'es' ? 'Acelerá el ciclo: de la idea a producción sin fricciones.' : 'Accelerate the cycle: from idea to production with no friction.'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Priorización por valor (RICE, Esfuerzo-Impacto)' : 'Value-based prioritization (RICE, Effort-Impact)'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Métricas que importan (Cycle Time, Lead Time)' : 'Metrics that matter (Cycle Time, Lead Time)'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Gestión de dependencias y cuellos de botella' : 'Dependency and bottleneck management'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-primary/80 italic">{language === 'es' ? 'IA: Reducción drástica de reuniones de estatus con updates inteligentes' : 'AI: Drastic reduction of status meetings with smart updates'}</span>
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
                <h3 className="font-semibold text-foreground mb-2">
                  PMs, POs y Scrum Masters
                </h3>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Que buscan liderar con datos y menos estrés' : 'Looking to lead with data and less stress'}</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'es' ? 'Líderes y Tech Leads' : 'Leaders and Tech Leads'}
                </h3>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Que necesitan previsibilidad en sus equipos' : 'Who need predictability in their teams'}</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'es' ? 'Equipos de Desarrollo' : 'Development Teams'}
                </h3>
                <p className="text-xs text-muted-foreground">{language === 'es' ? 'Cansados de los procesos burocráticos y lentos' : 'Tired of bureaucratic and slow processes'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
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
                  <Calendar className="mr-2 h-5 w-5" />
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