import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { getQuestions } from '@shared/i18n';
import { calculateMBTI } from '@shared/personalityTypes';
import { ChevronLeft } from 'lucide-react';

export default function Test() {
  const [, setLocation] = useLocation();
  const { language, t } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isProcessingRef = useRef(false);

  const questions = getQuestions(language);
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

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleAnswerSelect = (choiceId: string) => {
    // 이미 처리 중이면 무시 (useRef로 즉시 체크)
    if (isProcessingRef.current) {
      return;
    }

    // 이전 타이머가 있으면 취소
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    isProcessingRef.current = true;
    setIsProcessing(true);
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: choiceId
    }));
    
    // 답변 선택 후 자동으로 다음 질문으로 이동
    timeoutRef.current = setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        
        // 질문 변경 후 150ms 동안 isProcessing 유지하여 
        // 빠른 연속 클릭 방지
        setTimeout(() => {
          isProcessingRef.current = false;
          setIsProcessing(false);
        }, 150);
      } else {
        const updatedAnswers = {
          ...answers,
          [currentQuestion.id]: choiceId
        };
        const mbtiType = calculateMBTI(updatedAnswers);
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
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-6">
            🐾 {t('home.title')}
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
            disabled={isProcessing}
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
            {language === 'ko' ? '이전' : 'Previous'}
          </Button>
        </div>
      </div>
    </div>
  );
}
