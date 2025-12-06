import React from 'react';
import { DARPA_QBI_EXPLANATIONS } from '../constants';

export const DarpaQbiExplanation: React.FC = () => {
  const { title, description, stages } = DARPA_QBI_EXPLANATIONS;

  return (
    <section className="mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-zinc-300">
        {title}
      </h2>
      <p className="text-zinc-400 max-w-3xl mx-auto text-center mb-6">
        {description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {stages.map(stage => (
          <div key={stage.name} className="p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-lg">
            <h3 className={`font-bold text-lg ${stage.color} mb-1`}>{stage.name}</h3>
            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-2">{stage.subtitle}</p>
            <p className="text-sm text-zinc-400">{stage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};