import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AnswerButton from './AnswerButton';

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  selectedAnswer: number | null;
  onAnswerSelect: (value: number) => void;
}

const answerOptions = [
  { value: 1, label: '전혀 아니다' },
  { value: 2, label: '아니다' },
  { value: 3, label: '약간 아니다' },
  { value: 4, label: '보통이다' },
  { value: 5, label: '약간 그렇다' },
  { value: 6, label: '그렇다' },
  { value: 7, label: '매우 그렇다' }
];

export default function QuestionCard({
  questionNumber,
  totalQuestions,
  questionText,
  selectedAnswer,
  onAnswerSelect
}: QuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            질문 {questionNumber} / {totalQuestions}
          </p>
          <h2 className="text-xl md:text-2xl font-bold leading-relaxed">
            {questionText}
          </h2>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {answerOptions.map((option) => (
          <AnswerButton
            key={option.value}
            value={option.value}
            label={option.label}
            selected={selectedAnswer === option.value}
            onClick={() => onAnswerSelect(option.value)}
          />
        ))}
      </CardContent>
    </Card>
  );
}
