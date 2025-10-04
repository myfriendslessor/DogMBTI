import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import heroImage from '@assets/generated_images/Happy_dogs_playing_together_47431bb9.png';
import { PawPrint, Heart, Sparkles } from 'lucide-react';

export default function Home() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>
      
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            🐾 {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {t('home.subtitle')}<br />
            {t('home.description')}
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto font-bold"
            onClick={() => setLocation('/test')}
            data-testid="button-start-test"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {t('home.startButton')}
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            {t('home.features.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardContent className="pt-8 text-center">
                <PawPrint className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">{t('home.features.types')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.features.typesDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-8 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">{t('home.features.questions')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.features.questionsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-8 text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">{t('home.features.detailed')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.features.detailedDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            {t('home.popularTypes')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: '🌟', type: 'ENFP' },
              { emoji: '🎉', type: 'ESFP' },
              { emoji: '🌙', type: 'INFP' },
              { emoji: '🕊', type: 'ISFJ' },
            ].map((item) => (
              <Card key={item.type} className="hover-elevate cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <div className="text-sm font-bold text-primary mb-1">{item.type}</div>
                  <div className="text-sm text-foreground">{t(`home.type.${item.type}`)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            {t('home.subtitle')}
          </h2>
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto font-bold"
            onClick={() => setLocation('/test')}
            data-testid="button-start-test-bottom"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {t('home.startButton')}
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 강아지 MBTI 테스트. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
