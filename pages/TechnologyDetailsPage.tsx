
import React from 'react';
import { TechnologyExplanations } from '../components/TechnologyExplanations';

interface TechnologyDetailsPageProps {
  onNavigate: (page: 'leaderboard' | 'trappedIon') => void;
}

const TechnologyDetailsPage: React.FC<TechnologyDetailsPageProps> = ({ onNavigate }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 md:mb-12">
           <button 
            onClick={() => onNavigate('leaderboard')} 
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-4"
          >
            &larr; Back to Leaderboard
          </button>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Technology Details
          </h1>
          <p className="text-lg text-zinc-400 mt-2">A breakdown of the different approaches to building a quantum computer.</p>
        </header>

        <main>
          <TechnologyExplanations onTrappedIonClick={() => onNavigate('trappedIon')} />
        </main>
        
        <footer className="text-center mt-12">
            <button 
                onClick={() => onNavigate('leaderboard')} 
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
                Back to Leaderboard
            </button>
        </footer>
      </div>
    </div>
  );
};

export default TechnologyDetailsPage;
