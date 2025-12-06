import React from 'react';
import { KEY_ACHIEVEMENT_HIGHLIGHTS_DATA } from '../constants';

export const KeyAchievements: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-zinc-300">
        Key Achievement Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {KEY_ACHIEVEMENT_HIGHLIGHTS_DATA.map(company => (
          <div key={company.rank} className="p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-lg">
            <h3 className={`font-bold text-lg text-${company.color} mb-1`}>{`#${company.rank} ${company.name}`}</h3>
            <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-2">{company.processor}</p>
            <p className="text-sm text-zinc-400">{company.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
