import React from 'react';
import { useQuiz } from '../context/QuizContext';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  teamNumber: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentQuestion, 
  totalQuestions,
  teamNumber 
}) => {
  const { getQuestionStatus } = useQuiz();
  
  return (
    <div className="w-full mb-4">
      <div className="flex space-x-1">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const status = getQuestionStatus(teamNumber, index);
          let bgColor = "bg-white/30"; // Default for unanswered
          
          if (status === 'correct') {
            bgColor = "bg-green-500";
          } else if (status === 'incorrect') {
            bgColor = "bg-red-500";
          } else if (index === currentQuestion) {
            bgColor = "bg-white";
          }
          
          return (
            <div 
              key={index}
              className={`h-2 rounded-full flex-1 transition-all duration-300 ${bgColor} ${
                index === currentQuestion ? 'scale-y-150' : ''
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;