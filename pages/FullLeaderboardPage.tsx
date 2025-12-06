
import React from 'react';
import { COMPANIES_DATA } from '../constants';
import { CompanyCard } from '../components/CompanyCard';

interface FullLeaderboardPageProps {
  onNavigate: (page: 'leaderboard' | 'trappedIon') => void;
}

const FullLeaderboardPage: React.FC<FullLeaderboardPageProps> = ({ onNavigate }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 md:mb-12">
           <button 
            onClick={() => onNavigate('leaderboard')} 
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-4"
          >
            &larr; Back to Main Leaderboard
          </button>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Full Standings
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 mt-2">2025 Constructor Standings</p>
        </header>

        <main>
          {/* Column Headers */}
          <div className="hidden sm:flex items-center space-x-4 px-3 sm:px-4 mb-2">
            {/* Spacers for rank and icon */}
            <div className="w-8 shrink-0"></div>
            <div className="w-8 shrink-0"></div>
            
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-7 gap-2 sm:gap-4 items-center text-zinc-400 text-xs font-bold uppercase tracking-wider">
              <div className="sm:col-span-2 text-left">Constructor</div>
              <div className="sm:col-span-1 text-center">Technology</div>
              <div className="sm:col-span-1 text-center">DARPA QBI</div>
              <div className="sm:col-span-1 text-center">Stock</div>
              <div className="sm:col-span-1 text-center">QTUM %</div>
              <div className="sm:col-span-1 text-right">Key Achievement</div>
            </div>
          </div>

          <div className="space-y-3">
            {COMPANIES_DATA.map(company => (
              <CompanyCard key={company.rank} company={company} onTrappedIonClick={() => onNavigate('trappedIon')} showAchievement={true} />
            ))}
          </div>
        </main>
        
        <footer className="text-center mt-12">
            <button 
                onClick={() => onNavigate('leaderboard')} 
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
                Back to Main Leaderboard
            </button>
        </footer>
      </div>
    </div>
  );
};

export default FullLeaderboardPage;
