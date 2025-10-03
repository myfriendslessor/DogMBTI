import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Choice } from '@shared/questions';

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  choices: Choice[];
  selectedAnswer: string | null;
  onAnswerSelect: (choiceId: string) => void;
  disabled?: boolean;
}

export default function QuestionCard({
  questionNumber,
  totalQuestions,
  questionText,
  choices,
  selectedAnswer,
  onAnswerSelect,
  disabled = false
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
      <CardContent className="space-y-3" style={disabled ? { pointerEvents: 'none' } : {}}>
        {choices.map((choice) => (
          <Button
            key={choice.id}
            variant={selectedAnswer === choice.id ? "default" : "outline"}
            className="w-full justify-start text-left h-auto py-4 px-6 transition-all"
            onClick={() => onAnswerSelect(choice.id)}
            disabled={disabled}
            data-testid={`choice-${choice.id}`}
          >
            <span className="text-base leading-relaxed">{choice.label}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
