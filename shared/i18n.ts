import type { Language } from '../client/src/contexts/LanguageContext';
import { personalityTypes, type PersonalityType } from './personalityTypes';
import { personalityTypesEn } from './personalityTypes.en';
import { questions, type Question } from './questions';
import { questionsEn } from './questions.en';

export const translations = {
  ko: {
    share: {
      kakao: '카카오톡 공유',
      whatsapp: 'WhatsApp 공유',
      general: '결과 공유하기',
      copyLink: '링크 복사',
      shareText: (mbtiType: string, name: string) => `나의 강아지 MBTI는 ${mbtiType} - ${name}! 🐾`,
      shareTitle: '강아지 MBTI 테스트 결과',
      kakaoToast: {
        title: '카카오톡 공유',
        description: '카카오톡 공유 기능은 실제 앱에서 구현됩니다.'
      },
      copySuccess: {
        title: '링크 복사 완료!',
        description: '결과 링크가 클립보드에 복사되었습니다.'
      }
    }
  },
  en: {
    share: {
      kakao: 'Share on KakaoTalk',
      whatsapp: 'Share on WhatsApp',
      general: 'Share Results',
      copyLink: 'Copy Link',
      shareText: (mbtiType: string, name: string) => `My dog's MBTI is ${mbtiType} - ${name}! 🐾`,
      shareTitle: 'Dog MBTI Test Results',
      kakaoToast: {
        title: 'KakaoTalk Share',
        description: 'KakaoTalk sharing will be implemented in the actual app.'
      },
      copySuccess: {
        title: 'Link Copied!',
        description: 'The result link has been copied to your clipboard.'
      }
    }
  }
};

export function getPersonalityTypes(language: Language): Record<string, PersonalityType> {
  if (language === 'en') {
    // Merge English translations with Korean fallbacks
    const merged: Record<string, PersonalityType> = { ...personalityTypes };
    Object.keys(personalityTypesEn).forEach(key => {
      merged[key] = personalityTypesEn[key];
    });
    return merged;
  }
  return personalityTypes;
}

export function getQuestions(language: Language): Question[] {
  if (language === 'en') {
    // Use English questions if available, else fall back to Korean
    return questionsEn.length > 0 ? [...questionsEn, ...questions.slice(questionsEn.length)] : questions;
  }
  return questions;
}

export function getTranslations(language: Language) {
  return translations[language] || translations.ko;
}
