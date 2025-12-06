import React from 'react';
import { TECHNOLOGY_EXPLANATIONS_GROUPED } from '../constants';
import { SnowflakeIcon } from './SnowflakeIcon';

interface TechnologyExplanationsProps {
    onTrappedIonClick: () => void;
}

export const TechnologyExplanations: React.FC<TechnologyExplanationsProps> = ({ onTrappedIonClick }) => {
  return (
    <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-zinc-300">Technology Groups</h2>
        <div className="space-y-8">
            {TECHNOLOGY_EXPLANATIONS_GROUPED.map((group) => (
                <div key={group.groupName}>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-400 mb-4 border-b-2 border-zinc-700 pb-2">{group.groupName}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {group.technologies.map((tech) => (
                            <div key={tech.name} className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/50">
                                <div className="flex items-center mb-2">
                                    {tech.name === 'Trapped Ion' ? (
                                        <button onClick={onTrappedIonClick} className="font-bold text-lg text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-200">
                                            {tech.name}
                                        </button>
                                    ) : (
                                        <h4 className="font-bold text-lg text-cyan-400">{tech.name}</h4>
                                    )}
                                    {tech.requiresCooling && (
                                        <div title="Requires extreme cooling">
                                            <SnowflakeIcon className="w-5 h-5 ml-2 text-sky-400 shrink-0" />
                                        </div>
                                    )}
                                </div>
                                <p className="text-sm text-zinc-400">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};