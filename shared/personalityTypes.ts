import { questions, type Question } from './questions';

export interface PersonalityType {
  type: string;
  emoji: string;
  name: string;
  subtitle: string;
  description: string;
  traits: string[];
  hiddenEmotions: string[];
  recommendedActivities: string[];
  color: string;
}

export const personalityTypes: Record<string, PersonalityType> = {
  ENFP: {
    type: 'ENFP',
    emoji: '🌟',
    name: '별을 좇는 모험가',
    subtitle: '세상 모든 게 궁금하고, 매일 새로운 세상을 만나고 싶어 하는 영혼',
    description: '호기심 가득한 우리 강아지는 매일이 새로운 모험입니다. 산책길의 모든 냄새, 모든 소리에 귀 기울이며 세상을 탐험하죠. 다른 강아지들과 금방 친해지고, 언제나 즐거운 에너지로 주변을 밝힙니다.',
    traits: [
      '호기심이 넘치고 새로운 것을 두려워하지 않아요',
      '다른 강아지들과 금방 친해지는 사교성',
      '에너지가 넘치고 활동적이에요',
      '감정 표현이 풍부하고 솔직해요'
    ],
    hiddenEmotions: [
      '가끔은 너무 많은 자극에 피곤함을 느껴요',
      '혼자만의 시간도 필요하지만 표현을 잘 못해요'
    ],
    recommendedActivities: [
      '새로운 공원이나 산책로 탐험하기',
      '다양한 강아지 친구들과 놀이 시간',
      '후각을 자극하는 노즈워크 게임',
      '애견 카페나 새로운 장소 방문'
    ],
    color: 'from-yellow-400 to-orange-400'
  },
  ENTP: {
    type: 'ENTP',
    emoji: '🎭',
    name: '장난꾸러기 발명가',
    subtitle: '세상의 규칙을 비틀어 놀라운 방법으로 즐거움을 찾는 자유로운 사고꾼',
    description: '똑똑하고 장난기 가득한 우리 강아지는 항상 새로운 방법으로 놀이를 만들어냅니다. 규칙을 깨는 것을 즐기고, 예상치 못한 행동으로 주인을 놀라게 하죠.',
    traits: [
      '똑똑하고 문제 해결 능력이 뛰어나요',
      '장난치는 것을 좋아해요',
      '독창적인 방법으로 놀이를 만들어요',
      '호기심이 많고 실험적이에요'
    ],
    hiddenEmotions: [
      '때로는 관심받고 싶어서 장난을 쳐요',
      '루틴에 지루함을 쉽게 느껴요'
    ],
    recommendedActivities: [
      '퍼즐 장난감과 두뇌 게임',
      '새로운 트릭 가르치기',
      '숨바꼭질이나 찾기 게임',
      '장애물 코스 만들어 도전하기'
    ],
    color: 'from-purple-400 to-pink-400'
  },
  ENFJ: {
    type: 'ENFJ',
    emoji: '💞',
    name: '마음을 모아주는 따뜻한 리더',
    subtitle: '가족과 친구들을 연결하며 모두가 행복하길 바라는 따스한 안내자',
    description: '따뜻하고 배려심 많은 우리 강아지는 천성적인 리더입니다. 가족 모두를 보살피고, 다른 반려동물과도 조화롭게 지내며, 모두가 행복한지 확인하는 것을 중요하게 여깁니다.',
    traits: [
      '다른 강아지나 사람을 잘 돌봐요',
      '공감 능력이 뛰어나요',
      '화합을 중시하고 갈등을 싫어해요',
      '사교적이고 친화적이에요'
    ],
    hiddenEmotions: [
      '모두를 행복하게 하려다 자신을 희생해요',
      '인정받고 싶은 욕구가 강해요'
    ],
    recommendedActivities: [
      '다른 반려동물과 함께하는 놀이',
      '가족 모두와 함께하는 산책',
      '봉사견 활동이나 테라피견 훈련',
      '그룹 훈련 수업'
    ],
    color: 'from-pink-400 to-rose-400'
  },
  ENTJ: {
    type: 'ENTJ',
    emoji: '🛡',
    name: '든든한 길잡이 대장',
    subtitle: '목표를 향해 힘차게 나아가고, 주인을 안전하게 지켜내는 결단력 있는 존재',
    description: '자신감 넘치고 책임감 강한 우리 강아지는 천성적인 보호자입니다. 명확한 목표의식을 가지고 행동하며, 가족을 지키는 것을 자신의 임무로 여깁니다.',
    traits: [
      '리더십이 강하고 자신감이 넘쳐요',
      '목표 지향적이고 효율적이에요',
      '보호 본능이 강해요',
      '결단력 있고 용감해요'
    ],
    hiddenEmotions: [
      '완벽하지 못한 자신에게 엄격해요',
      '통제력을 잃는 것을 두려워해요'
    ],
    recommendedActivities: [
      '어질리티나 복종 훈련',
      '경비견이나 경호견 훈련',
      '목표가 있는 게임과 미션',
      '하이킹이나 장거리 산책'
    ],
    color: 'from-blue-500 to-indigo-500'
  },
  ESFP: {
    type: 'ESFP',
    emoji: '🎉',
    name: '세상을 밝히는 축제꾼',
    subtitle: '언제 어디서든 즐거움과 웃음을 퍼뜨리는 반짝이는 에너지',
    description: '쾌활하고 활기찬 우리 강아지는 타고난 엔터테이너입니다. 어디를 가든 분위기 메이커가 되고, 모든 순간을 축제처럼 만드는 재주가 있죠.',
    traits: [
      '에너지 넘치고 활동적이에요',
      '사교적이고 친근해요',
      '현재를 즐기는 능력이 뛰어나요',
      '표현이 풍부하고 재미있어요'
    ],
    hiddenEmotions: [
      '관심의 중심이 되지 못하면 외로워해요',
      '지루함을 참지 못해요'
    ],
    recommendedActivities: [
      '애견 파티나 모임',
      '프리스비나 공놀이',
      '애견 수영장이나 물놀이',
      '애견 카페 투어'
    ],
    color: 'from-orange-400 to-red-400'
  },
  ESTP: {
    type: 'ESTP',
    emoji: '⚡',
    name: '순간을 사는 모험심 가득한 전사',
    subtitle: '지금 이 순간의 짜릿함을 사랑하며 용감하게 뛰어드는 실천가',
    description: '대담하고 행동파인 우리 강아지는 순간의 자극을 사랑합니다. 위험을 두려워하지 않고, 빠른 반응으로 어떤 상황에도 대처하는 민첩한 강아지죠.',
    traits: [
      '대담하고 모험을 즐겨요',
      '빠른 반응 속도와 운동 신경',
      '실용적이고 현실적이에요',
      '즉흥적이고 유연해요'
    ],
    hiddenEmotions: [
      '자극이 없으면 무료함을 느껴요',
      '깊은 감정 표현이 서툴러요'
    ],
    recommendedActivities: [
      '익스트림 애견 스포츠',
      '어질리티나 플라이볼',
      '암벽 등반이나 트레킹',
      '스케이트보드나 서핑'
    ],
    color: 'from-red-500 to-orange-500'
  },
  ESFJ: {
    type: 'ESFJ',
    emoji: '🌿',
    name: '집안을 품는 다정한 도우미',
    subtitle: '가족을 돌보고, 함께 있는 것만으로 안정감을 주는 따스한 존재',
    description: '다정하고 헌신적인 우리 강아지는 가족을 위해 살아갑니다. 집안의 평화를 지키고, 모든 가족 구성원이 행복한지 확인하는 것을 가장 중요하게 여깁니다.',
    traits: [
      '가족에 대한 헌신이 강해요',
      '따뜻하고 배려심이 깊어요',
      '조화와 안정을 추구해요',
      '책임감이 강해요'
    ],
    hiddenEmotions: [
      '가족의 인정이 꼭 필요해요',
      '변화나 갈등에 스트레스를 받아요'
    ],
    recommendedActivities: [
      '가족과 함께하는 집안 활동',
      '정기적인 산책 루틴',
      '집 지키기 훈련',
      '가족 모임에 참여하기'
    ],
    color: 'from-green-400 to-teal-400'
  },
  ESTJ: {
    type: 'ESTJ',
    emoji: '🏰',
    name: '질서를 지키는 충직한 수호자',
    subtitle: '정해진 규칙과 질서를 소중히 지키며 언제나 곁을 든든히 지켜주는 파수꾼',
    description: '체계적이고 신뢰할 수 있는 우리 강아지는 완벽한 경비견입니다. 규칙을 중시하고, 정해진 루틴을 따르며, 집과 가족을 지키는 것을 자신의 의무로 여깁니다.',
    traits: [
      '규칙과 질서를 중시해요',
      '책임감이 강하고 신뢰할 수 있어요',
      '조직적이고 체계적이에요',
      '보호 본능이 강해요'
    ],
    hiddenEmotions: [
      '예측 불가능한 상황에 불안해해요',
      '통제력을 잃는 것을 두려워해요'
    ],
    recommendedActivities: [
      '규칙적인 훈련 루틴',
      '경비견 훈련',
      '복종 훈련과 질서 게임',
      '정해진 시간의 산책'
    ],
    color: 'from-blue-600 to-blue-800'
  },
  INFP: {
    type: 'INFP',
    emoji: '🌙',
    name: '조용히 마음을 어루만지는 위로자',
    subtitle: '주인의 마음을 읽고 곁에서 잔잔한 힘이 되어주는 따뜻한 친구',
    description: '감성적이고 이상주의적인 우리 강아지는 주인의 감정을 민감하게 읽어냅니다. 조용히 곁을 지키며 위로를 건네는, 마음을 치유하는 존재입니다.',
    traits: [
      '감수성이 풍부하고 공감 능력이 뛰어나요',
      '조용하고 차분해요',
      '주인의 감정에 민감해요',
      '충성심이 깊어요'
    ],
    hiddenEmotions: [
      '상처를 쉽게 받지만 표현하지 않아요',
      '완벽한 이상을 추구하며 현실에 실망해요'
    ],
    recommendedActivities: [
      '조용한 산책이나 명상',
      '부드러운 음악과 함께 휴식',
      '1:1 교감 시간',
      '자연 속 힐링 시간'
    ],
    color: 'from-purple-300 to-blue-300'
  },
  INTP: {
    type: 'INTP',
    emoji: '🔍',
    name: '세상을 탐구하는 호기심 학자',
    subtitle: '끝없이 세상을 분석하고 새로운 것을 배우며 자신만의 세계를 즐기는 탐구자',
    description: '분석적이고 호기심 많은 우리 강아지는 세상의 모든 것을 이해하고 싶어합니다. 독립적이고 사색적이며, 자신만의 방식으로 세상을 탐험합니다.',
    traits: [
      '호기심이 많고 탐구심이 강해요',
      '독립적이고 자율적이에요',
      '문제 해결 능력이 뛰어나요',
      '사색적이고 조용해요'
    ],
    hiddenEmotions: [
      '사회적 상호작용이 때로 피곤해요',
      '감정 표현이 서툴러요'
    ],
    recommendedActivities: [
      '복잡한 퍼즐 장난감',
      '노즈워크와 탐지 게임',
      '새로운 트릭 배우기',
      '혼자만의 탐험 시간'
    ],
    color: 'from-indigo-400 to-purple-400'
  },
  INFJ: {
    type: 'INFJ',
    emoji: '👁',
    name: '깊은 눈빛으로 공감하는 예언자',
    subtitle: '주인의 감정을 민감하게 감지하며 말없이 위로를 건네는 영혼',
    description: '신비롭고 통찰력 있는 우리 강아지는 주인의 마음을 누구보다 잘 이해합니다. 깊은 공감 능력으로 정서적 지지를 제공하는 특별한 존재입니다.',
    traits: [
      '직관력과 통찰력이 뛰어나요',
      '깊은 공감 능력을 가졌어요',
      '조용하지만 강한 내면을 가졌어요',
      '이상주의적이고 헌신적이에요'
    ],
    hiddenEmotions: [
      '완벽주의로 스트레스를 받아요',
      '세상의 고통에 영향을 많이 받아요'
    ],
    recommendedActivities: [
      '테라피견이나 감정 지원견 활동',
      '조용한 교감의 시간',
      '요가나 명상 함께하기',
      '깊은 유대감을 쌓는 훈련'
    ],
    color: 'from-teal-400 to-cyan-400'
  },
  INTJ: {
    type: 'INTJ',
    emoji: '🎯',
    name: '미래를 설계하는 전략가',
    subtitle: '조용히 모든 것을 계획하며 스스로의 길을 개척하는 냉철한 지성',
    description: '전략적이고 독립적인 우리 강아지는 뛰어난 지능과 계획성을 가지고 있습니다. 자신만의 방식으로 목표를 달성하며, 효율성을 중시합니다.',
    traits: [
      '독립적이고 자기 주도적이에요',
      '전략적 사고가 뛰어나요',
      '지능이 높고 빨리 배워요',
      '목표 지향적이에요'
    ],
    hiddenEmotions: [
      '감정 표현이 서툴지만 깊은 애정이 있어요',
      '완벽을 추구하며 자신에게 엄격해요'
    ],
    recommendedActivities: [
      '고난도 두뇌 게임',
      '목표 설정 훈련',
      '전략적 사냥 게임',
      '독립적인 문제 해결 활동'
    ],
    color: 'from-violet-500 to-purple-600'
  },
  ISFP: {
    type: 'ISFP',
    emoji: '🍂',
    name: '바람처럼 온화한 예술가',
    subtitle: '자연과 함께 있을 때 가장 행복하며 감각적인 순간을 즐기는 자유로운 영혼',
    description: '온화하고 예술적인 우리 강아지는 자연과 교감하는 것을 사랑합니다. 현재의 순간을 온전히 즐기며, 아름다운 것에 끌리는 감성적인 영혼입니다.',
    traits: [
      '온화하고 평화로워요',
      '감각적이고 미적 감각이 있어요',
      '자연을 사랑해요',
      '유연하고 적응력이 좋아요'
    ],
    hiddenEmotions: [
      '갈등이나 스트레스를 회피하려 해요',
      '자신의 욕구를 뒤로 미뤄요'
    ],
    recommendedActivities: [
      '자연 속 산책',
      '해변이나 숲 탐험',
      '조용한 환경에서의 휴식',
      '감각적인 놀이 (냄새, 촉감)'
    ],
    color: 'from-amber-400 to-orange-300'
  },
  ISTP: {
    type: 'ISTP',
    emoji: '🔧',
    name: '조용한 해결사',
    subtitle: '문제를 차분히 풀어내며, 주어진 상황을 실용적으로 다루는 능력자',
    description: '침착하고 실용적인 우리 강아지는 뛰어난 문제 해결 능력을 가지고 있습니다. 조용하지만 효율적으로 상황을 파악하고 대처하는 쿨한 강아지입니다.',
    traits: [
      '침착하고 냉정해요',
      '실용적이고 효율적이에요',
      '문제 해결 능력이 뛰어나요',
      '독립적이고 자유로워요'
    ],
    hiddenEmotions: [
      '감정 표현을 어려워해요',
      '혼자만의 시간이 꼭 필요해요'
    ],
    recommendedActivities: [
      '기술적인 장난감',
      '탈출 게임이나 퍼즐',
      '도구를 사용하는 훈련',
      '독립적인 놀이 시간'
    ],
    color: 'from-gray-500 to-slate-600'
  },
  ISFJ: {
    type: 'ISFJ',
    emoji: '🕊',
    name: '헌신으로 가족을 지키는 수호자',
    subtitle: '늘 곁에서 묵묵히 가족을 돌보며 사랑을 실천하는 착한 심성',
    description: '헌신적이고 책임감 강한 우리 강아지는 가족을 위해 모든 것을 합니다. 조용하지만 확고한 사랑으로 가족을 보살피는 진정한 수호자입니다.',
    traits: [
      '헌신적이고 충성스러워요',
      '세심하고 배려심이 깊어요',
      '책임감이 강해요',
      '전통과 루틴을 중시해요'
    ],
    hiddenEmotions: [
      '자신의 필요를 뒤로 미뤄요',
      '인정받고 싶지만 요구하지 않아요'
    ],
    recommendedActivities: [
      '가족과 함께하는 일상',
      '규칙적인 루틴 활동',
      '돌봄 역할 맡기기',
      '조용한 교감의 시간'
    ],
    color: 'from-sky-400 to-blue-400'
  },
  ISTJ: {
    type: 'ISTJ',
    emoji: '⏰',
    name: '시간을 지키는 성실한 루틴 메이커',
    subtitle: '매일 같은 일상 속에서 안정감을 찾고, 예측 가능한 삶을 사랑하는 존재',
    description: '신뢰할 수 있고 체계적인 우리 강아지는 일관성과 질서를 사랑합니다. 정해진 루틴을 철저히 지키며, 안정적인 환경에서 가장 행복해합니다.',
    traits: [
      '성실하고 신뢰할 수 있어요',
      '루틴과 질서를 좋아해요',
      '책임감이 강해요',
      '인내심이 많아요'
    ],
    hiddenEmotions: [
      '변화에 대한 두려움이 있어요',
      '감정 표현이 서툴러요'
    ],
    recommendedActivities: [
      '정해진 시간의 일과',
      '반복적인 훈련',
      '일정한 산책 루틴',
      '예측 가능한 활동'
    ],
    color: 'from-slate-500 to-gray-600'
  }
};

export function calculateMBTI(answers: Record<string, string>): string {
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  questions.forEach(question => {
    const selectedChoiceId = answers[question.id];
    if (selectedChoiceId !== undefined) {
      const selectedChoice = question.choices.find(c => c.id === selectedChoiceId);
      if (selectedChoice) {
        Object.entries(selectedChoice.weights).forEach(([dimension, weight]) => {
          scores[dimension as keyof typeof scores] += weight;
        });
      }
    }
  });

  const mbti = 
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  return mbti;
}
