import React, { useState } from 'react';
import { QuizProvider } from './context/QuizContext';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

function App() {
  const [screen, setScreen] = useState<'welcome' | 'quiz' | 'results'>('welcome');
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

  return (
    <QuizProvider>
      <div className="min-h-screen bg-gradient-to-br from-violet-900 to-indigo-900 text-white">
        {screen === 'welcome' && (
          <WelcomeScreen 
            onStart={(teamNumber) => {
              setSelectedTeam(teamNumber);
              setScreen('quiz');
            }} 
          />
        )}
        
        {screen === 'quiz' && selectedTeam !== null && (
          <QuizScreen 
            teamNumber={selectedTeam} 
            onComplete={() => setScreen('results')}
          />
        )}
        
        {screen === 'results' && (
          <ResultsScreen 
            onRestart={() => setScreen('welcome')}
          />
        )}
      </div>
    </QuizProvider>
  );
}

export default App;