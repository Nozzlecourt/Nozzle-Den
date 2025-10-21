
import React, { useState } from 'react';
import { generateMatchAnalysis } from '../services/geminiService';
import { GEMINI_PROMPT } from '../constants';

const Loader: React.FC = () => (
    <div className="flex justify-center items-center">
        <div className="border-4 border-slate-500 border-t-blue-500 rounded-full w-8 h-8 animate-spin"></div>
    </div>
);

const FormattedGeminiResponse: React.FC<{ text: string }> = ({ text }) => {
    const formattedHtml = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/### (.*?)(?:\n|<br \/>)/g, '<h3 class="text-lg font-bold mt-4 mb-2 text-blue-300">$1</h3>')
        .replace(/^- (.*?)(?:\n|<br \/>)/gm, '<li class="ml-4 list-disc list-inside">$1</li>')
        .replace(/\n/g, '<br />');

    return <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-strong:text-white" dangerouslySetInnerHTML={{ __html: formattedHtml }} />;
};

const GeminiAssistant: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateAnalysis = async () => {
    setIsLoading(true);
    setAnalysis(null);
    setError(null);

    const result = await generateMatchAnalysis(GEMINI_PROMPT);

    if (result.startsWith("Fout")) {
        setError(result);
    } else {
        setAnalysis(result);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="mt-8 pt-6 border-t border-slate-700">
      <h3 className="text-lg font-bold text-blue-400 uppercase tracking-wider mb-4">AI Wedstrijd Assistent</h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 max-w-sm mx-auto">
        <button 
          id="generate-analysis" 
          onClick={handleGenerateAnalysis}
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="mr-2">✨</span>
          {isLoading ? 'Analyse wordt gemaakt...' : 'Genereer Wedstrijdanalyse'}
        </button>
      </div>
      {(isLoading || analysis || error) && (
        <div id="gemini-output" className="mt-6 text-left bg-slate-900/50 p-6 rounded-lg border border-slate-700">
          {isLoading && <Loader />}
          {error && <p className="text-red-400">{error}</p>}
          {analysis && <FormattedGeminiResponse text={analysis} />}
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
