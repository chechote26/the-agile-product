
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Package, GraduationCap, Brain, Search, Wrench, Compass, ExternalLink, Calendar, Linkedin, Mail, Hash } from "lucide-react";
import logo from "@/assets/The Agile Product (5).png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="The Agile Product" className="w-20 h-20 md:w-24 md:h-24" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transforma tus equipo de Producto y Tecnología
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Con soluciones ágiles, prácticas y adaptadas a tu realidad
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://calendly.com/eze-tuero/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Agenda una mentoría gratuita
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quién soy y cómo puedo ayudarte
          </h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg leading-relaxed mb-6">
              Soy Eze Tuero, ayudo a startups y scaleups a mejorar la forma en que trabajan sus equipos de Producto & Tech.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Con más de 14 años de experiencia en gestión de producto - y 6 en el mundo tech - combino agilidad práctica, foco en resultados y conocimiento de producto para impulsar equipos más autónomos y eficientes.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Trabajo 1:1 con líderes y equipos que necesitan claridad para organizar su trabajo, priorizar mejor y entregar valor de forma continua.
            </p>
            <p className="text-lg leading-relaxed text-primary font-semibold">
              No vendo fórmulas mágicas. Te acompaño a construir una forma de trabajo que funcione para vos y tu contexto.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Servicios principales
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Rocket className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Agile Project Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Diseño marcos ágiles personalizados (Scrum, Kanban, híbridos) para que tu equipo se organice mejor y entregue con foco.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Package className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Product Delivery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Acompaño el ciclo completo de entrega: priorización, planificación, releases, métricas y mejoras continuas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Formación en Gestión de Producto</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Capacitación práctica sobre discovery, definición de backlog, Jira, roles y flujos de trabajo.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Mentorías 1:1</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sesiones personalizadas para ayudarte a resolver desafíos concretos en agilidad, delivery o liderazgo de producto.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Casos reales, resultados concretos
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">HealthTech en expansión</h3>
                <p className="text-muted-foreground">
                  Implementamos Scrum y Kanban, unificamos backlogs en Jira y redefinimos roles para escalar equipos y procesos.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">EdTech regional</h3>
                <p className="text-muted-foreground">
                  Diseñé y dicté un curso avanzado de gestión de productos, con contenido práctico, desafíos reales y sesiones evaluadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Benefits */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Qué te llevas de una mentoría?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Diagnóstico express de tu contexto actual</h3>
            </div>
            
            <div className="text-center">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Recomendaciones claras y aplicables desde el día 1</h3>
            </div>
            
            <div className="text-center">
              <Compass className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Guía práctica para implementar mejoras reales</h3>
            </div>
          </div>
          
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            La mentoría es una conversación directa y personalizada, no una clase teórica. En 30 minutos, vamos al grano sobre los desafíos de tu equipo.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Conversamos sobre tu equipo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agenda una mentoría gratuita para identificar oportunidades de mejora reales y empezar a transformar tu forma de trabajar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="https://calendly.com/eze-tuero/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Agenda tu mentoría
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="https://www.linkedin.com/in/ezequiel-tuero/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Contactame por LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="mailto:tuero.eze@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Escribime por email
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="https://discord.gg/JawAkt6mDb" target="_blank" rel="noopener noreferrer">
                <Hash className="mr-2 h-5 w-5" />
                Unite al Discord
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">The Agile Product · Eze Tuero</h3>
            <p className="text-muted-foreground">Consultoría en Agilidad y Producto · LATAM</p>
          </div>
          <p className="text-sm text-muted-foreground">© 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
