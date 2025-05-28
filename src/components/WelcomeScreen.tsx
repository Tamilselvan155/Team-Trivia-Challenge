import React from 'react';
import { Trophy } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (teamNumber: number) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fadeIn">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-center mb-6">
          <Trophy size={64} className="text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Team Trivia Challenge
        </h1>
        <p className="text-lg text-center mb-8 text-gray-300">
          Three teams, thirty unique questions, one champion. Each team will face their own set of 
          challenging questions across sports, web series, and popular culture.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((teamNumber) => (
            <div 
              key={teamNumber} 
              className="bg-white/5 hover:bg-white/15 transition-all duration-300 rounded-xl p-6 text-center cursor-pointer transform hover:scale-105 hover:shadow-xl"
              onClick={() => onStart(teamNumber)}
            >
              <h2 className="text-2xl font-bold mb-3">Team {teamNumber}</h2>
              <p className="text-gray-300 mb-4">10 unique questions</p>
              <button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-200"
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 text-gray-400">
          <p className="mb-2">Instructions:</p>
          <ul className="text-sm list-disc list-inside text-left max-w-xl mx-auto">
            <li className="mb-1">Each team has 10 unique questions - no overlapping content</li>
            <li className="mb-1">Questions cover sports, web series, and popular culture</li>
            <li className="mb-1">Each question includes an image hint</li>
            <li className="mb-1">Correct answers will turn green, incorrect answers will turn red</li>
            <li className="mb-1">Final results will be displayed after all questions are answered</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;