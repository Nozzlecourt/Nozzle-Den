
import React from 'react';
import { Standing } from '../types';

interface StandingsTableProps {
  standings: Standing[];
  highlightTeam: string;
}

const StandingsTable: React.FC<StandingsTableProps> = ({ standings, highlightTeam }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700">
      <table className="w-full text-sm text-left text-slate-300">
        <thead className="text-xs text-slate-400 uppercase bg-slate-700/50">
          <tr>
            <th scope="col" className="px-4 py-3">#</th>
            <th scope="col" className="px-4 py-3">Team</th>
            <th scope="col" className="px-4 py-3 text-center">Gesp.</th>
            <th scope="col" className="px-4 py-3 text-center">Pnt</th>
            <th scope="col" className="px-4 py-3 text-center">+/-</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((row, index) => {
            const isHighlighted = row.team === highlightTeam;
            const isLastRow = index === standings.length - 1;
            const diffColor = row.diffSign === 'positive' ? 'text-green-400' : 'text-red-400';
            const diffPrefix = row.diff > 0 ? '+' : '';
            
            return (
              <tr 
                key={row.rank} 
                className={`
                  ${isLastRow ? '' : 'border-b border-slate-700'}
                  ${isHighlighted ? 'bg-blue-500/10 ring-1 ring-inset ring-blue-500/20' : 'bg-slate-800/50'}
                `}
              >
                <td className="px-4 py-3 font-medium">{row.rank}</td>
                <td className={`px-4 py-3 font-semibold ${isHighlighted ? 'text-blue-300' : 'text-white'}`}>{row.team}</td>
                <td className="px-4 py-3 text-center">{row.played}</td>
                <td className="px-4 py-3 text-center">{row.points}</td>
                <td className={`px-4 py-3 text-center ${diffColor}`}>{diffPrefix}{row.diff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
