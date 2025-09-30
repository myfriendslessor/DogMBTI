import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { PersonalityType } from '@shared/personalityTypes';

interface PersonalityCardProps {
  personality: PersonalityType;
}

export default function PersonalityCard({ personality }: PersonalityCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${personality.color}`} />
      
      <CardHeader className="text-center space-y-4 pt-8">
        <div className="text-6xl mb-4">{personality.emoji}</div>
        <Badge variant="secondary" className="mx-auto text-lg px-4 py-1">
          {personality.type}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-display font-bold">
          {personality.name}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {personality.subtitle}
        </p>
      </CardHeader>

      <CardContent className="space-y-8 pb-8">
        <div>
          <p className="text-base leading-relaxed text-foreground">
            {personality.description}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🐾</span>
            성격 특징
          </h3>
          <ul className="space-y-2">
            {personality.traits.map((trait, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="flex-1">{trait}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>💭</span>
            숨은 감정
          </h3>
          <ul className="space-y-2">
            {personality.hiddenEmotions.map((emotion, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span className="flex-1">{emotion}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🎾</span>
            추천 놀이
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {personality.recommendedActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg p-3 text-sm hover-elevate"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
