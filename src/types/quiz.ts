export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  category: 'sports' | 'web-series' | 'popular-culture';
  imageUrl: string;
}

export interface Team {
  name: string;
  questions: Question[];
}

export interface QuizData {
  team1: Team;
  team2: Team;
  team3: Team;
}

export interface TeamResult {
  score: number;
  answers: ('unanswered' | 'correct' | 'incorrect')[];
}

export interface QuizResults {
  team1: TeamResult;
  team2: TeamResult;
  team3: TeamResult;
}