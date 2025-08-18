import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GraduationCap, Calendar, Rocket, CheckCircle, Target, Package, User, Home, FileText } from "lucide-react";
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
              {language === 'es' ? 'Formación en vivo para equipos de tecnología y producto' : 'Live Training for Technology and Product Teams'}
            </h1>
          </div>
        </section>

        {/* Why This Program */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Rocket className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                {language === 'es' ? '¿Por qué este programa?' : 'Why this program?'}
              </h2>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'es' 
                  ? 'Muchos equipos no alcanzan su potencial por no tener en claro:'
                  : 'Many teams don\'t reach their potential because they\'re unclear about:'
                }
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="p-4 rounded-lg bg-card border">
                  <h3 className="font-semibold text-foreground">
                    {language === 'es' ? 'Cómo trabajan' : 'How they work'}
                  </h3>
                </div>
                <div className="p-4 rounded-lg bg-card border">
                  <h3 className="font-semibold text-foreground">
                    {language === 'es' ? 'Qué van a construir' : 'What they\'ll build'}
                  </h3>
                </div>
                <div className="p-4 rounded-lg bg-card border">
                  <h3 className="font-semibold text-foreground">
                    {language === 'es' ? 'Cómo lo entregarán' : 'How they\'ll deliver it'}
                  </h3>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-center text-muted-foreground">
              {language === 'es' 
                ? 'Este programa reúne prácticas, herramientas y frameworks probados para que tu equipo pase a una entrega ágil y efectiva.'
                : 'This program brings together proven practices, tools and frameworks so your team can move to agile and effective delivery.'
              }
            </p>
          </div>
        </section>

        {/* Courses */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center gap-3 mb-12">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                {language === 'es' ? 'Los 3 cursos que componen el programa' : 'The 3 courses that make up the program'}
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Course 1 */}
              <div className="bg-card rounded-lg border p-6 h-full">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'es' ? 'Curso 1 – Set up del equipo de delivery' : 'Course 1 – Delivery Team Setup'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'es' ? '(Preparación del terreno: el cómo)' : '(ground preparation: the how)'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Roles y responsabilidades claras (RACI)' : 'Clear roles and responsibilities (RACI)'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Selección del framework ágil adecuado' : 'Selecting the right agile framework'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Workflows, pipelines e integraciones (Jira, GitHub, CI/CD)' : 'Workflows, pipelines and integrations (Jira, GitHub, CI/CD)'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Estructura de trabajo y porciones de trabajo' : 'Work structure and work portions'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Definition of Ready / Done</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Comunicación interna y con stakeholders' : 'Internal and stakeholder communication'}</span>
                  </li>
                </ul>
              </div>

              {/* Course 2 */}
              <div className="bg-card rounded-lg border p-6 h-full">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'es' ? 'Curso 2 – Incepción ágil de producto' : 'Course 2 – Product Inception'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'es' ? '(Estructurando el qué)' : '(Structuring the what)'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Inception Deck' : 'Inception Deck'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Roadmap y release plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">User Story Mapping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Requerimientos regulatorios' : 'Regulatory requirements'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Tips prácticos aprendidos en una software factory' : 'Practical tips learned in a software factory'}</span>
                  </li>
                </ul>
              </div>

              {/* Course 3 */}
              <div className="bg-card rounded-lg border p-6 h-full">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {language === 'es' ? 'Curso 3 – Delivery ágil en la práctica' : 'Course 3 – Agile Delivery in Practice'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'es' ? '(Producción y ejecución)' : '(Production and execution)'}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Mindset de delivery ágil: equilibrio velocidad, calidad, valor' : 'Agile delivery mindset: balancing speed, quality, value'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Tableros Kanban y Scrum' : 'Kanban and Scrum boards'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Eventos y artefactos ágiles' : 'Agile events and artifacts'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Estimación y priorización (Planning Poker, MoSCoW, RICE)' : 'Estimation and prioritization (Planning Poker, MoSCoW, RICE)'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Métricas y dashboards' : 'Metrics and dashboards'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{language === 'es' ? 'Buenas prácticas de roll out' : 'Roll out best practices'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Format and Duration */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                {language === 'es' ? 'Formato y duración' : 'Format and duration'}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">{language === 'es' ? 'En vivo y online' : 'Live and online'}</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">{language === 'es' ? 'Cada curso: 3 sesiones de 2 horas' : 'Each course: 3 sessions of 2 hours'}</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'es' ? 'Ejemplos reales y ejercicios prácticos' : 'Real examples and practical exercises'}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16 px-4 bg-muted/30">
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
                  Product Managers, Product Owners, Scrum Masters
                </h3>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'es' ? 'Líderes de equipo y Project Managers' : 'Team Leaders and Project Managers'}
                </h3>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'es' ? 'Equipos de desarrollo que quieren trabajar mejor y entregar más valor' : 'Development teams who want to work better and deliver more value'}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <User className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                {language === 'es' ? 'Unite a la lista de espera' : 'Join the waitlist'}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-4">
              {language === 'es' 
                ? 'Vas a ser el primero en enterarte de fechas, precios y promociones de lanzamiento.'
                : 'Be the first to know about dates, prices and launch promotions.'
              }
            </p>
            
            <p className="text-muted-foreground mb-8">
              {language === 'es' 
                ? 'Plazas limitadas para garantizar interacción real.'
                : 'Limited spots to ensure real interaction.'
              }
            </p>
            
            <div className="flex justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://forms.gle/9RNDTanEZEMBxR2r9" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  {language === 'es' ? 'Inscribirme a la lista de espera' : 'Join the waitlist'}
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