
import React from 'react';
import type { Company } from '../types';
import { QuantumIcon } from './QuantumIcon';
import { SnowflakeIcon } from './SnowflakeIcon';
import { TECHNOLOGY_EXPLANATIONS } from '../constants';

interface CompanyCardProps {
  company: Company;
  onTrappedIonClick: () => void;
  showAchievement?: boolean;
  showStock?: boolean;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company, onTrappedIonClick, showAchievement = false, showStock = true }) => {
  const borderClass = `border-l-${company.color}`;
  const iconColorClass = `text-${company.color}`;

  const getQbiStageColor = (stage: string) => {
    if (stage === 'Stage A') return 'text-cyan-400';
    if (stage === 'Stage B') return 'text-yellow-400';
    if (stage === 'Stage C') return 'text-green-400';
    if (stage === '-') return 'text-zinc-500';
    return 'text-white';
  };
  const qbiColorClass = getQbiStageColor(company.qbiStage);

  const techInfo = TECHNOLOGY_EXPLANATIONS.find(t => t.name === company.technology);

  const handleTechnologyClick = () => {
    if (company.technology === 'Trapped Ion') {
      onTrappedIonClick();
    }
  };

  // Calculate grid columns dynamically
  // Base columns: Constructor (2), Tech (1), QBI (1), QTUM % (1) = 5
  let numCols = 5;
  if (showStock) numCols++;
  if (showAchievement) numCols++;
  const gridClass = `sm:grid-cols-${numCols}`;


  return (
    <div className={`bg-zinc-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg flex items-center space-x-4 border-l-4 ${borderClass} hover:bg-zinc-700/70 transition-all duration-300 shadow-lg hover:shadow-xl`}>
      <div className="text-2xl sm:text-3xl font-bold text-zinc-500 w-8 text-center">{company.rank}</div>
      <div className="flex-shrink-0">
        <QuantumIcon colorClass={iconColorClass} />
      </div>
      <div className={`flex-1 grid grid-cols-1 ${gridClass} gap-2 sm:gap-4 items-center`}>
        <div className="sm:col-span-2"><p className="font-bold text-base sm:text-lg text-white whitespace-pre-line">{company.name}{'\u00A0'}<span className="text-sm">{company.country}</span></p></div>
        <div className="sm:col-span-1 text-left sm:text-center flex items-center justify-start sm:justify-center gap-x-1.5">
          {company.technology === 'Trapped Ion' ? (
            <button onClick={handleTechnologyClick} className="font-semibold text-sm sm:text-base text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-200">
              {company.technology}
            </button>
          ) : (
            <p className="font-semibold text-sm sm:text-base text-white">{company.technology}</p>
          )}
          {techInfo?.requiresCooling && (
            <div title="Requires extreme cooling">
              <SnowflakeIcon className="w-4 h-4 text-sky-400" />
            </div>
          )}
        </div>
        <div className="sm:col-span-1 text-left sm:text-center">
            <p className={`font-semibold text-sm sm:text-base ${qbiColorClass}`}>{company.qbiStage}</p>
        </div>
        {showStock && (
            <div className="sm:col-span-1 text-left sm:text-center">
            {company.ticker ? (
                <div>
                <span className="font-mono text-base sm:text-lg bg-zinc-700 text-cyan-400 px-2 py-1 rounded">{company.ticker}</span>
                <p className="text-xs text-zinc-500 mt-1">{company.exchange}</p>
                </div>
            ) : (
                <span className="text-xs sm:text-sm text-zinc-500">{company.exchange}</span>
            )}
            </div>
        )}
        <div className="sm:col-span-1 text-left sm:text-center">
          {company.qtumPercentage !== null ? (
            <p className="font-mono text-sm sm:text-base text-white">{company.qtumPercentage}% <span className="text-xs text-zinc-500">QTUM</span></p>
          ) : (
            <span className="text-xs sm:text-sm text-zinc-500">-</span>
          )}
        </div>
        {showAchievement && (
            <div className="sm:col-span-1 text-left sm:text-right">
              <p className="font-mono text-sm sm:text-base text-cyan-300">{company.processor}</p>
              <p className="text-xs text-zinc-500">{company.description}</p>
            </div>
        )}
      </div>
    </div>
  );
};
