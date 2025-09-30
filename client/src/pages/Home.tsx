import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';
import heroImage from '@assets/generated_images/Happy_dogs_playing_together_47431bb9.png';
import { PawPrint, Heart, Sparkles } from 'lucide-react';

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            🐾 나의 강아지 MBTI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            우리 강아지는 어떤 성격일까?<br />
            60개 질문으로 알아보는 반려견 성격 테스트
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto font-bold"
            onClick={() => setLocation('/test')}
            data-testid="button-start-test"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            테스트 시작하기
          </Button>
          <p className="text-white/70 mt-4 text-sm">
            ✨ 이미 <span className="font-bold text-primary">50만 명</span>이 테스트했어요!
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            테스트로 알 수 있는 것
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardContent className="pt-8 text-center">
                <PawPrint className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">성격 유형</h3>
                <p className="text-muted-foreground leading-relaxed">
                  16가지 성격 유형 중 우리 강아지의 MBTI를 정확하게 분석해요
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-8 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">숨은 감정</h3>
                <p className="text-muted-foreground leading-relaxed">
                  겉으로 드러나지 않는 강아지의 진짜 마음을 알려드려요
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-8 text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">추천 놀이</h3>
                <p className="text-muted-foreground leading-relaxed">
                  우리 강아지 성격에 딱 맞는 놀이와 활동을 추천해드려요
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            인기 성격 유형
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: '🌟', type: 'ENFP', name: '별을 좇는 모험가' },
              { emoji: '🎉', type: 'ESFP', name: '세상을 밝히는 축제꾼' },
              { emoji: '🌙', type: 'INFP', name: '조용한 위로자' },
              { emoji: '🕊', type: 'ISFJ', name: '헌신적인 수호자' },
            ].map((item) => (
              <Card key={item.type} className="hover-elevate cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <div className="text-sm font-bold text-primary mb-1">{item.type}</div>
                  <div className="text-sm text-foreground">{item.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            우리 강아지를 더 잘 이해하고 싶다면?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            지금 바로 테스트를 시작해보세요
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto font-bold"
            onClick={() => setLocation('/test')}
            data-testid="button-start-test-bottom"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            테스트 시작하기
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
