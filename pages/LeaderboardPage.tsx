
import React from 'react';
import { COMPANIES_DATA } from '../constants';
import { CompanyCard } from '../components/CompanyCard';
import { SnowflakeIcon } from '../components/SnowflakeIcon';
import { DarpaQbiExplanation } from '../components/DarpaQbiExplanation';
import { KeyAchievements } from '../components/KeyAchievements';
import { SummarizedTechnologyGroups } from '../components/SummarizedTechnologyGroups';

interface LeaderboardPageProps {
  onNavigate: (page: 'trappedIon' | 'quantumConcepts' | 'fullLeaderboard' | 'technologyDetails') => void;
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ onNavigate }) => {
  const topCompanies = COMPANIES_DATA.slice(0, 3);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            The Quantum Race
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 mt-2">2025 Constructor Standings</p>
        </header>

        <main>
          {/* Column Headers */}
          <div className="hidden sm:flex items-center space-x-4 px-3 sm:px-4 mb-2">
            {/* Spacers for rank and icon */}
            <div className="w-8 shrink-0"></div>
            <div className="w-8 shrink-0"></div>
            
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-4 items-center text-zinc-400 text-xs font-bold uppercase tracking-wider">
              <div className="sm:col-span-2 text-left">Constructor</div>
              <div className="sm:col-span-1 text-center">Technology</div>
              <div className="sm:col-span-1 text-center">DARPA QBI</div>
              <div className="sm:col-span-1 text-center">QTUM %</div>
            </div>
          </div>

          <div className="space-y-3">
            {topCompanies.map(company => (
              <CompanyCard key={company.rank} company={company} onTrappedIonClick={() => onNavigate('trappedIon')} showStock={false} showAchievement={false} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate('fullLeaderboard')}
              className="bg-zinc-700 hover:bg-zinc-600 text-cyan-400 font-bold py-2 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto"
            >
              View Full Leaderboard &rarr;
            </button>
          </div>
        </main>
        
        <div className="flex items-center justify-center my-8 gap-x-2 text-sm text-zinc-400">
          <SnowflakeIcon className="w-4 h-4 text-sky-400" />
          <span>Indicates technologies that require extreme cryogenic cooling.</span>
        </div>

        <KeyAchievements />

        <section className="my-12">
            <div className="bg-gradient-to-r from-zinc-800 via-zinc-800/80 to-zinc-800 p-6 rounded-lg border border-zinc-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                    <h2 className="text-xl font-bold text-white">New to Quantum?</h2>
                    <p className="text-zinc-400 mt-1">Grasp the basics with our simple tennis analogy.</p>
                </div>
                <button 
                    onClick={() => onNavigate('quantumConcepts')}
                    className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 whitespace-nowrap"
                >
                    Learn the Concepts
                </button>
            </div>
        </section>

        <SummarizedTechnologyGroups 
          onViewDetailsClick={() => onNavigate('technologyDetails')} 
          onTrappedIonClick={() => onNavigate('trappedIon')} 
        />

        <DarpaQbiExplanation />

        <footer className="text-center mt-12 text-zinc-500 text-sm">
          <p>&copy; 2025 Quantum Race Leaderboard. Data is illustrative.</p>
        </footer>
      </div>
    </div>
  );
};

export default LeaderboardPage;
