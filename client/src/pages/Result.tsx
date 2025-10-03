import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import PersonalityCard from '@/components/PersonalityCard';
import ShareButtons from '@/components/ShareButtons';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { getPersonalityTypes } from '@shared/i18n';
import { Home, RefreshCw } from 'lucide-react';

export default function Result() {
  const [, setLocation] = useLocation();
  const { language, t } = useLanguage();
  
  const params = new URLSearchParams(window.location.search);
  const mbtiType = params.get('type') || 'ENFP';
  
  const personalityTypes = getPersonalityTypes(language);
  const personality = personalityTypes[mbtiType];

  useEffect(() => {
    if (!personality) {
      setLocation('/');
    }
  }, [personality, setLocation]);

  if (!personality) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {language === 'ko' ? '테스트 결과' : 'Test Results'}
          </h1>
          <p className="text-muted-foreground">
            {t('result.yourDog')}
          </p>
        </div>

        <PersonalityCard personality={personality} />

        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{t('result.shareTitle')}</h3>
            <ShareButtons 
              mbtiType={personality.type}
              personalityName={personality.name}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setLocation('/test')}
            data-testid="button-retake"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            {t('result.retryButton')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setLocation('/')}
            data-testid="button-home"
          >
            <Home className="w-4 h-4 mr-2" />
            {language === 'ko' ? '홈으로 가기' : 'Go Home'}
          </Button>
        </div>
      </div>
    </div>
  );
}
