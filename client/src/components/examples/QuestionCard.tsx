import { useState } from 'react';
import QuestionCard from '../QuestionCard';

export default function QuestionCardExample() {
  const [answer, setAnswer] = useState<number | null>(null);

  return (
    <div className="p-8 bg-background">
      <QuestionCard
        questionNumber={15}
        totalQuestions={60}
        questionText="우리 강아지는 새로운 강아지 친구를 만나는 것을 좋아한다."
        selectedAnswer={answer}
        onAnswerSelect={(value) => {
          setAnswer(value);
          console.log('Answer selected:', value);
        }}
      />
    </div>
  );
}
