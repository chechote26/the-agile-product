import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FlaskConical, Car, Calculator, Calendar, FileText, GraduationCap, Construction, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logo from "@/assets/The Agile Product (5).png";

const translations = {
  es: {
    nav: { blog: "Blog", cursos: "Cursos", mentoria: "Mentoría" },
    hero: {
      badge: "Laboratorio de Producto",
      title: "Productos reales, aprendizajes reales",
      subtitle: "No solo hablo de producto y agilidad, los practico. Acá encontrás los proyectos que estoy construyendo e iterando, con el mismo enfoque que aplico con mis clientes.",
    },
    intro: {
      title: "¿Por qué un laboratorio?",
      body: "La mejor forma de entender producto es construyendo producto. Cada proyecto acá es un experimento real: tiene una hipótesis, un problema a resolver y aprendizajes en curso. No son demos, son trabajos en progreso.",
    },
    projects: [
      {
        name: "AutoGuía",
        icon: "car",
        status: "wip",
        statusLabel: "Próximamente",
        tagline: "Comprá un auto usado con los ojos abiertos",
        problem: "Comprar un auto usado es una caja negra: specs dispersas en 10 sitios, costos invisibles (patente, service, neumáticos) y opiniones poco confiables. AutoGuía centraliza todo — specs técnicas, costos reales de mantenimiento y opiniones de dueños y talleristas verificados.",
        hypothesis: "Hipótesis: los compradores de autos usados toman mejores decisiones cuando tienen acceso a información verificada de pares, no solo del vendedor.",
        learning: "Estado: construyendo la base de datos y validando la demanda con lista de espera. 1.7M autos usados se venden por año en Argentina.",
        url: "https://autoguia-landing.vercel.app/",
        cta: "Ver landing",
      },
      {
        name: "Simulador de Costos",
        icon: "calculator",
        status: "validado",
        statusLabel: "Experimento validado",
        tagline: "Calculá patentes y transferencias de autos usados",
        problem: "Los costos reales de comprar un auto usado en Argentina (patentes, transferencia, sellados) son difíciles de calcular y están dispersos. Construí este simulador con datos de DNRPA para resolver mi propio problema primero.",
        hypothesis: "Hipótesis validada: centralizar los costos en una sola herramienta reduce significativamente el tiempo de cálculo. Resolvió el problema. Próximo paso: entender si otros tienen el mismo dolor.",
        learning: "Aprendizaje: construir para uno mismo es una forma válida de validar que el problema existe.",
        url: "https://simuladorvaluaciones.vercel.app/",
        cta: "Ver herramienta",
      },
    ],
    footer: {
      title: "The Agile Product · Eze Tuero",
      subtitle: "Consultor en Agilidad y Producto",
    },
  },
  en: {
    nav: { blog: "Blog", cursos: "Courses", mentoria: "Mentorship" },
    hero: {
      badge: "Product Lab",
      title: "Real products, real learnings",
      subtitle: "I don't just talk about product and agility — I practice them. Here you'll find the projects I'm building and iterating, using the same approach I apply with my clients.",
    },
    intro: {
      title: "Why a lab?",
      body: "The best way to understand product is by building product. Each project here is a real experiment: it has a hypothesis, a problem to solve, and ongoing learnings. These aren't demos — they're works in progress.",
    },
    projects: [
      {
        name: "AutoGuía",
        icon: "car",
        status: "wip",
        statusLabel: "Coming soon",
        tagline: "Buy a used car with your eyes open",
        problem: "Buying a used car is a black box: specs scattered across 10 sites, invisible costs (taxes, maintenance, tires) and unreliable opinions. AutoGuía centralizes everything — technical specs, real maintenance costs and reviews from verified owners and mechanics.",
        hypothesis: "Hypothesis: used car buyers make better decisions when they have access to verified peer information, not just the seller's pitch.",
        learning: "Status: building the database and validating demand with a waitlist. 1.7M used cars are sold per year in Argentina.",
        url: "https://autoguia-landing.vercel.app/",
        cta: "View landing",
      },
      {
        name: "Cost Simulator",
        icon: "calculator",
        status: "validado",
        statusLabel: "Validated experiment",
        tagline: "Calculate taxes and transfer costs for used cars",
        problem: "The real costs of buying a used car in Argentina (annual taxes, transfer fees, stamps) are hard to calculate and scattered. I built this simulator using DNRPA data to solve my own problem first.",
        hypothesis: "Validated hypothesis: centralizing costs in one tool significantly reduces calculation time. It solved the problem. Next step: find out if others share the same pain.",
        learning: "Learning: building for yourself is a valid way to validate that the problem exists.",
        url: "https://simuladorvaluaciones.vercel.app/",
        cta: "View tool",
      },
    ],
    footer: {
      title: "The Agile Product · Eze Tuero",
      subtitle: "Agility & Product Consultant",
    },
  },
};

const StatusBadge = ({ status, label }: { status: string; label: string }) => {
  if (status === "productivo") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        {label}
      </span>
    );
  }
  if (status === "validado") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
        <CheckCircle className="w-3 h-3" />
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
      <Construction className="w-3 h-3" />
      {label}
    </span>
  );
};

const Laboratorio = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
              <Link to="/">
                {language === 'es' ? 'Inicio' : 'Home'}
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" data-id="cta-blog" asChild>
              <Link to="/blog"><FileText className="w-4 h-4 mr-1" />{t.nav.blog}</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" asChild>
              <Link to="/cursos"><GraduationCap className="w-4 h-4 mr-1" />{t.nav.cursos}</Link>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium" data-id="cta-reunion-gratuita" asChild>
              <a href="https://calendly.com/eze-tuero/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-1" />{t.nav.mentoria}
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
            <FlaskConical className="w-4 h-4" />
            {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.intro.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.intro.body}</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-8 px-4 pb-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.map((project) => (
              <Card key={project.name} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      {project.icon === "car"
                        ? <Car className="h-8 w-8 text-primary flex-shrink-0" />
                        : <Calculator className="h-8 w-8 text-primary flex-shrink-0" />
                      }
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                    </div>
                    <StatusBadge status={project.status} label={project.statusLabel} />
                  </div>
                  <CardDescription className="text-base font-medium text-foreground/70">
                    {project.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>

                  <div className="bg-primary/5 rounded-lg p-3 border-l-2 border-primary/30">
                    <p className="text-sm text-foreground/80 italic">{project.hypothesis}</p>
                  </div>

                  <p className="text-xs text-muted-foreground">{project.learning}</p>

                  <div className="mt-auto pt-2">
                    {project.url ? (
                      <Button className="w-full" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {project.cta}
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" disabled variant="outline">
                        <Construction className="w-4 h-4 mr-2" />
                        {project.cta}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{t.footer.title}</h3>
            <p className="text-muted-foreground">{t.footer.subtitle}</p>
          </div>
          <p className="text-sm text-muted-foreground">© 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Laboratorio;
