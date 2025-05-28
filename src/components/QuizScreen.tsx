import React, { useState, useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import ProgressBar from './ProgressBar';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface QuizScreenProps {
  teamNumber: number;
  onComplete: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ teamNumber, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const { 
    getTeamQuestions, 
    markQuestionAnswered, 
    getQuestionStatus 
  } = useQuiz();

  const teamQuestions = getTeamQuestions(teamNumber);
  const currentQuestion = teamQuestions.questions[currentQuestionIndex];
  const questionStatus = getQuestionStatus(teamNumber, currentQuestionIndex);

  useEffect(() => {
    // Reset state when moving to a new question
    setSelectedOption(null);
    setIsAnswered(questionStatus !== 'unanswered');
    setIsCorrect(questionStatus === 'correct');
  }, [currentQuestionIndex, questionStatus]);

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return; // Prevent changing answer after submission
    
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isAnswered) return;
    
    const correct = selectedOption === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);
    
    markQuestionAnswered(teamNumber, currentQuestionIndex, correct);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < teamQuestions.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl text-center">
          <CheckCircle size={64} className="text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Team {teamNumber} Quiz Completed!</h2>
          <p className="text-xl mb-8">You've answered all the questions.</p>
          <button 
            onClick={onComplete}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 text-lg"
          >
            View Results
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="max-w-5xl w-full mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Team {teamNumber}</h2>
          <div className="text-lg">
            Question {currentQuestionIndex + 1} of {teamQuestions.questions.length}
          </div>
        </div>
        
        <ProgressBar 
          currentQuestion={currentQuestionIndex} 
          totalQuestions={teamQuestions.questions.length}
          teamNumber={teamNumber}
        />
      </div>
      
      <div className="max-w-5xl w-full mx-auto flex-grow flex flex-col md:flex-row gap-6 mb-6">
        {/* Question and Image */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
          <div className="aspect-video mb-6 overflow-hidden rounded-xl">
            <img 
              src={currentQuestion.imageUrl} 
              alt="Question hint" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="mb-4 px-2">
            <span className="inline-block bg-purple-600 text-white text-sm font-semibold rounded-full px-3 py-1 mb-3">
              {currentQuestion.category.replace('-', ' ')}
            </span>
            <h3 className="text-xl font-bold mb-2">{currentQuestion.question}</h3>
          </div>
        </div>
        
        {/* Options */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
          <h3 className="text-lg font-semibold mb-4">Select your answer:</h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let optionClasses = "block w-full text-left p-4 rounded-xl transition-all duration-200 border-2 ";
              
              if (isAnswered) {
                if (option === currentQuestion.correctAnswer) {
                  optionClasses += "bg-green-500/20 border-green-500 text-white";
                } else if (option === selectedOption) {
                  optionClasses += "bg-red-500/20 border-red-500 text-white";
                } else {
                  optionClasses += "bg-white/5 border-transparent text-gray-300";
                }
              } else {
                optionClasses += selectedOption === option 
                  ? "bg-white/20 border-white text-white" 
                  : "bg-white/5 hover:bg-white/10 border-transparent text-white cursor-pointer";
              }
              
              return (
                <button
                  key={index}
                  className={optionClasses}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isAnswered}
                >
                  <span className="font-semibold">{String.fromCharCode(65 + index)}.</span> {option}
                </button>
              );
            })}
          </div>
          
          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                currentQuestionIndex === 0 
                  ? 'text-gray-500 cursor-not-allowed' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <ArrowLeft size={20} /> Previous
            </button>
            
            {!isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedOption}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  !selectedOption 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
              >
                {currentQuestionIndex === teamQuestions.questions.length - 1 ? 'Finish' : 'Next'} <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;