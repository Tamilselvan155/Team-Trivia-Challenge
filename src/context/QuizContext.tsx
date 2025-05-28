import React, { createContext, useContext, useState, ReactNode } from 'react';
import { quizData } from '../data/quizData';
import { Team, QuizResults } from '../types/quiz';

interface QuizContextType {
  teamResults: QuizResults;
  updateTeamResults: (teamNumber: number, correct: boolean) => void;
  resetResults: () => void;
  getTeamScore: (teamNumber: number) => number;
  getTeamQuestions: (teamNumber: number) => Team;
  markQuestionAnswered: (teamNumber: number, questionIndex: number, isCorrect: boolean) => void;
  getQuestionStatus: (teamNumber: number, questionIndex: number) => 'unanswered' | 'correct' | 'incorrect';
}

const initialResults: QuizResults = {
  team1: { score: 0, answers: Array(10).fill('unanswered') },
  team2: { score: 0, answers: Array(10).fill('unanswered') },
  team3: { score: 0, answers: Array(10).fill('unanswered') },
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [teamResults, setTeamResults] = useState<QuizResults>(initialResults);

  const updateTeamResults = (teamNumber: number, correct: boolean) => {
    setTeamResults(prev => {
      const teamKey = `team${teamNumber}` as keyof QuizResults;
      return {
        ...prev,
        [teamKey]: {
          ...prev[teamKey],
          score: correct ? prev[teamKey].score + 1 : prev[teamKey].score,
        },
      };
    });
  };

  const resetResults = () => {
    setTeamResults(initialResults);
  };

  const getTeamScore = (teamNumber: number): number => {
    const teamKey = `team${teamNumber}` as keyof QuizResults;
    return teamResults[teamKey].score;
  };

  const getTeamQuestions = (teamNumber: number): Team => {
    const teamKey = `team${teamNumber}` as keyof typeof quizData;
    return quizData[teamKey];
  };

  const markQuestionAnswered = (teamNumber: number, questionIndex: number, isCorrect: boolean) => {
    setTeamResults(prev => {
      const teamKey = `team${teamNumber}` as keyof QuizResults;
      const newAnswers = [...prev[teamKey].answers];
      newAnswers[questionIndex] = isCorrect ? 'correct' : 'incorrect';
      
      return {
        ...prev,
        [teamKey]: {
          ...prev[teamKey],
          answers: newAnswers,
          score: isCorrect ? prev[teamKey].score + 1 : prev[teamKey].score,
        },
      };
    });
  };

  const getQuestionStatus = (teamNumber: number, questionIndex: number): 'unanswered' | 'correct' | 'incorrect' => {
    const teamKey = `team${teamNumber}` as keyof QuizResults;
    return teamResults[teamKey].answers[questionIndex];
  };

  return (
    <QuizContext.Provider value={{
      teamResults,
      updateTeamResults,
      resetResults,
      getTeamScore,
      getTeamQuestions,
      markQuestionAnswered,
      getQuestionStatus,
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};