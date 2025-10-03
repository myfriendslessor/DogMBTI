import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      data-testid="button-language-toggle"
      className="relative"
    >
      <Languages className="h-4 w-4" />
      <span className="sr-only">Toggle language</span>
      <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-background border border-border rounded px-1">
        {language.toUpperCase()}
      </span>
    </Button>
  );
}
