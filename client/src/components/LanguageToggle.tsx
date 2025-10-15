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
      size="default"
      onClick={toggleLanguage}
      data-testid="button-language-toggle"
      className="font-medium"
    >
      <Languages className="h-4 w-4 mr-2" />
      {language === 'ko' ? 'English' : 'Korean'}
    </Button>
  );
}
