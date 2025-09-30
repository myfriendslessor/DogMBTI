import { Button } from '@/components/ui/button';

interface AnswerButtonProps {
  value: number;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function AnswerButton({ value, label, selected, onClick }: AnswerButtonProps) {
  return (
    <Button
      variant={selected ? "default" : "outline"}
      size="lg"
      onClick={onClick}
      className={`w-full justify-start text-left h-auto py-4 px-6 transition-all ${
        selected ? 'ring-2 ring-primary ring-offset-2' : ''
      }`}
      data-testid={`answer-button-${value}`}
    >
      <span className="flex-1">{label}</span>
      {selected && (
        <span className="ml-2 text-primary-foreground">✓</span>
      )}
    </Button>
  );
}
