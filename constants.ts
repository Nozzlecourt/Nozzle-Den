
import { Standing } from './types';

export const MATCH_DATE_TIME = new Date("November 1, 2025 13:00:00").getTime();

export const STANDINGS_DATA: Standing[] = [
  { rank: 1, team: "CL Westrand CO 2", played: 3, points: 14, diff: 170, diffSign: 'positive' },
  { rank: 2, team: "CL S.E.S. CO 2", played: 2, points: 10, diff: 69, diffSign: 'positive' },
  { rank: 3, team: "CL R.P.M. CO 1", played: 2, points: 5, diff: -38, diffSign: 'negative' },
  { rank: 4, team: "CL Den Helder/Rush CO 1", played: 2, points: 0, diff: -55, diffSign: 'negative' },
  { rank: 5, team: "CL The Blue Lions CO 2", played: 3, points: 0, diff: -146, diffSign: 'negative' },
];

export const GEMINI_PROMPT = `Je bent een deskundige rugby-analist. Geef een korte, boeiende voorbeschouwing voor de aankomende wedstrijd tussen the Wolfpack (CL Den Helder/Rush CO 1) en CL The Blue Lions CO 2 in de Colts Shield Poule B. Baseer je analyse op de volgende standen: The Wolfpack staat 4e met 0 punten en een doelsaldo van -55 na 2 wedstrijden. The Blue Lions staan 5e met 0 punten en een doelsaldo van -146 na 3 wedstrijden. Houd de toon optimistisch maar realistisch voor beide teams, en focus op de kansen die deze wedstrijd biedt voor het team dat zijn eerste punten wil pakken. Gebruik consistent de naam "the Wolfpack" voor het thuisteam. Formatteer je antwoord met markdown, gebruik ### voor titels en ** voor vetgedrukte tekst.`;
