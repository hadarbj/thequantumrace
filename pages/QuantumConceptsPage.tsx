import React, { useState, useEffect } from 'react';

interface QuantumConceptsPageProps {
  onNavigate: (page: 'leaderboard') => void;
}

const ClassicalBitAnimation: React.FC = () => {
    const [isIn, setIsIn] = useState(true);

    const toggleState = () => {
        setIsIn(prevState => !prevState);
    };

    const ballX = isIn ? 140 : 200;
    const labelText = isIn ? 'IN (1)' : 'OUT (0)';

    return (
        <div className="w-full max-w-xs mx-auto flex flex-col items-center gap-4">
            <svg viewBox="0 0 200 100" className="w-full bg-zinc-700/50 rounded-lg border border-zinc-600">
                {/* Court */}
                <rect x="10" y="20" width="180" height="60" fill="#1e3a8a" />
                <rect x="10" y="20" width="180" height="60" stroke="#f4f4f5" strokeWidth="1" fill="none" />
                <line x1="60" y1="20" x2="60" y2="80" stroke="#f4f4f5" strokeWidth="1" />
                <line x1="140" y1="20" x2="140" y2="80" stroke="#f4f4f5" strokeWidth="1" />
                <line x1="60" y1="50" x2="140" y2="50" stroke="#f4f4f5" strokeWidth="1" />
                <rect x="99" y="15" width="2" height="70" fill="#18181b" />

                {/* Ball */}
                <circle cx={ballX} cy={50} r="5" fill="#a3e635" className="transition-all duration-300 ease-in-out" />

                {/* State Label */}
                <text x={ballX} y="15" fontFamily="sans-serif" fontSize="10" fill="#f4f4f5" textAnchor="middle">
                    {labelText}
                </text>
            </svg>
            <button 
                onClick={toggleState}
                className="bg-lime-600 hover:bg-lime-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 w-40 text-center"
            >
                Toggle State
            </button>
        </div>
    );
};


const SuperpositionAnimation: React.FC = () => {
  const [isServing, setIsServing] = useState(false);
  const [hasLanded, setHasLanded] = useState(false);
  const [isOut, setIsOut] = useState(false);

  const ghostPositions = [
    { x: 115, y: 35 }, { x: 130, y: 65 }, { x: 155, y: 28 },
    { x: 170, y: 50 }, { x: 125, y: 50 }, { x: 180, y: 70 },
    { x: 105, y: 60 }, { x: 145, y: 40 },
  ];

  const handleServe = () => {
    if (isServing) return;
    setHasLanded(false);
    setIsServing(true);

    setTimeout(() => {
      setIsServing(false);
      setHasLanded(true);
      setIsOut(Math.random() > 0.5);
    }, 2000); // 2 seconds for the animation
  };

  useEffect(() => {
    // Initial serve on component mount for demonstration
    handleServe();
  }, []);

  return (
    <div className="w-full max-w-xs mx-auto flex flex-col items-center gap-4">
        <svg viewBox="0 0 200 100" className="w-full bg-zinc-700/50 rounded-lg border border-zinc-600">
            {/* Court */}
            <rect x="10" y="20" width="180" height="60" fill="#1e3a8a" />
            <rect x="10" y="20" width="180" height="60" stroke="#f4f4f5" strokeWidth="1" fill="none" />
            
            {/* Service Lines */}
            <line x1="60" y1="20" x2="60" y2="80" stroke="#f4f4f5" strokeWidth="1" />
            <line x1="140" y1="20" x2="140" y2="80" stroke="#f4f4f5" strokeWidth="1" />
            
            {/* Center Service Line */}
            <line x1="60" y1="50" x2="140" y2="50" stroke="#f4f4f5" strokeWidth="1" />
            
            {/* Net */}
            <rect x="99" y="15" width="2" height="70" fill="#18181b" />

            {/* Static Player */}
            <g transform="translate(40, 65)">
                <circle cx="0" cy="-5" r="4" fill="#f4f4f5" />
                <rect x="-5" y="0" width="10" height="12" rx="2" fill="#f4f4f5" />
            </g>

            {/* Final landed positions */}
            {hasLanded && (
                 <>
                    <circle cx={isOut ? "170" : "140"} cy="50" r="5" fill="#a3e635" className="animate-pulse" />
                    <text x={isOut ? 170 : 140} y="15" fontFamily="sans-serif" fontSize="10" fill="#f4f4f5" textAnchor="middle">
                        {isOut ? 'OUT (0)' : 'IN (1)'}
                    </text>
                 </>
            )}
           
            {/* Ball in superposition (blur/ghosts) */}
            {isServing && (
                <>
                    {ghostPositions.map((pos, i) => (
                        <circle key={i} cx={pos.x} cy={pos.y} r="5" fill="#a3e635" opacity="0.25" filter="url(#glow-lime)" />
                    ))}
                    <text x="152.5" y="15" fontFamily="sans-serif" fontSize="10" fill="#f4f4f5" textAnchor="middle" className="animate-pulse">
                        Spin Probability...
                    </text>
                </>
            )}

            {/* Animated Ball */}
            <g className={isServing ? 'ball-serving' : 'opacity-0'}>
                <circle className="shadow" cx="40" cy="75" r="4" fill="black" opacity="0.5" />
                <circle className="ball" cx="40" cy="50" r="5" fill="#a3e635" />
            </g>

            <defs>
                <filter id="glow-lime">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>

        <button 
            onClick={handleServe}
            disabled={isServing}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 disabled:bg-zinc-600 disabled:cursor-not-allowed w-40 text-center"
        >
            {isServing ? 'Serving...' : 'Serve Again'}
        </button>
    </div>
  );
};

const EntanglementAnimation: React.FC = () => {
  const [isServing, setIsServing] = useState(false);
  const [hasLanded, setHasLanded] = useState(false);
  const [areIn, setAreIn] = useState(false);

  const handleServe = () => {
    if (isServing) return;
    setHasLanded(false);
    setIsServing(true);

    setTimeout(() => {
      setIsServing(false);
      setHasLanded(true);
      setAreIn(Math.random() > 0.5);
    }, 2000); // 2 seconds for the animation
  };

  useEffect(() => {
    handleServe();
  }, []);

  // Positions for IN/OUT
  const finalInX = 140;
  const finalOutX = 170;
  const finalX = areIn ? finalInX : finalOutX;
  const outcomeText = areIn ? 'BOTH IN (1,1)' : 'BOTH OUT (0,0)';

  return (
    <div className="w-full max-w-xs mx-auto flex flex-col items-center gap-4">
        <svg viewBox="0 0 200 100" className="w-full bg-zinc-700/50 rounded-lg border border-zinc-600">
            {/* Court */}
            <rect x="10" y="20" width="180" height="60" fill="#1e3a8a" />
            <rect x="10" y="20" width="180" height="60" stroke="#f4f4f5" strokeWidth="1" fill="none" />
            <line x1="60" y1="20" x2="60" y2="80" stroke="#f4f4f5" strokeWidth="1" />
            <line x1="140" y1="20" x2="140" y2="80" stroke="#f4f4f5" strokeWidth="1" />
            <line x1="60" y1="50" x2="140" y2="50" stroke="#f4f4f5" strokeWidth="1" />
            <rect x="99" y="15" width="2" height="70" fill="#18181b" />

            {/* Static Players */}
            <g transform="translate(40, 35)">
                <circle cx="0" cy="-5" r="4" fill="#f4f4f5" />
                <rect x="-5" y="0" width="10" height="12" rx="2" fill="#f4f4f5" />
            </g>
            <g transform="translate(40, 65)">
                <circle cx="0" cy="-5" r="4" fill="#f4f4f5" />
                <rect x="-5" y="0" width="10" height="12" rx="2" fill="#f4f4f5" />
            </g>

            {/* Final landed positions */}
            {hasLanded && (
                 <>
                    <circle cx={finalX} cy="40" r="5" fill="#a3e635" className="animate-pulse" />
                    <circle cx={finalX} cy="60" r="5" fill="#c084fc" className="animate-pulse" />
                    <text x={152.5} y="15" fontFamily="sans-serif" fontSize="10" fill="#f4f4f5" textAnchor="middle">
                        {outcomeText}
                    </text>
                 </>
            )}
           
            {/* Balls in superposition (blur/ghosts) */}
            {isServing && (
                <>
                    {/* IN Ghosts */}
                    <circle cx={finalInX} cy="40" r="5" fill="#a3e635" opacity="0.3" filter="url(#glow-lime)" />
                    <circle cx={finalInX} cy="60" r="5" fill="#c084fc" opacity="0.3" filter="url(#glow-lime)" />
                    {/* OUT Ghosts */}
                    <circle cx={finalOutX} cy="40" r="5" fill="#a3e635" opacity="0.3" filter="url(#glow-lime)" />
                    <circle cx={finalOutX} cy="60" r="5" fill="#c084fc" opacity="0.3" filter="url(#glow-lime)" />

                    <text x="152.5" y="15" fontFamily="sans-serif" fontSize="10" fill="#f4f4f5" textAnchor="middle" className="animate-pulse">
                        Linked Fates...
                    </text>
                </>
            )}

            {/* Animated Balls */}
            <g className={isServing ? 'ball-serving' : 'opacity-0'}>
                <circle className="shadow" cx="40" cy="65" r="4" fill="black" opacity="0.5" />
                <circle className="ball" cx="40" cy="40" r="5" fill="#a3e635" />
            </g>
            <g className={isServing ? 'ball-serving' : 'opacity-0'}>
                <circle className="shadow" cx="40" cy="85" r="4" fill="black" opacity="0.5" />
                <circle className="ball" cx="40" cy="60" r="5" fill="#c084fc" />
            </g>
            
            <defs>
                <filter id="glow-lime">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>

        <button 
            onClick={handleServe}
            disabled={isServing}
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 disabled:bg-zinc-600 disabled:cursor-not-allowed w-40 text-center"
        >
            {isServing ? 'Serving...' : 'Serve Again'}
        </button>
    </div>
  );
};


const QuantumConceptsPage: React.FC<QuantumConceptsPageProps> = ({ onNavigate }) => {
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
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-amber-400">
            Quantum Concepts
          </h1>
          <p className="text-lg text-zinc-400 mt-2">An analogy for the Tennis enthusiast.</p>
        </header>

        <main className="space-y-8">

          {/* Classical Bit */}
          <section className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-7/12">
                    <h2 className="text-2xl font-bold text-lime-400 mb-3">The Classical Bit: In or Out</h2>
                    <p className="text-zinc-300 leading-relaxed">
                    <strong className="text-zinc-100">Analogy:</strong> A tennis ball on the court either bounced in or out. This is like a classical computer bit, which is always either a 0 or a 1.
                    </p>
                    <p className="text-zinc-300 leading-relaxed mt-4">
                        <strong className="text-zinc-100">Classical State:</strong> Notice how the ball is always in one distinct state or the other. There is no uncertainty. Click the button to toggle between the two definite states: <strong className="text-lime-300">IN (1)</strong> and <strong className="text-lime-300">OUT (0)</strong>.
                    </p>
                </div>
                <div className="w-full md:w-5/12 flex-shrink-0">
                   <ClassicalBitAnimation />
                </div>
            </div>
          </section>

          {/* Qubit & Superposition */}
          <section className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-7/12">
                    <h2 className="text-2xl font-bold text-cyan-400 mb-3">The Qubit: A Spinning Serve</h2>
                    <p className="text-zinc-300 leading-relaxed mb-4">
                    <strong className="text-zinc-100">Analogy:</strong> Imagine you serve a tennis ball with an insane amount of spin. While it's flying over the net, it's a blur of possibilities. It has a *chance* of landing on your opponent's side, and a chance of being a fault. This spinning, uncertain state is like a qubit.
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                    <strong className="text-zinc-100">Quantum Superposition:</strong> Only when the ball *lands* (is "measured") does it pick a definite state—in or out. Before it lands, it exists in a <strong className="text-cyan-300">superposition</strong> of many possibilities. This allows quantum computers to explore many outcomes at once.
                    </p>
                </div>
                <div className="w-full md:w-5/12 flex-shrink-0">
                    <SuperpositionAnimation />
                </div>
            </div>
          </section>

          {/* Entanglement */}
          <section className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
             <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-7/12">
                    <h2 className="text-2xl font-bold text-purple-400 mb-3">Entanglement: The "Spooky" Doubles Team</h2>
                    <p className="text-zinc-300 leading-relaxed">
                        <strong className="text-zinc-100">Analogy:</strong> Imagine you and your doubles partner serve two "entangled" tennis balls at the same time. While they fly, they are a blur of possibilities. But when they land, their fates are perfectly linked. If one lands IN, its partner also lands IN. If one is OUT, the other is OUT, every single time.
                    </p>
                     <p className="text-zinc-300 leading-relaxed mt-4">
                        <strong className="text-zinc-100">Quantum Entanglement:</strong> This is a deep connection between two qubits. Measuring one qubit instantly influences the other, no matter the distance. This powerful property allows for complex quantum algorithms and secure communication.
                    </p>
                </div>
                <div className="w-full md:w-5/12 flex-shrink-0">
                    <EntanglementAnimation />
                </div>
            </div>
          </section>

        </main>
        
        <footer className="text-center mt-12">
            <button 
                onClick={() => onNavigate('leaderboard')} 
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
                Return to the Race
            </button>
        </footer>
      </div>
    </div>
  );
};

export default QuantumConceptsPage;