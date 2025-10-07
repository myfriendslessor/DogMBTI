import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import type { PersonalityType } from '@shared/personalityTypes';

import enfj from '@assets/ENFJ_1759816835952.png';
import enfp from '@assets/ENFP_1759816835953.png';
import entj from '@assets/ENTJ_1759816835953.png';
import entp from '@assets/ENTP_1759816835953.png';
import esfj from '@assets/ESFJ_1759816835954.png';
import esfp from '@assets/ESFP_1759816835954.png';
import estj from '@assets/ESTJ_1759816835954.png';
import estp from '@assets/ESTP_1759816835955.png';
import infj from '@assets/INFJ_1759816835955.png';
import infp from '@assets/INFP_1759816835956.png';
import intj from '@assets/INTJ_1759816835956.png';
import intp from '@assets/INTP_1759816835956.png';
import isfj from '@assets/ISFJ_1759816835957.png';
import isfp from '@assets/ISFP_1759816835957.png';
import istj from '@assets/ISTJ_1759816835957.png';
import istp from '@assets/ISTP_1759816835958.png';

const mbtiImages: Record<string, string> = {
  ENFJ: enfj,
  ENFP: enfp,
  ENTJ: entj,
  ENTP: entp,
  ESFJ: esfj,
  ESFP: esfp,
  ESTJ: estj,
  ESTP: estp,
  INFJ: infj,
  INFP: infp,
  INTJ: intj,
  INTP: intp,
  ISFJ: isfj,
  ISFP: isfp,
  ISTJ: istj,
  ISTP: istp,
};

interface PersonalityCardProps {
  personality: PersonalityType;
}

export default function PersonalityCard({ personality }: PersonalityCardProps) {
  const { t } = useLanguage();
  
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${personality.color}`} />
      
      <CardHeader className="text-center space-y-4 pt-8">
        <div className="flex justify-center mb-4">
          <img 
            src={mbtiImages[personality.type]} 
            alt={personality.type}
            className="w-[461px] h-[461px] object-contain"
            data-testid={`img-mbti-${personality.type.toLowerCase()}`}
          />
        </div>
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
            {personality.summary || personality.description}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🐾</span>
            {t('result.characteristics')}
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

        {personality.detailedTraits && (
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span>✨</span>
              {personality.detailedTraits.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {personality.detailedTraits.description}
            </p>
            <div className="space-y-6">
              {personality.detailedTraits.points.map((point, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-lg text-foreground">
                    {point.heading}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {personality.guide && (
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span>📚</span>
              {personality.guide.title}
            </h3>
            <div className="space-y-6">
              {personality.guide.points.map((point, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-lg text-foreground">
                    {point.heading}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>💭</span>
            {t('result.hiddenEmotions')}
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
            {t('result.recommendedActivities')}
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

        {personality.message && (
          <div className="border-t pt-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>💌</span>
              {t('result.message')}
            </h3>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-foreground leading-relaxed italic">
                {personality.message}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
