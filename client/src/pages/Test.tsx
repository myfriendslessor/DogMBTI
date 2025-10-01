import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { questions } from '@shared/questions';
import { calculateMBTI } from '@shared/personalityTypes';
import { ChevronLeft } from 'lucide-react';

export default function Test() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = currentQuestion ? (answers[currentQuestion.id] || null) : null;

  // 안전장치: 질문이 없으면 홈으로 리다이렉트
  useEffect(() => {
    if (!currentQuestion) {
      setLocation('/');
    }
  }, [currentQuestion, setLocation]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (choiceId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: choiceId
    }));
    
    // 답변 선택 후 자동으로 다음 질문으로 이동
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        const updatedAnswers = {
          ...answers,
          [currentQuestion.id]: choiceId
        };
        
        // 디버깅: 점수 계산 과정 로그
        const scores = {
          E: 0, I: 0,
          S: 0, N: 0,
          T: 0, F: 0,
          J: 0, P: 0
        };
        
        questions.forEach(question => {
          const selectedChoiceId = updatedAnswers[question.id];
          if (selectedChoiceId !== undefined) {
            const selectedChoice = question.choices.find(c => c.id === selectedChoiceId);
            if (selectedChoice) {
              Object.entries(selectedChoice.weights).forEach(([dimension, weight]) => {
                scores[dimension as keyof typeof scores] += weight;
              });
            }
          }
        });
        
        console.log('=== MBTI 계산 디버깅 ===');
        console.log('총 질문 수:', questions.length);
        console.log('답변 수:', Object.keys(updatedAnswers).length);
        console.log('계산된 점수:', scores);
        
        const mbtiType = calculateMBTI(updatedAnswers);
        console.log('최종 MBTI 타입:', mbtiType);
        console.log('=======================');
        
        setLocation(`/result?type=${mbtiType}`);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-6">
            🐾 강아지 MBTI 테스트
          </h1>
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={questions.length} 
          />
        </div>

        <div className="mb-8">
          <QuestionCard
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            questionText={currentQuestion.text}
            choices={currentQuestion.choices}
            selectedAnswer={currentAnswer}
            onAnswerSelect={handleAnswerSelect}
          />
        </div>

        <div className="flex justify-start max-w-2xl mx-auto">
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            data-testid="button-previous"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            이전
          </Button>
        </div>
      </div>
    </div>
  );
}
