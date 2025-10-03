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
    emoji: '🎾',
    name: '하루 종일 꼬리를 흔들고 뛰어다니는 에너자이저!',
    subtitle: '세상 모든 것에 호기심을 가지고, 늘 밝은 에너지로 주변을 행복하게 만드는 강아지',
    description: 'ENFP(재기발랄한 활동가) 유형의 강아지는 매우 낙천적이고 사교적입니다. 이들은 새로운 만남과 경험을 좋아하며, 모든 순간을 놀이처럼 즐깁니다.',
    traits: [
      '넘치는 호기심으로 새로운 환경과 냄새를 탐험해요',
      '사람과 강아지에게 겁 없이 다가가 친구를 만들어요',
      '꼬리를 격하게 흔들며 감정을 온몸으로 표현해요',
      '즉흥적이고 탐험적인 행동을 보여줘요'
    ],
    hiddenEmotions: [
      '지루한 반복 훈련은 싫어해요',
      '좁은 공간에만 있으면 스트레스를 받아요'
    ],
    recommendedActivities: [
      '다양하고 재미있는 놀이식 훈련',
      '넓은 공원이나 야외 활동',
      '새로운 산책 코스와 장난감 바꿔주기',
      '사모예드, 스패니얼 계열과 유사한 활동'
    ],
    color: 'from-yellow-400 to-orange-400'
  },
  ENTP: {
    type: 'ENTP',
    emoji: '💡',
    name: '논리적인 해결사',
    subtitle: '세상 모든 것에 호기심을 갖고, 끊임없이 새로운 해결책을 찾아내는 발명가 타입',
    description: 'ENTP(논리적인 발명가) 유형의 강아지는 매우 창의적이고 논리적입니다. 이들은 새로운 것을 탐구하고, 문제를 기발한 방식으로 해결하는 것을 즐깁니다.',
    traits: [
      '퍼즐이나 숨바꼭질 같은 지적 놀이를 즐겨요',
      '예측 불가능한 상황에서도 유연하게 대처해요',
      '즉흥적으로 행동하며 호기심에 이끌려 움직여요',
      '명령의 의도를 파악하고 새로운 방법을 시도해요'
    ],
    hiddenEmotions: [
      '지루한 반복 훈련을 매우 싫어해요',
      '주인의 관심과 애정을 원해요'
    ],
    recommendedActivities: [
      '다양하고 재미있는 놀이식 훈련',
      '넓은 공간에서 자유롭게 뛰어놀기',
      '새로운 트릭과 지적 자극',
      '잭 러셀 테리어, 파피용, 벨지안 말리노이즈와 유사한 활동'
    ],
    color: 'from-purple-400 to-pink-400'
  },
  ENFJ: {
    type: 'ENFJ',
    emoji: '☀️',
    name: '무리를 이끄는 햇살 강아지',
    subtitle: '매우 사려 깊고 헌신적이며, 주변의 감정을 잘 파악하고 무리를 이끄는 리더',
    description: '이 햇살 강아지는 매우 사려 깊고 헌신적입니다. 이들은 주변의 감정을 잘 파악하고, 무리를 이끄는 리더 역할을 즐깁니다. 다른 강아지들이나 사람들이 편안함을 느끼도록 노력하는 타고난 강아지예요.',
    traits: [
      '새로운 사람이나 강아지에게 먼저 다가가 인사해요',
      '싸움을 중재하거나 새끼 강아지를 돌봐요',
      '주인의 감정 변화에 민감하게 반응해요',
      '꼬리를 격하게 흔들며 온몸으로 감정을 표현해요'
    ],
    hiddenEmotions: [
      '관심의 중심에서 벗어나면 외로워요',
      '모두를 행복하게 하려다 자신을 희생해요'
    ],
    recommendedActivities: [
      '칭찬과 격려 위주의 긍정적 훈련',
      '애견 카페나 공원에서 친구들 만나기',
      '충분한 스킨십과 함께하는 시간',
      '콜리, 셰틀랜드 쉽독, 래브라도, 보더콜리와 유사한 활동'
    ],
    color: 'from-pink-400 to-rose-400'
  },
  ENTJ: {
    type: 'ENTJ',
    emoji: '🦮',
    name: '견(犬) 사령관',
    subtitle: '매우 카리스마 있고 단호하며, 타고난 지능과 리더십으로 상황을 주도',
    description: 'ENTJ(대담한 통솔자) 유형의 강아지는 매우 카리스마 있고 단호합니다. 이들은 타고난 지능과 리더십으로 상황을 주도하며, 복잡한 문제 해결을 즐깁니다. 겉으로는 강인하고 늠름해 보이지만, 가족에 대한 충성심과 애정이 매우 깊습니다.',
    traits: [
      '감정보다 논리적 판단을 우선시해요',
      '다른 강아지들 사이에서 리더 역할을 맡아요',
      '낯선 사람에게도 쉽게 굴복하지 않는 용맹함을 보여요',
      '밥이나 산책 요구를 직설적으로 전달해요'
    ],
    hiddenEmotions: [
      '완벽하지 못한 자신에게 엄격해요',
      '통제력을 잃는 것을 두려워해요'
    ],
    recommendedActivities: [
      '명확하고 일관된 규칙의 훈련',
      '복잡한 명령이나 새로운 트릭 가르치기',
      '충분한 산책과 머리 쓰는 놀이',
      '도베르만, 로트와일러, 카네 코르소와 유사한 활동'
    ],
    color: 'from-blue-500 to-indigo-500'
  },
  ESFP: {
    type: 'ESFP',
    emoji: '🎈',
    name: '모두에게 안기고 싶은 행복 댕댕이',
    subtitle: '세상의 모든 순간을 축제처럼 즐기는 타고난 행복 전도사',
    description: 'ESFP(자유로운 예술가) 유형의 강아지는 매우 활발하고 사교적이며, 주변 사람들에게 즐거움을 주는 것을 좋아합니다. 이들은 현재 이 순간을 즐기며, 솔직한 감정 표현으로 모두에게 사랑받습니다.',
    traits: [
      '타고난 재주꾼으로 재롱을 부려요',
      '관심의 중심에 있을 때 가장 행복해요',
      '즉흥적으로 행동하며 새로운 냄새에 이끌려요',
      '꼬리, 점프, 짖음으로 솔직하게 감정을 표현해요'
    ],
    hiddenEmotions: [
      '관심의 중심이 되지 못하면 외로워해요',
      '좁은 공간에만 있으면 스트레스를 받아요'
    ],
    recommendedActivities: [
      '재미있는 놀이식 훈련',
      '충분한 산책과 넓은 공원 활동',
      '애견 카페나 공원에서 친구들 만나기',
      '골든 리트리버, 비글, 웰시코기와 유사한 활동'
    ],
    color: 'from-orange-400 to-red-400'
  },
  ESTP: {
    type: 'ESTP',
    emoji: '🚀',
    name: '대담한 모험가',
    subtitle: '늘 새로운 곳을 탐험하며 온몸으로 즐거움을 표현하는 타고난 모험가',
    description: 'ESTP(모험을 즐기는 사업가) 유형의 강아지는 매우 활발하고 대담합니다. 이들은 새로운 경험을 두려워하지 않고, 생각하기 전에 행동하며 직접 부딪히는 것을 즐깁니다. 감정 표현도 매우 솔직하고 직설적이어서 자신의 의사를 명확하게 전달합니다.',
    traits: [
      '생각보다 행동이 앞서는 성격이에요',
      '새로운 상황에서도 당황하지 않고 즐겨요',
      '큰 소리나 낯선 환경에도 겁내지 않아요',
      '놀고 싶을 땐 장난감을 물어오고 밥그릇을 툭 쳐요'
    ],
    hiddenEmotions: [
      '지루한 반복 훈련을 싫어해요',
      '위험에 대한 인식이 낮을 수 있어요'
    ],
    recommendedActivities: [
      '흥미로운 놀이식 훈련',
      '매일 충분한 산책과 운동',
      '안전한 환경에서 자유롭게 뛰어놀기',
      '비글, 복서, 보스턴 테리어와 유사한 활동'
    ],
    color: 'from-red-500 to-orange-500'
  },
  ESTJ: {
    type: 'ESTJ',
    emoji: '🏆',
    name: '골목대장 댕댕이',
    subtitle: '매우 체계적이고 책임감이 강하며, 가족 내에서 자신의 역할을 명확히 인지',
    description: 'ESTJ(엄격한 관리자) 유형의 강아지는 매우 체계적이고 책임감이 강합니다. 이들은 가족 내에서 자신의 역할을 명확히 인지하고, 그 역할을 충실히 수행하려는 성향이 있습니다. 겉으로는 무뚝뚝해 보일 수 있지만, 가족을 보호하는 것에 대한 강한 사명감을 가지고 있습니다.',
    traits: [
      '명확한 규칙과 질서를 좋아해요',
      '다른 강아지들 사이에서 리더 역할을 맡아요',
      '단호하고 자신감 있는 태도를 보여요',
      '밥이나 산책 요구를 직설적으로 전달해요'
    ],
    hiddenEmotions: [
      '일관된 루틴이 깨지는 것을 싫어해요',
      '완벽하지 못한 자신에게 엄격해요'
    ],
    recommendedActivities: [
      '명확하고 일관된 규칙의 훈련',
      '복잡한 명령이나 새로운 트릭',
      '단호하고 부드러운 리더십',
      '저먼 셰퍼드, 로트와일러, 복서와 유사한 활동'
    ],
    color: 'from-amber-600 to-orange-600'
  },
  ESFJ: {
    type: 'ESFJ',
    emoji: '💝',
    name: '모두의 친구',
    subtitle: '매우 사교적이고 헌신적이며, 사람과 다른 강아지들과의 관계를 중요하게 생각',
    description: 'ESFJ(사교적인 봉사자) 유형의 강아지는 매우 사교적이고 헌신적입니다. 이들은 사람과 다른 강아지들과의 관계를 중요하게 생각하며, 주변을 돌보고 모두에게 사랑받는 것을 즐깁니다. 항상 밝은 에너지로 주변을 행복하게 만드는 사랑스러운 친구예요.',
    traits: [
      '새로운 사람이나 강아지에게 먼저 다가가 인사해요',
      '다른 강아지들 사이에서 분위기 메이커 역할을 해요',
      '주인의 기분을 파악하고 기쁘게 하려 노력해요',
      '꼬리를 격하게 흔들며 온몸으로 감정을 표현해요'
    ],
    hiddenEmotions: [
      '관심의 중심이 되지 못하면 외로워해요',
      '주인의 인정을 갈구해요'
    ],
    recommendedActivities: [
      '칭찬과 격려 위주의 긍정적 훈련',
      '애견 카페나 공원에서 친구들 만나기',
      '충분한 스킨십과 함께하는 시간',
      '골든 리트리버, 래브라도 리트리버, 웰시코기와 유사한 활동'
    ],
    color: 'from-pink-500 to-rose-500'
  },
  INFP: {
    type: 'INFP',
    emoji: '🌸',
    name: '순수한 넘치는 동화속 강아지',
    subtitle: '매우 온화하고 깊은 감수성을 가졌으며, 조용하고 내성적이지만 애정이 가득',
    description: 'INFP(열정적인 중재자) 유형의 강아지는 매우 온화하고 깊은 감수성을 가졌습니다. 이들은 조용하고 내성적이지만, 마음속으로는 사랑하는 가족을 향한 무한한 애정이 가득해요. 주변의 감정 변화에 민감하며, 평화롭고 따뜻한 분위기를 중요하게 생각합니다.',
    traits: [
      '주인의 감정 변화에 매우 민감해요',
      '주인이 슬프면 조용히 다가와 기대요',
      '낯선 환경에는 조심스럽지만 가족에게는 헌신적이에요',
      '꼬리를 살짝 흔들거나 손길을 가만히 즐겨요'
    ],
    hiddenEmotions: [
      '심리적으로 불안정할 때 스트레스를 크게 느껴요',
      '감정을 크게 드러내지 못해요'
    ],
    recommendedActivities: [
      '차분하고 부드러운 소통',
      '일관된 루틴과 평화로운 환경',
      '주인과 단둘이 조용히 교감하는 시간',
      '말티즈, 코튼 드 튈레아르, 시추와 유사한 활동'
    ],
    color: 'from-purple-300 to-pink-300'
  },
  INFJ: {
    type: 'INFJ',
    emoji: '🌙',
    name: '영혼의 동반자 강아지',
    subtitle: '매우 깊은 감수성과 뛰어난 통찰력을 가지고 있으며, 조용하고 신비로운 분위기',
    description: 'INFJ(선의의 옹호자) 유형의 강아지는 매우 깊은 감수성과 뛰어난 통찰력을 가지고 있습니다. 이들은 겉으로는 조용하고 신비로운 분위기를 풍기지만, 주변의 감정이나 상황을 정확히 읽어내고 그에 맞춰 행동하는 뛰어난 공감 능력을 보여줍니다.',
    traits: [
      '주인의 미묘한 감정 변화까지 감지해요',
      '스트레스받을 때 조용히 다가와 위로해요',
      '낯선 환경에는 조심스럽지만 익숙한 곳에서는 편안해해요',
      '주인의 눈을 응시하거나 머리를 무릎에 기대요'
    ],
    hiddenEmotions: [
      '심리적으로 불안정할 때 스트레스를 크게 느껴요',
      '내면의 감정 세계가 복잡해요'
    ],
    recommendedActivities: [
      '차분하고 부드러운 목소리로 소통',
      '일관된 루틴과 안정적인 환경',
      '주인과 단둘이 조용히 교감하는 시간',
      '아이리시 세터, 스탠다드 푸들, 셔틀랜드 쉽독과 유사한 활동'
    ],
    color: 'from-indigo-400 to-purple-400'
  },
  INTP: {
    type: 'INTP',
    emoji: '🔍',
    name: '호기심 많은 장난감 연구가',
    subtitle: '매우 지적이고 독립적이며, 겉으로는 조용하지만 끊임없이 주변을 분석',
    description: 'INTP(논리적인 사색가) 유형의 강아지는 매우 지적이고 독립적입니다. 이들은 겉으로 보기에는 조용하고 무관심해 보일 수 있지만, 속으로는 끊임없이 주변 환경을 분석하고 생각하는 것을 즐깁니다. 다른 강아지들의 감정적인 행동보다는 논리적이고 합리적인 판단을 선호합니다.',
    traits: [
      '문제 해결을 즐기고 논리적으로 접근해요',
      '혼자만의 시간과 공간을 중요하게 생각해요',
      '주인에 대한 깊은 신뢰를 바탕으로 독립적이에요',
      '발치에 조용히 다가와 기대거나 눈을 맞춰요'
    ],
    hiddenEmotions: [
      '관심받고 싶지만 표현을 잘 못해요',
      '감정 표현이 서툴러요'
    ],
    recommendedActivities: [
      '퍼즐 장난감이나 노즈워크 게임',
      '혼자 쉬는 공간 존중',
      '명확하고 일관된 피드백',
      '바셋 하운드, 보스턴 테리어, 닥스훈트와 유사한 활동'
    ],
    color: 'from-teal-500 to-cyan-500'
  },
  INTJ: {
    type: 'INTJ',
    emoji: '🎯',
    name: '전략가 멍멍이',
    subtitle: '독립적이고 분석적이며, 장기적인 계획과 목표를 중요시하는 전략적 사고가',
    description: '전략적이고 독립적인 우리 강아지는 신중한 계획가입니다. 즉흥적인 행동보다는 생각 후 행동하며, 효율성과 논리를 중시합니다.',
    traits: [
      '독립적이고 자기주도적이에요',
      '분석적으로 문제를 해결해요',
      '효율적인 방법을 선호해요',
      '신뢰하는 사람에게만 마음을 열어요'
    ],
    hiddenEmotions: [
      '완벽주의 성향이 강해요',
      '감정 표현이 서툴러요'
    ],
    recommendedActivities: [
      '지능 게임과 퍼즐',
      '목표 지향적 훈련',
      '조용한 환경에서의 휴식',
      '체계적인 일과'
    ],
    color: 'from-violet-600 to-purple-600'
  },
  ISFP: {
    type: 'ISFP',
    emoji: '🌺',
    name: '온화한 꽃 강아지',
    subtitle: '매우 온화하고 감수성이 풍부하며, 조용하고 내성적이지만 따뜻한 애정을 가짐',
    description: 'ISFP(호기심 많은 예술가) 유형의 강아지는 매우 온화하고 감수성이 풍부합니다. 이들은 조용하고 내성적이지만, 주변의 아름다움을 느끼며 매 순간을 즐기는 것을 좋아합니다. 겉으로 드러내는 표현은 적을 수 있지만, 내면에는 따뜻하고 깊은 애정이 가득한 친구예요.',
    traits: [
      '낯선 사람이나 장소에서는 조용히 관찰해요',
      '즉흥적으로 행동하며 새로운 냄새를 탐험해요',
      '매 순간의 감각을 즐기며 살아가요',
      '꼬리를 살짝 흔들거나 손길을 가만히 즐겨요'
    ],
    hiddenEmotions: [
      '심리적으로 불안정할 때 스트레스를 크게 느껴요',
      '감정을 크게 드러내지 못해요'
    ],
    recommendedActivities: [
      '차분하고 부드러운 소통',
      '일관된 루틴과 안정적인 환경',
      '주인과 단둘이 조용히 교감하는 시간',
      '바셋 하운드, 비숑 프리제, 시츄와 유사한 활동'
    ],
    color: 'from-rose-400 to-pink-400'
  },
  ISTP: {
    type: 'ISTP',
    emoji: '🛠',
    name: '쿨한 멍멍이',
    subtitle: '매우 독립적이고 논리적이며, 겉으로는 조용하지만 문제 해결을 즐김',
    description: 'ISTP(만능 재주꾼) 유형의 강아지는 매우 독립적이고 논리적입니다. 이들은 겉으로는 조용하고 내성적일 수 있지만, 주변의 모든 것을 관찰하며 문제를 해결하는 것을 즐깁니다. 새로운 상황에 직면했을 때도 당황하지 않고, 스스로 방법을 찾아내는 능력이 뛰어난 모험가예요.',
    traits: [
      '혼자만의 시간을 즐기며 스스로 놀이를 찾아요',
      '새로운 장난감을 조용히 관찰하며 파악해요',
      '감정보다 실용적 접근을 선호해요',
      '밥그릇을 툭 치거나 문 근처에 앉아 의사를 전달해요'
    ],
    hiddenEmotions: [
      '변화에 대한 불안감이 있어요',
      '감정 표현이 서툴러요'
    ],
    recommendedActivities: [
      '퍼즐 장난감이나 노즈워크 게임',
      '혼자 쉬는 공간 존중',
      '명확하고 일관된 피드백',
      '슈나우저, 맨체스터 테리어, 진돗개와 유사한 활동'
    ],
    color: 'from-gray-500 to-slate-500'
  },
  ISFJ: {
    type: 'ISFJ',
    emoji: '🛡️',
    name: '포근한 수호견',
    subtitle: '매우 배려심이 깊고 헌신적이며, 조용하지만 사랑하는 가족에게 안정감을 줌',
    description: 'ISFJ(용감한 수호자) 유형의 강아지는 매우 배려심이 깊고 헌신적입니다. 이들은 겉으로는 조용하고 내성적일 수 있지만, 사랑하는 가족들에게 안정감과 평화를 주기 위해 노력하는 따뜻한 마음을 가졌습니다. 주인의 감정 변화에 매우 민감하며, 묵묵히 곁을 지켜주는 든든한 존재입니다.',
    traits: [
      '주인의 감정을 빠르게 감지해요',
      '주인의 기분을 살피고 맞춰주며 애정을 표현해요',
      '익숙한 환경과 규칙적인 일상에서 편안함을 느껴요',
      '조용히 옆에 앉아 함께하는 것을 좋아해요'
    ],
    hiddenEmotions: [
      '급작스러운 변화에 스트레스를 받아요',
      '인정받고 싶은 욕구가 강해요'
    ],
    recommendedActivities: [
      '칭찬과 격려 위주의 부드러운 소통',
      '일관된 루틴과 평화로운 환경',
      '주인과 함께하는 조용한 시간',
      '그레이트 피레니즈, 콜리, 세인트 버나드와 유사한 활동'
    ],
    color: 'from-emerald-400 to-teal-400'
  },
  ISTJ: {
    type: 'ISTJ',
    emoji: '⏰',
    name: '루틴을 사랑하는 규칙쟁이 멍멍이',
    subtitle: '매우 규칙적이고 책임감이 강하며, 정해진 루틴을 철저히 지킴',
    description: 'ISTJ(청렴결백한 수호자) 유형의 강아지는 매우 규칙적이고 책임감이 강합니다. 이들은 정해진 루틴을 철저히 지키며, 예측 가능한 환경에서 안정감을 느낍니다. 겉으로 보기에는 조용하고 무뚝뚝해 보일 수 있지만, 가족에 대한 충성심과 책임감이 매우 높습니다.',
    traits: [
      '일상적인 루틴을 철저히 지켜요',
      '정해진 시간이 되면 먼저 주인에게 알려요',
      '주인을 향한 충성심과 책임감이 깊어요',
      '옆에 조용히 앉아 있거나 머리를 기대요'
    ],
    hiddenEmotions: [
      '변화에 대한 두려움이 있어요',
      '감정 표현이 서툴러요'
    ],
    recommendedActivities: [
      '명확하고 일관된 규칙의 훈련',
      '개인 공간 존중',
      '정해진 일과와 예측 가능한 환경',
      '그레이하운드, 아키타, 웰시코기와 유사한 활동'
    ],
    color: 'from-slate-500 to-gray-600'
  }
};

export function calculateMBTI(answers: Record<string, string>): string {
  // 축별 독립 점수 계산 (교차 축 누수 방지)
  const axisScores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // 각 축의 최대 가능 점수 계산 (정규화용)
  const maxScores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // 각 질문에서 선택 가능한 최대 가중치 누적
  questions.forEach(question => {
    let maxE = 0, maxI = 0, maxS = 0, maxN = 0;
    let maxT = 0, maxF = 0, maxJ = 0, maxP = 0;

    question.choices.forEach(choice => {
      maxE = Math.max(maxE, choice.weights.E || 0);
      maxI = Math.max(maxI, choice.weights.I || 0);
      maxS = Math.max(maxS, choice.weights.S || 0);
      maxN = Math.max(maxN, choice.weights.N || 0);
      maxT = Math.max(maxT, choice.weights.T || 0);
      maxF = Math.max(maxF, choice.weights.F || 0);
      maxJ = Math.max(maxJ, choice.weights.J || 0);
      maxP = Math.max(maxP, choice.weights.P || 0);
    });

    // 각 질문의 최댓값을 누적
    maxScores.E += maxE;
    maxScores.I += maxI;
    maxScores.S += maxS;
    maxScores.N += maxN;
    maxScores.T += maxT;
    maxScores.F += maxF;
    maxScores.J += maxJ;
    maxScores.P += maxP;
  });

  // 사용자 답변에 따른 점수 계산 (축별 독립)
  questions.forEach(question => {
    const selectedChoiceId = answers[question.id];
    if (selectedChoiceId !== undefined) {
      const selectedChoice = question.choices.find(c => c.id === selectedChoiceId);
      if (selectedChoice) {
        // 각 축별로 해당 차원의 가중치만 사용
        axisScores.E += selectedChoice.weights.E || 0;
        axisScores.I += selectedChoice.weights.I || 0;
        axisScores.S += selectedChoice.weights.S || 0;
        axisScores.N += selectedChoice.weights.N || 0;
        axisScores.T += selectedChoice.weights.T || 0;
        axisScores.F += selectedChoice.weights.F || 0;
        axisScores.J += selectedChoice.weights.J || 0;
        axisScores.P += selectedChoice.weights.P || 0;
      }
    }
  });

  // 축별 정규화된 점수 계산 (0-1 범위)
  const normalizedE = maxScores.E > 0 ? axisScores.E / maxScores.E : 0;
  const normalizedI = maxScores.I > 0 ? axisScores.I / maxScores.I : 0;
  const normalizedS = maxScores.S > 0 ? axisScores.S / maxScores.S : 0;
  const normalizedN = maxScores.N > 0 ? axisScores.N / maxScores.N : 0;
  const normalizedT = maxScores.T > 0 ? axisScores.T / maxScores.T : 0;
  const normalizedF = maxScores.F > 0 ? axisScores.F / maxScores.F : 0;
  const normalizedJ = maxScores.J > 0 ? axisScores.J / maxScores.J : 0;
  const normalizedP = maxScores.P > 0 ? axisScores.P / maxScores.P : 0;

  // 각 축에서 높은 쪽 선택
  const mbti = 
    (normalizedE >= normalizedI ? 'E' : 'I') +
    (normalizedS >= normalizedN ? 'S' : 'N') +
    (normalizedT >= normalizedF ? 'T' : 'F') +
    (normalizedJ >= normalizedP ? 'J' : 'P');

  return mbti;
}
