import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Package, GraduationCap, Brain, Search, Wrench, Compass, ExternalLink, Calendar, Linkedin, Mail, Hash, FileText, FlaskConical, AlertCircle, TrendingUp, Briefcase, User, ArrowRight, Zap, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations } from "@/utils/translations";
import { Link } from "react-router-dom";
import logo from "@/assets/The Agile Product (5).png";

const painIcons: Record<string, React.ReactNode> = {
  chaos: <Zap className="h-6 w-6 text-primary" />,
  priority: <Target className="h-6 w-6 text-primary" />,
  effort: <TrendingUp className="h-6 w-6 text-primary" />,
  career: <User className="h-6 w-6 text-primary" />,
};

const careerIcons: Record<string, React.ReactNode> = {
  job: <Briefcase className="h-8 w-8 text-primary" />,
  grow: <TrendingUp className="h-8 w-8 text-primary" />,
  brand: <Users className="h-8 w-8 text-primary" />,
};

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // SENSOR DE TRACKING (React Standard)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-id]');
      if (target) {
        const id = target.getAttribute('data-id');
        // @ts-ignore
        if (typeof window.gtag === 'function') {
          // @ts-ignore
          window.gtag('event', 'button_interaction', {
            'button_name': id
          });
          console.log('✅ Tracking enviado a GA4:', id);
        }
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="The Agile Product" className="w-auto h-8 min-h-8 md:h-10 md:min-h-10 object-contain" />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" data-id="cta-blog" asChild>
              <Link to="/blog">
                <FileText className="w-4 h-4 mr-1" />
                {language === 'es' ? 'Blog' : 'Blog'}
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-medium" data-id="cta-cursos" asChild>
              <Link to="/cursos">
                <GraduationCap className="w-4 h-4 mr-1" />
                {language === 'es' ? 'Cursos' : 'Courses'}
              </Link>
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium" data-id="cta-reunion-gratuita" asChild>
              <a href="https://forms.gle/qAp7Xry7DFqTqDKo6" target="_blank" rel="noopener noreferrer">
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

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4 pt-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="text-lg px-8 py-6" data-id="cta-reunion-gratuita" asChild>
              <a href="https://forms.gle/qAp7Xry7DFqTqDKo6" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                {t.hero.cta}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Pain Points Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.painPoints.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {t.painPoints.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-border/40 bg-secondary/5">
                <div className="mt-0.5 shrink-0">{painIcons[item.icon]}</div>
                <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="text-base px-8" data-id="cta-reunion-gratuita" asChild>
              <a href="https://forms.gle/qAp7Xry7DFqTqDKo6" target="_blank" rel="noopener noreferrer">
                {t.painPoints.cta}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Solutions Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.solutions.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Rocket className="h-8 w-8 text-primary shrink-0" />
                  <CardTitle className="text-xl">{t.solutions.agile.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground italic mt-1">{t.solutions.agile.problem}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.solutions.agile.solution}</CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Package className="h-8 w-8 text-primary shrink-0" />
                  <CardTitle className="text-xl">{t.solutions.delivery.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground italic mt-1">{t.solutions.delivery.problem}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.solutions.delivery.solution}</CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-primary shrink-0" />
                  <CardTitle className="text-xl">{t.solutions.training.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground italic mt-1">{t.solutions.training.problem}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.solutions.training.solution}</CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-primary shrink-0" />
                  <CardTitle className="text-xl">{t.solutions.mentorship.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground italic mt-1">{t.solutions.mentorship.problem}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{t.solutions.mentorship.solution}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Career Mentorship Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t.careerMentorship.title}
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            {t.careerMentorship.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {t.careerMentorship.items.map((item, i) => (
              <Card key={i} className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-2">{careerIcons[item.icon]}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="text-base px-8" data-id="cta-reunion-gratuita" asChild>
              <a href="https://forms.gle/qAp7Xry7DFqTqDKo6" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                {t.careerMentorship.cta}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Mentorship Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.mentorshipBenefits.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.mentorshipBenefits.diagnosis}</h3>
            </div>
            <div className="text-center">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.mentorshipBenefits.recommendations}</h3>
            </div>
            <div className="text-center">
              <Compass className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.mentorshipBenefits.guidance}</h3>
            </div>
          </div>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.mentorshipBenefits.description}
          </p>
        </div>
      </section>

      {/* 6. Cases Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.cases.title}
          </h2>
          <div className="space-y-8">
            {[
              t.cases.healthtech,
              t.cases.mentorshipCase,
              t.cases.aiStartup,
              t.cases.edtech,
            ].map((c, i) => (
              <div key={i} className="rounded-xl border border-border/40 overflow-hidden">
                <div className="px-6 py-4 bg-background">
                  <h3 className="text-xl font-semibold mb-4">{c.title}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary/40 rounded px-2 py-1 mt-0.5 shrink-0">Antes</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{c.before}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 dark:bg-green-900/30 rounded px-2 py-1 mt-0.5 shrink-0">Después</span>
                      <p className="text-sm leading-relaxed">{c.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.about.title}
          </h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg leading-relaxed mb-6">{t.about.intro}</p>
            <p className="text-lg leading-relaxed mb-6">{t.about.experience}</p>
            <p className="text-lg leading-relaxed mb-6">{t.about.approach}</p>
            <p className="text-lg leading-relaxed text-primary font-semibold">{t.about.philosophy}</p>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.finalCta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8" data-id="cta-reunion-gratuita" asChild>
              <a href="https://forms.gle/qAp7Xry7DFqTqDKo6" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                {t.finalCta.scheduleMentorship}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" data-id="cta-linkedin" asChild>
              <a href="https://www.linkedin.com/in/ezequiel-tuero/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                {t.finalCta.contactLinkedIn}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" data-id="cta-email" asChild>
              <a href="mailto:tuero.eze@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                {t.finalCta.writeEmail}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" data-id="cta-discord" asChild>
              <a href="https://discord.gg/JawAkt6mDb" target="_blank" rel="noopener noreferrer">
                <Hash className="mr-2 h-5 w-5" />
                {t.finalCta.joinDiscord}
              </a>
            </Button>
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

export default Index;