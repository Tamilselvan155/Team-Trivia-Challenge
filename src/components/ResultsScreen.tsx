import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Trophy, Award, BarChart } from 'lucide-react';

interface ResultsScreenProps {
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ onRestart }) => {
  const { teamResults, resetResults } = useQuiz();
  
  const teamScores = [
    { team: 1, score: teamResults.team1.score },
    { team: 2, score: teamResults.team2.score },
    { team: 3, score: teamResults.team3.score },
  ];
  
  // Sort teams by score in descending order
  const sortedTeams = [...teamScores].sort((a, b) => b.score - a.score);
  
  // Determine winner and if there's a tie
  const highestScore = sortedTeams[0].score;
  const winners = sortedTeams.filter(team => team.score === highestScore);
  const isTie = winners.length > 1;
  
  const handleRestart = () => {
    resetResults();
    onRestart();
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fadeIn">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Trophy size={72} className="text-yellow-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Final Results</h1>
          
          {isTie ? (
            <p className="text-xl text-gray-300">
              It's a tie! Teams {winners.map(w => w.team).join(' and ')} share the victory with {highestScore} points each!
            </p>
          ) : (
            <p className="text-xl text-gray-300">
              Team {winners[0].team} wins with {highestScore} points!
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {sortedTeams.map((team, index) => {
            // Determine medal color based on position
            let medalColor = "text-gray-400"; // Default
            if (team.score === highestScore) {
              medalColor = "text-yellow-400"; // Gold for winners
            } else if (index === 1) {
              medalColor = "text-gray-300"; // Silver for second
            } else if (index === 2) {
              medalColor = "text-amber-600"; // Bronze for third
            }
            
            return (
              <div 
                key={team.team} 
                className={`bg-white/5 rounded-xl p-6 text-center transition-all duration-300 ${
                  team.score === highestScore ? 'transform scale-105 ring-2 ring-yellow-400' : ''
                }`}
              >
                <div className="flex justify-center mb-3">
                  <Award size={40} className={medalColor} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Team {team.team}</h2>
                <div className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {team.score}/10
                </div>
                <div className="bg-white/10 rounded-full h-4 mb-2">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500" 
                    style={{ width: `${team.score * 10}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 text-sm">{team.score * 10}% Correct</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white/5 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BarChart size={24} className="text-purple-400" />
            <h3 className="text-xl font-semibold">Question Analysis</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(teamNum => {
              const teamKey = `team${teamNum}` as keyof typeof teamResults;
              const correct = teamResults[teamKey].answers.filter(a => a === 'correct').length;
              const incorrect = teamResults[teamKey].answers.filter(a => a === 'incorrect').length;
              
              return (
                <div key={teamNum} className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-medium mb-3">Team {teamNum}</h4>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-green-900/30 rounded p-2">
                      <div className="text-2xl font-bold text-green-400">{correct}</div>
                      <div className="text-sm text-green-200">Correct</div>
                    </div>
                    <div className="bg-red-900/30 rounded p-2">
                      <div className="text-2xl font-bold text-red-400">{incorrect}</div>
                      <div className="text-sm text-red-200">Incorrect</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={handleRestart}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 text-lg"
          >
            Start New Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;