
import React from 'react';
import { TECHNOLOGY_EXPLANATIONS_GROUPED } from '../constants';
import { SnowflakeIcon } from './SnowflakeIcon';

interface SummarizedTechnologyGroupsProps {
    onViewDetailsClick: () => void;
    onTrappedIonClick: () => void;
}

export const SummarizedTechnologyGroups: React.FC<SummarizedTechnologyGroupsProps> = ({ onViewDetailsClick, onTrappedIonClick }) => {
  return (
    <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-zinc-300">Technology Groups</h2>
        <div className="space-y-6 bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
            {TECHNOLOGY_EXPLANATIONS_GROUPED.map((group) => (
                <div key={group.groupName}>
                    <h3 className="text-xl font-bold text-zinc-400 mb-3 border-b border-zinc-700 pb-2">{group.groupName}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {group.technologies.map((tech) => (
                            <div key={tech.name} className="flex items-center gap-x-2">
                                {tech.name === 'Trapped Ion' ? (
                                    <button onClick={onTrappedIonClick} className="text-cyan-400 hover:underline transition-colors duration-200">
                                        {tech.name}
                                    </button>
                                ) : (
                                    <span className="text-zinc-300">{tech.name}</span>
                                )}
                                {tech.requiresCooling && <SnowflakeIcon className="w-4 h-4 text-sky-400" />}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-8 text-center">
            <button
              onClick={onViewDetailsClick}
              className="bg-zinc-700 hover:bg-zinc-600 text-cyan-400 font-bold py-2 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto"
            >
              View Technology Details &rarr;
            </button>
        </div>
    </section>
  );
};
