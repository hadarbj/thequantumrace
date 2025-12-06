import { Company, Technology, TechnologyGroup } from './types';

export const TECHNOLOGY_EXPLANATIONS_GROUPED: TechnologyGroup[] = [
  {
    groupName: 'Solid-State Qubits',
    technologies: [
      {
        name: 'Superconducting',
        description: 'Uses circuits of superconducting materials cooled to near-absolute zero to create qubits. This is a leading approach known for fast gate operations but is sensitive to environmental noise.',
        requiresCooling: true,
      },
      {
        name: 'Topological',
        description: 'A theoretical approach that encodes quantum information in the properties of quasiparticles. It promises to be inherently robust against errors but is extremely challenging to realize experimentally.',
        requiresCooling: true,
      },
      {
        name: 'Silicon Spin Qubits',
        description: 'Encodes quantum information in the spin of an electron confined in a silicon-based structure, similar to a traditional transistor. This approach leverages the mature semiconductor manufacturing industry for scalability.',
        requiresCooling: true,
      }
    ]
  },
  {
    groupName: 'Atomic & Ion Systems',
    technologies: [
      {
        name: 'Trapped Ion',
        description: 'Relies on individual charged atoms (ions) held in place by electromagnetic fields. These qubits are very stable and have high fidelity, but gate operations are typically slower than superconducting qubits.',
        requiresCooling: false, // Traps require cooling, but not the same cryogenics as superconductors typically. User can adjust if needed.
      },
      {
        name: 'Neutral Atom',
        description: 'Utilizes individual, uncharged atoms held by lasers as qubits. This approach allows for large numbers of qubits and strong interactions, making it a highly scalable and promising platform.',
        requiresCooling: false, // Requires vacuum and laser cooling, but not typically cryogenic in the same sense.
      },
    ]
  },
  {
    groupName: 'Light-Based',
    technologies: [
      {
        name: 'Photonic',
        description: 'Uses individual particles of light (photons) as qubits. These qubits can operate at room temperature and are ideal for networking, but creating reliable two-qubit gates is difficult.',
        requiresCooling: false,
      },
    ]
  },
  {
    groupName: 'Specialized Computing Model',
    technologies: [
      {
        name: 'Quantum Annealing',
        description: 'A specialized type of quantum computing designed specifically for optimization problems. Instead of using logic gates, it finds the lowest energy state of a system, which corresponds to the optimal solution.',
        requiresCooling: true,
      },
    ]
  }
];

export const TECHNOLOGY_EXPLANATIONS: Technology[] = TECHNOLOGY_EXPLANATIONS_GROUPED.flatMap(group => group.technologies);


export const COMPANIES_DATA: Company[] = [
  {
    rank: 1,
    name: 'Quantinuum',
    country: '🇬🇧',
    technology: 'Trapped Ion',
    qbiStage: 'Stage B',
    ticker: 'HON',
    exchange: 'NASDAQ',
    qtumPercentage: 1.5,
    processor: "96 Qubits (Helios)",
    description: 'Produced 96 fully error-corrected Logical Qubits at an extremely efficient 2:1 encoding rate',
    color: 'orange-500'
  },
  {
    rank: 2,
    name: 'Google\nQuantum AI',
    country: '🇺🇸',
    technology: 'Superconducting',
    qbiStage: 'Stage A',
    ticker: 'GOOGL',
    exchange: 'NASDAQ',
    qtumPercentage: 1.8,
    processor: '105 Qubits (Willow)',
    description: 'Exponential Error Suppression',
    color: 'amber-400'
  },
  {
    rank: 3,
    name: 'IBM Quantum',
    country: '🇺🇸',
    technology: 'Superconducting',
    qbiStage: 'Stage B',
    ticker: 'IBM',
    exchange: 'NYSE',
    qtumPercentage: 2.1,
    processor: '120 Qubits (Nighthawk)',
    description: 'High-coherence processor for early error mitigation',
    color: 'slate-400'
  },
  {
    rank: 4,
    name: 'IonQ',
    country: '🇺🇸',
    technology: 'Trapped Ion',
    qbiStage: 'Stage B',
    ticker: 'IONQ',
    exchange: 'NYSE',
    qtumPercentage: 7.2,
    processor: '36 Algorithmic Qubits (Forte)',
    description: 'High-Fidelity Trapped-Ion Systems',
    color: 'purple-500'
  },
  {
    rank: 5,
    name: 'Microsoft Quantum',
    country: '🇺🇸',
    technology: 'Topological',
    qbiStage: 'Stage C',
    ticker: 'MSFT',
    exchange: 'NASDAQ',
    qtumPercentage: 1.9,
    processor: 'Topological Qubits (In Dev)',
    description: 'Developing fault-tolerant topological qubits',
    color: 'blue-500'
  },
  {
    rank: 6,
    name: 'Xanadu',
    country: '🇨🇦',
    technology: 'Photonic',
    qbiStage: 'Stage B',
    ticker: null,
    exchange: 'Private',
    qtumPercentage: null,
    processor: 'Borealis QPU',
    description: 'Achieved quantum computational advantage',
    color: 'teal-400',
  },
  {
    rank: 7,
    name: 'PsiQuantum',
    country: '🇺🇸',
    technology: 'Photonic',
    qbiStage: 'Stage C',
    ticker: null,
    exchange: 'Private',
    qtumPercentage: null,
    processor: 'Target: 1M Qubits',
    description: 'Fault-Tolerant Photonic Architecture',
    color: 'rose-500'
  },
  {
    rank: 8,
    name: 'Atom Computing',
    country: '🇺🇸',
    technology: 'Neutral Atom',
    qbiStage: 'Stage B',
    ticker: null,
    exchange: 'Private',
    qtumPercentage: null,
    processor: '1225 Qubits (Phoenix)',
    description: 'Leading neutral-atom quantum systems',
    color: 'indigo-500'
  },
  {
    rank: 9,
    name: 'Rigetti Computing',
    country: '🇺🇸',
    technology: 'Superconducting',
    qbiStage: 'Stage A',
    ticker: 'RGTI',
    exchange: 'NASDAQ',
    qtumPercentage: 6.5,
    processor: '84 Qubits (Ankaa-2)',
    description: 'Hybrid Quantum/Classical Approach',
    color: 'emerald-400'
  },
  {
    rank: 10,
    name: 'D-Wave Systems',
    country: '🇨🇦',
    technology: 'Quantum Annealing',
    qbiStage: '-',
    ticker: 'QBTS',
    exchange: 'NYSE',
    qtumPercentage: 5.8,
    processor: '5000+ Qubits',
    description: 'Commercial Quantum Annealing Systems',
    color: 'sky-400'
  },
  {
    rank: 11,
    name: 'Diraq',
    country: '🇦🇺',
    technology: 'Silicon Spin Qubits',
    qbiStage: 'Stage B',
    ticker: null,
    exchange: 'Private',
    qtumPercentage: null,
    processor: 'CMOS-based Qubits',
    description: 'High-fidelity spin qubits in silicon',
    color: 'lime-500',
  },
  {
    rank: 12,
    name: 'Origin Quantum',
    country: '🇨🇳',
    technology: 'Superconducting',
    qbiStage: '-',
    ticker: null,
    exchange: 'Private',
    qtumPercentage: null,
    processor: 'Wukong Processor',
    description: "China's first practical quantum computer",
    color: 'pink-500',
  }
];

export const DARPA_QBI_EXPLANATIONS = {
  title: 'About DARPA QBI Stages',
  description: 'The DARPA Quantum Benchmarking Initiative (QBI) provides a framework for evaluating the performance of quantum computers on real-world problems.',
  stages: [
    {
      name: 'Stage A',
      subtitle: 'Concept',
      color: 'text-cyan-400',
      description: 'Define a plausible technical concept for a utility-scale quantum computer.',
    },
    {
      name: 'Stage B',
      subtitle: 'R&D Plan',
      color: 'text-yellow-400',
      description: 'Develop a detailed research and development roadmap.',
    },
    {
      name: 'Stage C',
      subtitle: 'Verification',
      color: 'text-green-400',
      description: 'Independent government verification and validation of the constructed hardware.',
    }
  ]
};

export const KEY_ACHIEVEMENT_HIGHLIGHTS_DATA = [
  {
    rank: 1,
    name: 'Quantinuum',
    processor: "High-Fidelity Logical Qubits (Helios)",
    description: "Successfully demonstrated 48 fully error-corrected logical qubits at a highly efficient 2:1 encoding rate, leading the industry in qubit quality and reliability.",
    color: 'orange-500'
  },
  {
    rank: 2,
    name: 'Google Quantum AI',
    processor: "Exponential Error Suppression (Willow)",
    description: "Provided the first experimental proof that increasing the size of a surface code qubit exponentially reduces the error rate as predicted by theory.",
    color: 'amber-400'
  },
  {
    rank: 3,
    name: 'IBM Quantum',
    processor: "Hardware Scaling and QEC Architecture",
    description: "Launching advanced processors like Nighthawk (high utility) and Loon (fault-tolerant blueprint), alongside the demonstration of ultra-low latency real-time error decoding.",
    color: 'slate-400'
  }
];