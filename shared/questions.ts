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
    text: "혼자 있을 때 강아지는 어떻게 하나요?",
    choices: [
      { id: "a", label: "집안이 조용해지면 소파나 자기 침대에 편안히 누워 잠을 청하거나, 큰 움직임 없이 시간을 보낸다.", weights: { I: 2 } },
      { id: "b", label: "혼자 있는 동안 집안을 돌아다니며 냄새를 맡거나 창가에서 바깥을 구경한다.", weights: { E: 2 } },
      { id: "c", label: "주인이 없는 것이 불안해서 현관문 근처를 서성이거나 낑낑거리며 주인을 찾는다.", weights: { E: 1, F: 1 } }
    ]
  },
  {
    id: "q2",
    text: "새로운 강아지나 낯선 사람을 처음 만났을 때 반응은?",
    choices: [
      { id: "a", label: "꼬리를 흔들며 바로 다가가 반갑게 인사한다.", weights: { E: 2, F: 1 } },
      { id: "b", label: "잠시 거리를 두고 상대를 관찰한 뒤 천천히 다가간다.", weights: { I: 1, S: 1 } },
      { id: "c", label: "주인 뒤에 숨거나 자리를 피하며 낯가림을 한다.", weights: { I: 2, J: 1 } }
    ]
  },
  {
    id: "q3",
    text: "집에 손님이 왔을 때 강아지는?",
    choices: [
      { id: "a", label: "흥분해서 짖거나 방 안을 뛰어다니며 적극적으로 반긴다.", weights: { E: 2 } },
      { id: "b", label: "처음에는 긴장하지만 금방 적응해 곁에 다가간다.", weights: { N: 1, F: 1 } },
      { id: "c", label: "자기 자리에 가서 눈치만 보거나 조용히 지낸다.", weights: { I: 2, J: 1 } }
    ]
  },
  {
    id: "q4",
    text: "병원이나 카페 같은 낯선 공간에 들어갔을 때?",
    choices: [
      { id: "a", label: "새로운 냄새를 맡으며 호기심 가득하게 이리저리 돌아다닌다.", weights: { E: 1, S: 1 } },
      { id: "b", label: "조용히 주변을 살피며 신중하게 움직인다.", weights: { I: 1, T: 1 } },
      { id: "c", label: "긴장해서 주인 다리에 바짝 붙어 떨어지지 않는다.", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q5",
    text: "주인이 집에 돌아왔을 때 가장 먼저 하는 행동은?",
    choices: [
      { id: "a", label: "현관 앞으로 달려와 점프하고 꼬리를 크게 흔든다.", weights: { E: 1, F: 1 } },
      { id: "b", label: "차분하게 다가와 냄새를 맡으며 인사한다.", weights: { I: 1, T: 1 } },
      { id: "c", label: "흥분해 주인 옆에 꼭 붙어 떨어지지 않으려 한다.", weights: { F: 1, N: 1 } }
    ]
  },
  {
    id: "q6",
    text: "산책할 때 어떤 스타일인가요?",
    choices: [
      { id: "a", label: "줄을 당기며 앞장서서 새로운 냄새와 길을 탐험한다.", weights: { E: 1, N: 1 } },
      { id: "b", label: "주인의 속도에 맞추며 일정한 보조로 걷는다.", weights: { S: 1, J: 1 } },
      { id: "c", label: "상황과 기분에 따라 앞으로 갔다가 뒤로 갔다가 자유롭게 움직인다.", weights: { N: 1, P: 1 } }
    ]
  },
  {
    id: "q7",
    text: "산책 루트가 바뀌면?",
    choices: [
      { id: "a", label: "새로운 길에 흥분해 신나게 탐험한다.", weights: { N: 1, P: 1 } },
      { id: "b", label: "낯설어 하지만 몇 분 안에 적응한다.", weights: { S: 1, J: 1 } },
      { id: "c", label: "당황하거나 멈춰 서서 가기를 거부한다.", weights: { N: 1, F: 1, J: 1 } }
    ]
  },
  {
    id: "q8",
    text: "공이나 장난감을 줬을 때?",
    choices: [
      { id: "a", label: "바로 물어오거나 뛰어다니며 논다.", weights: { E: 1, P: 1 } },
      { id: "b", label: "한참 냄새를 맡고 살펴본 뒤에 논다.", weights: { S: 1, T: 1 } },
      { id: "c", label: "흥미가 없다는 듯 무심히 지나간다.", weights: { I: 1, T: 1 } }
    ]
  },
  {
    id: "q9",
    text: "새 장난감을 줬을 때 반응은?",
    choices: [
      { id: "a", label: "즉시 물어뜯거나 신나게 가지고 논다.", weights: { E: 1, P: 2 } },
      { id: "b", label: "조심스럽게 다가가며 천천히 탐색한다.", weights: { S: 1, P: 1 } },
      { id: "c", label: "별다른 반응 없이 무시한다.", weights: { I: 1, J: 1 } }
    ]
  },
  {
    id: "q10",
    text: "놀아줄 때 가장 좋아하는 방식은?",
    choices: [
      { id: "a", label: "줄다리기, 공 던지기 같은 활발한 놀이", weights: { E: 1, P: 1 } },
      { id: "b", label: "퍼즐 장난감이나 냄새 찾기 같은 두뇌 놀이", weights: { N: 1, T: 1 } },
      { id: "c", label: "쓰다듬기, 안기기 같은 교감 중심 놀이", weights: { I: 1, F: 1 } }
    ]
  },
  {
    id: "q11",
    text: "초인종이나 폭죽 같은 큰 소리에?",
    choices: [
      { id: "a", label: "소리가 나는 쪽으로 달려가 확인하려 한다.", weights: { E: 1, N: 1 } },
      { id: "b", label: "순간 멈추고 상황을 살핀다.", weights: { I: 1, S: 1 } },
      { id: "c", label: "놀라서 짖거나 숨어버린다.", weights: { F: 1, J: 1 } }
    ]
  },
  {
    id: "q12",
    text: "낯선 강아지가 크게 짖으면?",
    choices: [
      { id: "a", label: "같이 짖거나 다가가며 반응한다.", weights: { E: 1, T: 1 } },
      { id: "b", label: "주인의 눈치를 보며 행동을 결정한다.", weights: { S: 1, J: 1 } },
      { id: "c", label: "뒤로 물러서거나 피한다.", weights: { I: 1, F: 1 } }
    ]
  },
  {
    id: "q13",
    text: "주인이 외출하려 할 때 반응은?",
    choices: [
      { id: "a", label: "무심하게 지켜보다 자기 할 일을 한다.", weights: { I: 1, T: 1 } },
      { id: "b", label: "현관 앞에서 앉아 기다린다.", weights: { F: 1, J: 1 } },
      { id: "c", label: "낑낑거리거나 문을 긁으며 불안해한다.", weights: { E: 1, F: 1 } }
    ]
  },
  {
    id: "q14",
    text: "혼자 있는 시간이 길어지면?",
    choices: [
      { id: "a", label: "장난감이나 간식 찾기로 시간을 보낸다.", weights: { S: 1, P: 1 } },
      { id: "b", label: "주로 자거나 정해진 자리에서 쉰다.", weights: { S: 1, J: 1 } },
      { id: "c", label: "스트레스로 물건을 파괴하거나 낑낑거린다.", weights: { E: 1, F: 1 } }
    ]
  },
  {
    id: "q15",
    text: "낯선 장소에서 휴식을 취할 때?",
    choices: [
      { id: "a", label: "편하게 엎드려 주변을 구경한다.", weights: { S: 1, P: 1 } },
      { id: "b", label: "매트나 케이지에서 조용히 쉰다.", weights: { S: 1, J: 1 } },
      { id: "c", label: "주인 옆에 꼭 붙어 쉰다.", weights: { F: 1, J: 1 } }
    ]
  },
  {
    id: "q16",
    text: "주인이 이름을 불렀을 때?",
    choices: [
      { id: "a", label: "바로 달려온다.", weights: { E: 1, F: 1 } },
      { id: "b", label: "두세 번 불러야 겨우 다가온다.", weights: { I: 1, J: 1 } },
      { id: "c", label: "간식 보상이 있을 때만 확실히 온다.", weights: { T: 1, P: 1 } }
    ]
  },
  {
    id: "q17",
    text: "주인이 기분이 좋지 않을 때 강아지는?",
    choices: [
      { id: "a", label: "다가와 기대며 위로한다.", weights: { I: 1, F: 1 } },
      { id: "b", label: "산책이나 놀이로 분위기를 바꾸려 한다.", weights: { E: 1, S: 1 } },
      { id: "c", label: "눈치를 보며 조용히 거리를 둔다.", weights: { T: 1, J: 1 } }
    ]
  },
  {
    id: "q18",
    text: "주인이 바쁠 때 강아지는?",
    choices: [
      { id: "a", label: "혼자 놀거나 쉰다.", weights: { I: 1, T: 1 } },
      { id: "b", label: "주인의 주의를 끌려고 장난을 친다.", weights: { E: 1, F: 1 } },
      { id: "c", label: "주인이 지시하면 매트나 하우스에서 기다린다.", weights: { J: 1, S: 1 } }
    ]
  },
  {
    id: "q19",
    text: "주인이 자리에 앉아 있을 때?",
    choices: [
      { id: "a", label: "옆에 와서 붙어 앉는다.", weights: { F: 1, I: 1 } },
      { id: "b", label: "근처를 왔다 갔다 한다.", weights: { E: 1, P: 1 } },
      { id: "c", label: "자기 자리에 가서 쉰다.", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q20",
    text: "스킨십을 얼마나 좋아하나요?",
    choices: [
      { id: "a", label: "안기고 쓰다듬기를 적극적으로 원한다.", weights: { F: 2 } },
      { id: "b", label: "기분 좋을 때만 원한다.", weights: { S: 1, P: 1 } },
      { id: "c", label: "짧은 터치 정도만 허용한다.", weights: { T: 1, I: 1 } }
    ]
  },
  {
    id: "q21",
    text: "앉아, 기다려 같은 기본 지시에?",
    choices: [
      { id: "a", label: "바로 잘 따른다.", weights: { S: 1, J: 2 } },
      { id: "b", label: "간식이 있을 때 더 잘 따른다.", weights: { F: 1, P: 1 } },
      { id: "c", label: "금방 싫증 내며 놀이를 더 원한다.", weights: { E: 1, P: 1 } }
    ]
  },
  {
    id: "q22",
    text: "보상 없이 훈련할 때?",
    choices: [
      { id: "a", label: "지시만으로도 잘 따른다.", weights: { J: 1, T: 1 } },
      { id: "b", label: "조금은 동기가 떨어진다.", weights: { P: 1, T: 1 } },
      { id: "c", label: "금세 흥미를 잃는다.", weights: { P: 2 } }
    ]
  },
  {
    id: "q23",
    text: "같은 명령을 여러 번 반복하면?",
    choices: [
      { id: "a", label: "꾸준히 잘 수행한다.", weights: { S: 1, J: 1 } },
      { id: "b", label: "점점 지루해한다.", weights: { N: 1, P: 1 } },
      { id: "c", label: "새로운 지시를 원한다.", weights: { N: 1, P: 2 } }
    ]
  },
  {
    id: "q24",
    text: "새로운 트릭을 배울 때 속도는?",
    choices: [
      { id: "a", label: "금방 이해하고 따라 한다.", weights: { N: 1, T: 1 } },
      { id: "b", label: "몇 번 반복하면 익힌다.", weights: { S: 1, J: 1 } },
      { id: "c", label: "꾸준한 반복이 필요하다.", weights: { S: 1, J: 1, I: 1 } }
    ]
  },
  {
    id: "q25",
    text: "산책 중 줄을 당겼을 때 반응은?",
    choices: [
      { id: "a", label: "속도를 조절해 주인 보조에 맞춘다.", weights: { J: 1, T: 1 } },
      { id: "b", label: "반응은 하지만 금방 다른 자극에 끌린다.", weights: { P: 1, N: 1 } },
      { id: "c", label: "일정한 속도를 유지하며 안정적으로 걷는다.", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q26",
    text: "집에서 가장 좋아하는 자리는?",
    choices: [
      { id: "a", label: "주인 곁, 소파 옆이나 발치", weights: { F: 1, N: 1, J: 1 } },
      { id: "b", label: "창가나 베란다 같은 바깥을 볼 수 있는 곳", weights: { N: 1, T: 1 } },
      { id: "c", label: "자기 하우스나 매트", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q27",
    text: "새로운 음식이나 간식을 줬을 때?",
    choices: [
      { id: "a", label: "바로 맛본다.", weights: { E: 1, P: 1 } },
      { id: "b", label: "냄새 맡고 살펴본 뒤 먹는다.", weights: { N: 1, T: 1 } },
      { id: "c", label: "낯선 건 거부하고 익숙한 것만 먹는다.", weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: "q28",
    text: "다른 반려동물을 봤을 때?",
    choices: [
      { id: "a", label: "친해지려 다가간다.", weights: { E: 1, F: 1 } },
      { id: "b", label: "거리를 두고 존중한다.", weights: { I: 1, T: 1 } },
      { id: "c", label: "흥분하거나 쫓으려 한다.", weights: { E: 1, P: 1 } }
    ]
  },
  {
    id: "q29",
    text: "주인이 다른 강아지를 쓰다듬을 때?",
    choices: [
      { id: "a", label: "질투하며 사이에 끼어든다.", weights: { E: 1, F: 1 } },
      { id: "b", label: "조용히 지켜본다.", weights: { I: 1, T: 1 } },
      { id: "c", label: "주인의 부름에 집중한다.", weights: { J: 1, T: 1 } }
    ]
  },
  {
    id: "q30",
    text: "하루 중 가장 활발한 시간대는?",
    choices: [
      { id: "a", label: "아침이나 저녁, 산책 시간대", weights: { J: 1, S: 1 } },
      { id: "b", label: "하루 종일 틈틈이 활발하다", weights: { P: 1, N: 1 } },
      { id: "c", label: "주인의 활동 시간에 맞춘다", weights: { F: 1, N: 1, J: 1 } }
    ]
  }
];
