import { useState } from 'react';

const GunslingerComponent: React.FC = () => {
  const [response, setResponse] = useState('');
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');

    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      await callOpenAIAPI();
    }

    async function callOpenAIAPI() {
      try {
        
        const res = await fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: "text-davinci-003",
            prompt,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
        });
        const json = await res.json();
        console.log(json);
        setResponse(json.choices[0].text);
      } catch (err: any) {
        setError(err.toString());
      }
    }
    
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={onSubmit}>
          <label>
            Gunslinger description:
            <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} />
          </label>
          <button className="center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" type="submit">Generate description</button>
        </form>
      </div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p>{response}</p>
        { error && <p>{error}</p> }
        </div>
    </div>
  );
};

export default GunslingerComponent;