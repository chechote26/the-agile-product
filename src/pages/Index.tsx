
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Package, GraduationCap, Brain, Search, Wrench, Compass, ExternalLink, Calendar, Linkedin, Mail, Hash } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { translations } from "@/utils/translations";
import logo from "@/assets/The Agile Product (5).png";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="The Agile Product" className="w-20 h-20 md:w-24 md:h-24" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://calendly.com/eze-tuero/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              {t.hero.cta}
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.about.title}
          </h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-lg leading-relaxed mb-6">
              {t.about.intro}
            </p>
            <p className="text-lg leading-relaxed mb-6">
              {t.about.experience}
            </p>
            <p className="text-lg leading-relaxed mb-6">
              {t.about.approach}
            </p>
            <p className="text-lg leading-relaxed text-primary font-semibold">
              {t.about.philosophy}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.services.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Rocket className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{t.services.agile.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.services.agile.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Package className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{t.services.delivery.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.services.delivery.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{t.services.training.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.services.training.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{t.services.mentorship.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.services.mentorship.description}
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
            {t.cases.title}
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.cases.healthtech.title}</h3>
                <p className="text-muted-foreground">
                  {t.cases.healthtech.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.cases.mentorshipCase.title}</h3>
                <p className="text-muted-foreground">
                  {t.cases.mentorshipCase.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.cases.aiStartup.title}</h3>
                <p className="text-muted-foreground">
                  {t.cases.aiStartup.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.cases.edtech.title}</h3>
                <p className="text-muted-foreground">
                  {t.cases.edtech.description}
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

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.finalCta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.finalCta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="https://calendly.com/eze-tuero/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                {t.finalCta.scheduleMentorship}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="https://www.linkedin.com/in/ezequiel-tuero/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                {t.finalCta.contactLinkedIn}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="mailto:tuero.eze@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                {t.finalCta.writeEmail}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="https://discord.gg/JawAkt6mDb" target="_blank" rel="noopener noreferrer">
                <Hash className="mr-2 h-5 w-5" />
                {t.finalCta.joinDiscord}
              </a>
            </Button>
          </div>
          
          <div className="mt-8">
            <Button variant="ghost" size="lg" className="px-8" asChild>
              <a href="/blog">
                📝 {language === 'es' ? 'Visitar Blog' : 'Visit Blog'}
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
