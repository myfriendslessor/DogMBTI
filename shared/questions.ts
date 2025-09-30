export type QuestionDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Question {
  id: number;
  text: string;
  dimension: QuestionDimension;
  reverse?: boolean;
}

export const questions: Question[] = [
  { id: 1, text: "우리 강아지는 새로운 강아지 친구를 만나는 것을 좋아한다.", dimension: 'E' },
  { id: 2, text: "우리 강아지는 산책할 때 매번 새로운 길을 탐험하고 싶어한다.", dimension: 'N' },
  { id: 3, text: "다른 강아지가 슬퍼 보이면 우리 강아지도 함께 기운이 없어진다.", dimension: 'F' },
  { id: 4, text: "우리 강아지는 정해진 산책 시간과 루틴을 좋아한다.", dimension: 'J' },
  { id: 5, text: "우리 강아지는 낯선 상황에서도 침착하고 차분하다.", dimension: 'T' },
  { id: 6, text: "공원에서 낯선 강아지보다는 이미 아는 친구들과 노는 것을 선호한다.", dimension: 'I' },
  { id: 7, text: "우리 강아지는 한 가지 장난감을 완전히 다 가지고 논 다음 다른 장난감을 꺼낸다.", dimension: 'J' },
  { id: 8, text: "우리 강아지는 감정 표현이 풍부하고 기분 변화가 확실하다.", dimension: 'F' },
  { id: 9, text: "우리 강아지는 매일 같은 시간에 같은 일을 하는 것을 좋아한다.", dimension: 'J' },
  { id: 10, text: "작은 실수(예: 명령 실패)에도 우리 강아지는 주눅 든다.", dimension: 'F' },
  
  { id: 11, text: "우리 강아지는 낯선 사람에게 먼저 다가가 인사한다.", dimension: 'E' },
  { id: 12, text: "우리 강아지는 같은 장난감도 매번 다른 방식으로 가지고 논다.", dimension: 'N' },
  { id: 13, text: "우리 강아지는 감정보다는 본능적으로 행동한다.", dimension: 'T' },
  { id: 14, text: "우리 강아지는 계획 없이 그때그때 하고 싶은 대로 행동한다.", dimension: 'P' },
  { id: 15, text: "우리 강아지는 다른 강아지의 시선을 전혀 신경 쓰지 않는다.", dimension: 'I' },
  { id: 16, text: "우리 강아지는 여러 마리의 강아지와 함께 노는 것을 즐긴다.", dimension: 'E' },
  { id: 17, text: "우리 강아지는 예상치 못한 상황을 즐긴다.", dimension: 'N' },
  { id: 18, text: "우리 강아지는 다른 강아지를 돕거나 위로하는 행동을 한다.", dimension: 'F' },
  { id: 19, text: "우리 강아지는 관심사가 많아 이것저것 다 하고 싶어한다.", dimension: 'N' },
  { id: 20, text: "우리 강아지는 낯선 상황에 대해 걱정이 많은 편이다.", dimension: 'P' },
  
  { id: 21, text: "우리 강아지는 주인 외 다른 사람의 관심은 피하고 싶어한다.", dimension: 'I' },
  { id: 22, text: "우리 강아지는 창의적인 놀이보다는 정해진 놀이를 좋아한다.", dimension: 'S' },
  { id: 23, text: "우리 강아지는 감정보다는 이성적으로 판단하는 것 같다.", dimension: 'T' },
  { id: 24, text: "우리 강아지는 쉬기 전에 장난감을 먼저 정리하려 한다.", dimension: 'J' },
  { id: 25, text: "우리 강아지는 다른 강아지들의 싸움을 구경하는 것을 재미있어한다.", dimension: 'T' },
  { id: 26, text: "우리 강아지는 주목받는 것을 피하려 한다.", dimension: 'I' },
  { id: 27, text: "우리 강아지는 감정 변화가 매우 빠르다.", dimension: 'F' },
  { id: 28, text: "우리 강아지는 느린 강아지를 보면 답답해한다.", dimension: 'S' },
  { id: 29, text: "우리 강아지는 해야 할 일(배변 등)을 마지막까지 미룬다.", dimension: 'P' },
  { id: 30, text: "우리 강아지는 신기한 것에 대한 호기심이 많다.", dimension: 'N' },
  
  { id: 31, text: "우리 강아지는 혼자보다는 다른 강아지와 시간 보내는 것을 좋아한다.", dimension: 'E' },
  { id: 32, text: "우리 강아지는 복잡한 놀이보다는 단순한 놀이를 선호한다.", dimension: 'S' },
  { id: 33, text: "우리 강아지는 다른 강아지의 감정에 쉽게 공감한다.", dimension: 'F' },
  { id: 34, text: "우리 강아지는 결정을 내리는 것을 미루는 편이다.", dimension: 'P' },
  { id: 35, text: "우리 강아지는 한번 결정하면 다시 생각하지 않는다.", dimension: 'S' },
  { id: 36, text: "우리 강아지는 조용한 집보다 떠들썩한 공원을 좋아한다.", dimension: 'E' },
  { id: 37, text: "우리 강아지는 새로운 장소나 환경을 좋아한다.", dimension: 'N' },
  { id: 38, text: "우리 강아지는 다른 강아지의 감정을 이해하기 어려워한다.", dimension: 'T' },
  { id: 39, text: "우리 강아지는 매일 해야 할 일의 순서가 정해져 있다.", dimension: 'J' },
  { id: 40, text: "우리 강아지는 불안해하는 모습을 거의 보이지 않는다.", dimension: 'S' },
  
  { id: 41, text: "우리 강아지는 낯선 사람과의 교류를 피하고 싶어한다.", dimension: 'I' },
  { id: 42, text: "우리 강아지는 다른 강아지의 행동을 이해하려고 관찰한다.", dimension: 'F' },
  { id: 43, text: "우리 강아지는 친구에게 먼저 놀자고 요청한다.", dimension: 'E' },
  { id: 44, text: "우리 강아지는 계획에 차질이 생기면 원래대로 돌아가려 한다.", dimension: 'J' },
  { id: 45, text: "우리 강아지는 과거의 실수를 후회하는 것 같다.", dimension: 'N' },
  { id: 46, text: "우리 강아지는 철학적인 것(예: 생의 의미)에 관심이 없다.", dimension: 'S' },
  { id: 47, text: "우리 강아지는 감정을 조절하기보다 감정에 휘둘린다.", dimension: 'F' },
  { id: 48, text: "우리 강아지는 다른 강아지의 실수를 너그럽게 봐준다.", dimension: 'F' },
  { id: 49, text: "우리 강아지는 계획적이기보다 즉흥적으로 행동한다.", dimension: 'P' },
  { id: 50, text: "우리 강아지는 칭찬받으면 기대에 못 미칠까 걱정한다.", dimension: 'N' },
  
  { id: 51, text: "우리 강아지는 혼자 있는 시간을 선호한다.", dimension: 'I' },
  { id: 52, text: "우리 강아지는 복잡한 생각보다는 단순한 생각을 한다.", dimension: 'S' },
  { id: 53, text: "우리 강아지는 조용한 장소보다 사람들이 많은 곳을 좋아한다.", dimension: 'E' },
  { id: 54, text: "우리 강아지는 상대방의 감정을 바로 알아차린다.", dimension: 'F' },
  { id: 55, text: "우리 강아지는 새로운 것에 압도당하는 느낌을 받는다.", dimension: 'N' },
  { id: 56, text: "우리 강아지는 단계를 건너뛰지 않고 순서대로 행동한다.", dimension: 'J' },
  { id: 57, text: "우리 강아지는 논란의 여지가 있는 행동에 관심이 많다.", dimension: 'T' },
  { id: 58, text: "우리 강아지는 자기보다 다른 강아지를 먼저 배려한다.", dimension: 'F' },
  { id: 59, text: "우리 강아지는 정해진 시간을 잘 지키지 못한다.", dimension: 'P' },
  { id: 60, text: "우리 강아지는 일이 잘 될 거라는 자신감이 있다.", dimension: 'J' },
];
