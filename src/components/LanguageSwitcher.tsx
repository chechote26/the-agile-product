import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex rounded-md border border-border overflow-hidden">
        <Button
          variant={language === 'es' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('es')}
          className="rounded-none px-3 py-1 text-xs"
        >
          ES
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="rounded-none px-3 py-1 text-xs"
        >
          EN
        </Button>
      </div>
    </div>
  );
};