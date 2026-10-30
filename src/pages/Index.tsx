import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, GraduationCap, Search, Wrench, Compass, Linkedin, Mail, Hash, FileText, FlaskConical, TrendingUp, User, Zap, Target } from "lucide-react";
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

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const contactUrl = "https://forms.gle/qAp7Xry7DFqTqDKo6";

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
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium" data-id="cta-reunion-gratuita" asChild>
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

      {/* 1. Hero Section */}
      <section className="bg-muted/30 py-20 px-4 pt-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Button size="lg" className="h-auto whitespace-normal text-base px-6 py-4" data-id="cta-hero-teams" asChild>
              <a href="#equipos">{t.hero.teamCta}</a>
            </Button>
            <Button size="lg" className="h-auto whitespace-normal text-base px-6 py-4" data-id="cta-hero-professionals" asChild>
              <a href="#profesionales">{t.hero.professionalCta}</a>
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
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-border/40 bg-muted/30">
                <div className="mt-0.5 shrink-0">{painIcons[item.icon]}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two equally weighted service paths */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.solutions.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { id: "equipos", content: t.solutions.teams, icon: <Rocket className="h-8 w-8 text-primary shrink-0" /> },
              { id: "profesionales", content: t.solutions.professionals, icon: <GraduationCap className="h-8 w-8 text-primary shrink-0" /> },
            ].map(({ id, content, icon }) => (
              <Card key={id} id={id} className="h-full flex flex-col scroll-mt-24">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {icon}
                    <CardTitle className="text-2xl">{content.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-8">
                  <div className="space-y-6 flex-1">
                    {content.items.map((item) => (
                      <div key={item.title}>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" className="h-auto whitespace-normal py-3 text-center" data-id={`cta-${id}`} asChild>
                    <a href={contactUrl} target="_blank" rel="noopener noreferrer">{content.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mt-10 leading-relaxed">{t.solutions.aiPerspective}</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.workingTogether.title}</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {t.workingTogether.items.map((item, i) => (
              <div key={item.title}>
                {[<Search className="h-10 w-10 text-primary mb-4" />, <Wrench className="h-10 w-10 text-primary mb-4" />, <Compass className="h-10 w-10 text-primary mb-4" />][i]}
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">{t.workingTogether.description}</p>
        </div>
      </section>

      {/* 6. Cases Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.cases.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: t.solutions.teams.title, items: [t.cases.healthtech, t.cases.aiStartup, t.cases.edtech] },
              { title: t.solutions.professionals.title, items: [t.cases.mentorshipCase, t.cases.functionalAnalyst] },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-semibold mb-6">{group.title}</h3>
                <div className="space-y-6">
                  {group.items.map((c) => (
                    <article key={c.title} className="rounded-xl border border-border/40 bg-background p-6">
                      <h4 className="text-xl font-semibold mb-5">{c.title}</h4>
                      <dl className="space-y-4">
                        <div>
                          <dt className="text-sm font-semibold mb-1">{t.cases.labels.problem}</dt>
                          <dd className="text-sm text-muted-foreground leading-relaxed">{c.before}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-semibold mb-1">{t.cases.labels.work}</dt>
                          <dd className="text-sm text-muted-foreground leading-relaxed">{c.work}</dd>
                        </div>
                        {"outcome" in c && (
                          <div>
                            <dt className="text-sm font-semibold mb-1">{t.cases.labels.outcome}</dt>
                            <dd className="text-sm leading-relaxed">{c.outcome}</dd>
                          </div>
                        )}
                      </dl>
                    </article>
                  ))}
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
      <section className="py-20 px-4 bg-muted/30">
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
                {language === 'es' ? 'Consultame →' : 'Contact me →'}
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
      <footer className="bg-muted/30 py-8 px-4">
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