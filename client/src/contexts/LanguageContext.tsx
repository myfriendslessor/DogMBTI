import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Home page
    'home.title': '강아지 MBTI 테스트',
    'home.subtitle': '우리 강아지의 숨겨진 성격을 알아보세요',
    'home.description': '36개의 질문으로 강아지의 MBTI 성격 유형을 분석합니다',
    'home.intro.line1': '우리 강아지는 어떤 성격일까요?',
    'home.intro.line2': '강아지들도 사람처럼 성격이 다 다릅니다!',
    'home.intro.line3': '\'강아지 MBTI\'는 질문 몇 가지로',
    'home.intro.line4': '우리 멍멍이의 숨은 성격과 마음을 알아보는 테스트입니다.',
    'home.intro.after': '테스트가 끝나면,',
    'home.intro.item1': '성격 유형별 분석 리포트',
    'home.intro.item2': '어울리는 놀이 & 훈련 팁',
    'home.intro.item3': '보호자에게 전하는 감동 메시지',
    'home.intro.item4': '까지 한 번에 만나볼 수 있어요!',
    'home.intro.ready': '우리 강아지의 진짜 마음속을 들여다볼 준비, 되셨나요?',
    'home.startButton': '테스트 시작하기',
    'home.features.title': '테스트 특징',
    'home.features.questions': '36개의 세심한 질문',
    'home.features.questionsDesc': '강아지의 행동 패턴을 정확히 분석',
    'home.features.types': '16가지 성격 유형',
    'home.features.typesDesc': 'MBTI 기반의 상세한 성격 분석',
    'home.features.detailed': '상세한 분석 결과',
    'home.features.detailedDesc': '특성, 훈련 가이드, 추천 활동 제공',
    
    // Test page
    'test.progress': '질문',
    'test.loading': '결과를 분석하고 있습니다...',
    
    // Result page
    'result.yourDog': '우리 강아지는',
    'result.type': '타입',
    'result.characteristics': '특성',
    'result.hiddenEmotions': '숨겨진 감정',
    'result.recommendedActivities': '추천 활동',
    'result.detailedTraits': '주요 특징 및 소통 방식',
    'result.guide': '추천 훈련 및 양육 가이드',
    'result.message': '가족에게 보내는 메시지',
    'result.shareTitle': '결과 공유하기',
    'result.retryButton': '다시 테스트하기',
    'result.shareButton': '결과 공유하기',
    
    // Share
    'share.title': '공유하기',
    'share.kakao': '카카오톡',
    'share.facebook': '페이스북',
    'share.twitter': '트위터',
    'share.link': '링크 복사',
    'share.linkCopied': '링크가 복사되었습니다!',
    
    // Popular types
    'home.popularTypes': '인기 성격 유형',
    'home.type.ENFP': '별을 좇는 모험가',
    'home.type.ESFP': '세상을 밝히는 축제꾼',
    'home.type.INFP': '조용한 위로자',
    'home.type.ISFJ': '헌신적인 수호자',
  },
  en: {
    // Home page
    'home.title': 'Dog MBTI Test',
    'home.subtitle': 'Discover Your Dog\'s Hidden Personality',
    'home.description': 'Analyze your dog\'s MBTI personality type with 36 questions',
    'home.intro.line1': 'What\'s your dog\'s personality type?',
    'home.intro.line2': 'Just like humans, every dog has a unique character!',
    'home.intro.line3': 'With a few fun questions, Dog MBTI helps you discover',
    'home.intro.line4': 'your pup\'s hidden traits and emotional world.',
    'home.intro.after': 'After the test, you\'ll get:',
    'home.intro.item1': 'A detailed personality report',
    'home.intro.item2': 'Playtime & training tips tailored to your dog',
    'home.intro.item3': 'A heartfelt message "from your dog to you"',
    'home.intro.item4': '',
    'home.intro.ready': 'Ready to peek into your dog\'s heart? Let\'s begin! 🐕',
    'home.startButton': 'Start Test',
    'home.features.title': 'Test Features',
    'home.features.questions': '36 Thoughtful Questions',
    'home.features.questionsDesc': 'Accurately analyze your dog\'s behavior patterns',
    'home.features.types': '16 Personality Types',
    'home.features.typesDesc': 'Detailed MBTI-based personality analysis',
    'home.features.detailed': 'Detailed Analysis Results',
    'home.features.detailedDesc': 'Traits, training guides, and activity recommendations',
    
    // Test page
    'test.progress': 'Question',
    'test.loading': 'Analyzing results...',
    
    // Result page
    'result.yourDog': 'Your Dog is',
    'result.type': 'Type',
    'result.characteristics': 'Characteristics',
    'result.hiddenEmotions': 'Hidden Emotions',
    'result.recommendedActivities': 'Recommended Activities',
    'result.detailedTraits': 'Key Traits & Communication Style',
    'result.guide': 'Training & Care Guide',
    'result.message': 'Message to Family',
    'result.shareTitle': 'Share Your Results',
    'result.retryButton': 'Retake Test',
    'result.shareButton': 'Share Results',
    
    // Share
    'share.title': 'Share',
    'share.kakao': 'KakaoTalk',
    'share.facebook': 'Facebook',
    'share.twitter': 'Twitter',
    'share.link': 'Copy Link',
    'share.linkCopied': 'Link copied!',
    
    // Popular types
    'home.popularTypes': 'Popular Personality Types',
    'home.type.ENFP': 'The Inspirer',
    'home.type.ESFP': 'The Entertainer',
    'home.type.INFP': 'The Idealist',
    'home.type.ISFJ': 'The Protector',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('dogMbtiLanguage');
    return (saved === 'ko' ? 'ko' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('dogMbtiLanguage', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ko] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
