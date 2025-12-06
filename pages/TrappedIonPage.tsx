import React from 'react';
import { IonTrapIllustration } from '../components/IonTrapIllustration';

interface TrappedIonPageProps {
  onNavigate: (page: 'leaderboard') => void;
}

const TrappedIonPage: React.FC<TrappedIonPageProps> = ({ onNavigate }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 md:mb-12">
          <button 
            onClick={() => onNavigate('leaderboard')} 
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-4"
          >
            &larr; Back to Leaderboard
          </button>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Trapped Ion Quantum Computing
          </h1>
          <p className="text-lg text-zinc-400 mt-2">A deep dive into one of the most promising quantum technologies.</p>
        </header>
        
        <IonTrapIllustration />
        
        <main className="space-y-8">
          <section className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">What is it?</h2>
            <p className="text-zinc-300 leading-relaxed">
              Trapped ion quantum computing is an approach that uses individual atoms with a net electric charge (ions) as qubits. These ions are suspended in a vacuum using electromagnetic fields, effectively creating a perfectly clean and stable environment. This isolation from external noise is what makes trapped ions some of the highest-quality qubits available today.
            </p>
          </section>

          <section className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">How does it work?</h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-zinc-100">1. Trapping:</strong> Ions, typically from elements like Ytterbium or Barium, are confined using a combination of static and oscillating electric fields in a device called an ion trap. This holds them in a precise, linear chain.
              </p>
              <p>
                <strong className="text-zinc-100">2. Qubit States:</strong> The qubit's '0' and '1' states are represented by two different stable or metastable electronic energy levels within each ion.
              </p>
              <p>
                <strong className="text-zinc-100">3. Manipulation & Gates:</strong> Precisely tuned lasers are aimed at individual ions. These lasers can manipulate the quantum state of a single ion (single-qubit gates) or entangle two or more ions by using their collective motion in the trap (multi-qubit gates).
              </p>
               <p>
                <strong className="text-zinc-100">4. Readout:</strong> To measure the result, another laser is used. If the ion is in one state (e.g., '1'), it will absorb and re-emit photons, appearing bright. If it's in the other state ('0'), it remains dark. A sensitive camera detects this difference to read the final state of each qubit.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
              <h2 className="text-2xl font-bold text-green-400 mb-3">Key Advantages</h2>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li><strong className="text-zinc-100">High Fidelity:</strong> Qubits are nearly identical and well-isolated, leading to very low error rates.</li>
                <li><strong className="text-zinc-100">Long Coherence Times:</strong> Qubits can maintain their quantum state for seconds or even minutes.</li>
                <li><strong className="text-zinc-100">Full Connectivity:</strong> Any qubit in the chain can be entangled with any other, a powerful feature for complex algorithms.</li>
              </ul>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
              <h2 className="text-2xl font-bold text-yellow-400 mb-3">Current Challenges</h2>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li><strong className="text-zinc-100">Gate Speed:</strong> Laser interactions are relatively slow compared to solid-state technologies like superconductors.</li>
                  <li><strong className="text-zinc-100">Scalability:</strong> While scaling is improving, managing the lasers and fields for very large chains of ions is a complex engineering challenge.</li>
                  <li><strong className="text-zinc-100">Environmental Control:</strong> Requires ultra-high vacuum and stable temperature, though not the extreme cryogenics of superconductors.</li>
              </ul>
            </div>
          </div>
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

export default TrappedIonPage;