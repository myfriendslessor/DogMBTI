import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import PersonalityCard from '@/components/PersonalityCard';
import ShareButtons from '@/components/ShareButtons';
import { personalityTypes } from '@shared/personalityTypes';
import { Home, RefreshCw } from 'lucide-react';

export default function Result() {
  const [, setLocation] = useLocation();
  
  const params = new URLSearchParams(window.location.search);
  const mbtiType = params.get('type') || 'ENFP';
  
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
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            테스트 결과
          </h1>
          <p className="text-muted-foreground">
            우리 강아지의 성격 유형을 확인해보세요!
          </p>
        </div>

        <PersonalityCard personality={personality} />

        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">결과를 공유해보세요!</h3>
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
            다시 테스트하기
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setLocation('/')}
            data-testid="button-home"
          >
            <Home className="w-4 h-4 mr-2" />
            홈으로 가기
          </Button>
        </div>
      </div>
    </div>
  );
}
