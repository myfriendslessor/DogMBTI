export type QuestionDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Choice {
  id: string;
  label: string;
  weights: Partial<Record<QuestionDimension, number>>;
}

export interface Question {
  id: string;
  text: string;
  choices: Choice[];
}

export const questions: Question[] = [
  {
    id: "q1",
    text: "강아지가 혼자 있을 때 주로 어떤가요?",
    choices: [
      { id: "a", label: "조용히 쉬거나 잠을 잔다", weights: { I: 2 } },
      { id: "b", label: "집안을 돌아다니며 탐색한다", weights: { E: 2 } },
      { id: "c", label: "낑낑거리거나 출입문 근처를 서성인다", weights: { E: 1, F: 1 } }
    ]
  },
  {
    id: "q2",
    text: "새로운 강아지나 사람을 만나면 어떻게 반응하나요?",
    choices: [
      { id: "a", label: "금세 다가가서 인사한다", weights: { E: 2, F: 1 } },
      { id: "b", label: "먼저 관찰하고 천천히 접근한다", weights: { I: 1, N: 1 } },
      { id: "c", label: "주인 뒤로 숨거나 거리를 둔다", weights: { I: 2, J: 1 } }
    ]
  },
  {
    id: "q3",
    text: "집에 손님이 오면 어떤가요?",
    choices: [
      { id: "a", label: "활발하게 반가움을 표현한다", weights: { E: 2 } },
      { id: "b", label: "잠시 긴장하지만 곧 적응한다", weights: { N: 1, P: 1 } },
      { id: "c", label: "자기 자리로 돌아가 조용히 지낸다", weights: { I: 2, J: 1 } }
    ]
  },
  {
    id: "q4",
    text: "낯선 공간(병원/카페)에 들어가면?",
    choices: [
      { id: "a", label: "빠르게 둘러보고 탐색한다", weights: { E: 1, N: 1 } },
      { id: "b", label: "주변을 관찰하며 천천히 움직인다", weights: { I: 1, T: 1 } },
      { id: "c", label: "긴장하며 주인 곁에서 떨어지지 않는다", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q5",
    text: "주인이 집에 돌아오면 가장 먼저 보이는 반응은?",
    choices: [
      { id: "a", label: "점프/꼬리 흔들기 등 강한 환영", weights: { E: 1, F: 1 } },
      { id: "b", label: "차분히 다가와 냄새를 맡는다", weights: { I: 1, T: 1 } },
      { id: "c", label: "한동안 떨어지지 않으려 한다", weights: { F: 1, P: 1 } }
    ]
  },
  {
    id: "q6",
    text: "산책 스타일은 어떤가요?",
    choices: [
      { id: "a", label: "앞장서서 새로운 길/냄새를 찾는다", weights: { E: 1, N: 1 } },
      { id: "b", label: "주인의 옆에서 일정하게 보조를 맞춘다", weights: { S: 1, J: 1 } },
      { id: "c", label: "그날 기분에 따라 유연하게 바뀐다", weights: { N: 1, P: 1 } }
    ]
  },
  {
    id: "q7",
    text: "산책 루트가 바뀌면?",
    choices: [
      { id: "a", label: "흥미로워하며 즐긴다", weights: { N: 1, P: 1 } },
      { id: "b", label: "천천히 적응한다", weights: { S: 1, J: 1 } },
      { id: "c", label: "스트레스를 받는 편이다", weights: { S: 1, J: 1, F: 1 } }
    ]
  },
  {
    id: "q8",
    text: "공이나 장난감을 줬을 때 반응은?",
    choices: [
      { id: "a", label: "바로 물어오거나 가지고 논다", weights: { E: 1, P: 1 } },
      { id: "b", label: "잠시 냄새를 맡고 살펴본 뒤 논다", weights: { N: 1, T: 1 } },
      { id: "c", label: "크게 관심이 없다", weights: { I: 1, T: 1 } }
    ]
  },
  {
    id: "q9",
    text: "새 장난감을 줬을 때 첫 반응은?",
    choices: [
      { id: "a", label: "즉시 물어뜯고 탐색한다", weights: { E: 1, P: 2 } },
      { id: "b", label: "조심스레 관찰 후 천천히 사용한다", weights: { N: 1, P: 1 } },
      { id: "c", label: "거의 사용하지 않는다", weights: { I: 1, J: 1 } }
    ]
  },
  {
    id: "q10",
    text: "놀아줄 때 가장 선호하는 방식은?",
    choices: [
      { id: "a", label: "터그/페치 같은 에너지 높은 놀이", weights: { E: 1, P: 1 } },
      { id: "b", label: "후각/퍼즐처럼 생각하는 놀이", weights: { N: 1, T: 1 } },
      { id: "c", label: "스킨십/조용한 교감", weights: { I: 1, F: 1 } }
    ]
  },
  {
    id: "q11",
    text: "큰 소리(초인종, 폭죽)에 대한 반응은?",
    choices: [
      { id: "a", label: "소리 쪽으로 다가가 확인한다", weights: { E: 1, N: 1 } },
      { id: "b", label: "잠깐 멈추고 상황을 살핀다", weights: { I: 1, T: 1 } },
      { id: "c", label: "짖거나 숨는다", weights: { F: 1, J: 1 } }
    ]
  },
  {
    id: "q12",
    text: "낯선 강아지가 크게 짖을 때?",
    choices: [
      { id: "a", label: "주도적으로 대응하거나 다가간다", weights: { E: 1, T: 1 } },
      { id: "b", label: "주인의 신호를 보고 움직인다", weights: { J: 1, T: 1 } },
      { id: "c", label: "거리 두고 회피한다", weights: { I: 1, F: 1 } }
    ]
  },
  {
    id: "q13",
    text: "주인이 집을 나갈 때의 반응은?",
    choices: [
      { id: "a", label: "잠시 쳐다보다 자기 할 일을 한다", weights: { I: 1, T: 1 } },
      { id: "b", label: "문 근처에서 기다린다", weights: { F: 1, J: 1 } },
      { id: "c", label: "낑낑거리거나 소파/문을 긁는다", weights: { E: 1, F: 1 } }
    ]
  },
  {
    id: "q14",
    text: "혼자 있는 시간이 길어지면?",
    choices: [
      { id: "a", label: "장난감/노즈워크로 시간을 보낸다", weights: { N: 1, P: 1 } },
      { id: "b", label: "자거나 정해진 자리에서 쉰다", weights: { S: 1, J: 1 } },
      { id: "c", label: "스트레스/파괴 행동이 나타난다", weights: { E: 1, F: 1 } }
    ]
  },
  {
    id: "q15",
    text: "낯선 환경에서 쉬는 시간은 어떻게 보내나요?",
    choices: [
      { id: "a", label: "편하게 엎드려 주변을 구경한다", weights: { N: 1, P: 1 } },
      { id: "b", label: "자기 매트/케이지에서 휴식한다", weights: { S: 1, J: 1 } },
      { id: "c", label: "주인 가까이에 바짝 붙어 쉰다", weights: { F: 1, J: 1 } }
    ]
  },
  {
    id: "q16",
    text: "주인이 이름을 부를 때 반응 속도는?",
    choices: [
      { id: "a", label: "즉시 달려온다", weights: { E: 1, F: 1 } },
      { id: "b", label: "한 번 더 부르면 온다", weights: { I: 1, J: 1 } },
      { id: "c", label: "보상이 있을 때 더 잘 온다", weights: { T: 1, P: 1 } }
    ]
  },
  {
    id: "q17",
    text: "주인이 기분이 좋지 않을 때 강아지는?",
    choices: [
      { id: "a", label: "조용히 곁에 와서 기대어 있는다", weights: { I: 1, F: 1 } },
      { id: "b", label: "산책/놀이로 기분 전환을 유도한다", weights: { E: 1, N: 1 } },
      { id: "c", label: "눈치를 보며 거리를 둔다", weights: { T: 1, J: 1 } }
    ]
  },
  {
    id: "q18",
    text: "주인이 바쁠 때 강아지의 행동은?",
    choices: [
      { id: "a", label: "자연스럽게 혼자 놀거나 쉰다", weights: { I: 1, T: 1 } },
      { id: "b", label: "주인의 주의를 끌려고 한다", weights: { E: 1, F: 1 } },
      { id: "c", label: "지시에 따라 매트/하우스에 머문다", weights: { J: 1, S: 1 } }
    ]
  },
  {
    id: "q19",
    text: "주인이 자리에 앉아 있을 때 강아지는 주로 어디에 있나요?",
    choices: [
      { id: "a", label: "바짝 붙어 몸을 기대고 있다", weights: { F: 1, I: 1 } },
      { id: "b", label: "근처에서 자유롭게 왔다 갔다 한다", weights: { E: 1, P: 1 } },
      { id: "c", label: "자기 자리/매트에서 쉰다", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q20",
    text: "스킨십을 선호하나요?",
    choices: [
      { id: "a", label: "쓰다듬기/포옹을 적극적으로 원한다", weights: { F: 2 } },
      { id: "b", label: "상황에 따라 기분 좋을 때만", weights: { N: 1, P: 1 } },
      { id: "c", label: "짧은 터치만 허용한다", weights: { T: 1, I: 1 } }
    ]
  },
  {
    id: "q21",
    text: "기본 지시어(앉아/기다려)에 대한 반응은?",
    choices: [
      { id: "a", label: "명확한 지시에 잘 따른다", weights: { S: 1, J: 2 } },
      { id: "b", label: "보상이 있으면 더 잘 따른다", weights: { F: 1, P: 1 } },
      { id: "c", label: "지시보다 놀이를 더 선호한다", weights: { E: 1, P: 1 } }
    ]
  },
  {
    id: "q22",
    text: "보상이 없을 때 훈련 태도는?",
    choices: [
      { id: "a", label: "지시만으로도 충분히 수행한다", weights: { J: 1, T: 1 } },
      { id: "b", label: "동기 저하가 느껴진다", weights: { P: 1, T: 1 } },
      { id: "c", label: "관심이 급격히 떨어진다", weights: { P: 2 } }
    ]
  },
  {
    id: "q23",
    text: "같은 명령을 반복하면?",
    choices: [
      { id: "a", label: "꾸준히 수행한다", weights: { S: 1, J: 1 } },
      { id: "b", label: "점점 지루해한다", weights: { N: 1, P: 1 } },
      { id: "c", label: "새로운 트릭을 원한다", weights: { N: 1, P: 2 } }
    ]
  },
  {
    id: "q24",
    text: "새로운 트릭을 배우는 속도는?",
    choices: [
      { id: "a", label: "금방 이해하고 따라 한다", weights: { N: 1, T: 1 } },
      { id: "b", label: "몇 번 반복하면 익힌다", weights: { S: 1, J: 1 } },
      { id: "c", label: "천천히, 꾸준한 반복이 필요하다", weights: { S: 1, J: 1, I: 1 } }
    ]
  },
  {
    id: "q25",
    text: "산책 중 줄당김/리드에 대한 반응은?",
    choices: [
      { id: "a", label: "주인이 줄을 당기면 곧바로 속도를 조절하며 맞춰 걷는다", weights: { J: 1, T: 1 } },
      { id: "b", label: "줄에 반응은 하지만 흥미로운 자극이 있으면 금방 다른 쪽으로 가려 한다", weights: { P: 1, N: 1 } },
      { id: "c", label: "줄을 일정하게 유지하면서 안정적으로 걷는다", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q26",
    text: "집에서 가장 좋아하는 자리는?",
    choices: [
      { id: "a", label: "주인 근처(소파 옆/발치)", weights: { F: 1, I: 1 } },
      { id: "b", label: "창가/베란다 등 관찰 포인트", weights: { N: 1, T: 1 } },
      { id: "c", label: "자기 하우스/매트 고정 자리", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q27",
    text: "새로운 음식/간식에 대한 태도는?",
    choices: [
      { id: "a", label: "호기심 많아 바로 먹어본다", weights: { E: 1, P: 1 } },
      { id: "b", label: "냄새/텍스처를 확인한 뒤 먹는다", weights: { N: 1, T: 1 } },
      { id: "c", label: "기존 것만 선호한다", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q28",
    text: "다른 반려동물(고양이/새 등)을 보면?",
    choices: [
      { id: "a", label: "친해지려 다가간다", weights: { E: 1, F: 1 } },
      { id: "b", label: "서로의 거리를 존중한다", weights: { I: 1, T: 1 } },
      { id: "c", label: "흥분/사냥 본능이 올라올 때가 있다", weights: { E: 1, P: 1 } }
    ]
  },
  {
    id: "q29",
    text: "주인이 다른 강아지를 쓰다듬을 때 반응은?",
    choices: [
      { id: "a", label: "질투하거나 사이에 끼어든다", weights: { E: 1, F: 1 } },
      { id: "b", label: "한쪽에서 조용히 지켜본다", weights: { I: 1, T: 1 } },
      { id: "c", label: "주인의 호출/신호에 집중한다", weights: { J: 1, T: 1 } }
    ]
  },
  {
    id: "q30",
    text: "하루 중 가장 활발한 시간대는?",
    choices: [
      { id: "a", label: "아침/이른 저녁(산책 시간과 맞춰 활발)", weights: { J: 1, S: 1 } },
      { id: "b", label: "하루 종일 틈틈이 짧게 여러 번", weights: { P: 1, N: 1 } },
      { id: "c", label: "특정 시간보다 주인 활동에 맞춘다", weights: { F: 1, I: 1 } }
    ]
  }
];
