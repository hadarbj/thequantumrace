
import React, { useState } from 'react';
import LeaderboardPage from './pages/LeaderboardPage';
import TrappedIonPage from './pages/TrappedIonPage';
import QuantumConceptsPage from './pages/QuantumConceptsPage';
import FullLeaderboardPage from './pages/FullLeaderboardPage';
import TechnologyDetailsPage from './pages/TechnologyDetailsPage';

type Page = 'leaderboard' | 'trappedIon' | 'quantumConcepts' | 'fullLeaderboard' | 'technologyDetails';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('leaderboard');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 font-sans">
      {currentPage === 'leaderboard' && (
        <LeaderboardPage onNavigate={navigateTo} />
      )}
      {currentPage === 'trappedIon' && (
        <TrappedIonPage onNavigate={navigateTo} />
      )}
      {currentPage === 'quantumConcepts' && (
        <QuantumConceptsPage onNavigate={navigateTo} />
      )}
      {currentPage === 'fullLeaderboard' && (
        <FullLeaderboardPage onNavigate={navigateTo} />
      )}
      {currentPage === 'technologyDetails' && (
        <TechnologyDetailsPage onNavigate={navigateTo} />
      )}
    </div>
  );
}

export default App;