
import React from 'react';
import { MATCH_DATE_TIME, STANDINGS_DATA } from './constants';
import Countdown from './components/Countdown';
import StandingsTable from './components/StandingsTable';
import GeminiAssistant from './components/GeminiAssistant';

const Header: React.FC = () => (
  <div className="mb-8">
    <h1 className="text-4xl font-black text-white uppercase tracking-wider">Eerstvolgende Wedstrijd</h1>
    <p className="text-blue-400 font-bold text-lg mt-1">Colts Shield Poule B</p>
  </div>
);

const Matchup: React.FC = () => (
  <div className="flex justify-around items-center mb-8">
    <div className="w-2/5 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">Wolfpack</h2>
    </div>
    <span className="text-3xl sm:text-5xl font-bold text-slate-500">VS</span>
    <div className="w-2/5 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">CL The Blue Lions CO 2</h2>
    </div>
  </div>
);

const MatchInfo: React.FC = () => (
  <div className="py-6 my-6 border-y border-slate-700">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div>
        <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Datum & Tijd</p>
        <p id="match-date" className="font-bold text-white text-xl mt-1">Zat 1 Nov, 13:00</p>
      </div>
      <div>
        <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Aanwezig</p>
        <p className="font-bold text-white text-xl mt-1">12:00</p>
      </div>
      <a href="https://www.google.com/maps/search/?api=1&query=Sportpark%20Groenoord%20Schagen" target="_blank" rel="noopener noreferrer" className="rounded-lg transition-colors duration-300 hover:bg-slate-700/75 py-2">
        <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Locatie</p>
        <p className="font-bold text-white text-xl mt-1">Sportpark Groenoord</p>
      </a>
    </div>
  </div>
);

const NextMatchInfo: React.FC = () => (
  <div className="mt-8 pt-6 border-t border-slate-700 text-center">
    <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">
      Volgende Wedstrijd Na Deze
    </p>
    <p className="font-bold text-white text-lg mt-1">
      Zaterdag 8 november 2025 om 13:00
    </p>
    <p className="text-slate-300 text-base mt-1">
      vs CL R.P.M. CO 1
    </p>
    <p className="text-slate-300 text-base">
      @ Sportpark de Eendracht
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-900 bg-no-repeat bg-cover" style={{ backgroundImage: 'radial-gradient(circle at top, #1e293b, #0f172a)' }}>
      <div className="relative w-full max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-10 text-center border border-slate-700">
        <p className="absolute top-4 right-4 text-xs text-slate-500">Update: 21/10/25 13:17</p>
        
        <Header />
        <Matchup />
        <MatchInfo />
        
        <Countdown targetDate={MATCH_DATE_TIME} />

        <div className="mt-8 pt-6 border-t border-slate-700">
          <h3 className="text-lg font-bold text-blue-400 uppercase tracking-wider mb-4">Stand Competitie</h3>
          <StandingsTable standings={STANDINGS_DATA} highlightTeam="CL Den Helder/Rush CO 1" />
        </div>
        
        <GeminiAssistant />

        <NextMatchInfo />
      </div>
    </div>
  );
};

export default App;
