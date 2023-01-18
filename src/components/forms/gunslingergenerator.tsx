import { useState } from 'react';
import TagPickerComponent from '../tagpicker';
import React from 'react';

const GunslingerComponent: React.FC = () => {
    const [response, setResponse] = useState('');
    const [prompt, setPrompt] = useState('');
    const [error, setError] = useState('');
    const [url, setUrl] = useState('');
    const [trait, setTrait] = useState<string[]>([]);
    const [imageDescription, setImageDescription] = useState('');

    const handleChange = (e: string[]) => {
        setTrait(e);
        promptTextWithAttributes();
        imageTextWithAttributes();
    };

    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await generateDescription();
    }

    function promptTextWithAttributes() {
        const metaText =
            'Create a imaginary name and background story of a western gunslinger with the following traits: ';
        setPrompt(metaText.concat(trait.join(' ')));
        console.log(prompt);
    }

    function imageTextWithAttributes() {
        const metaText = 'Western style drawn image of a gunslinger with the following traits: ';
        setImageDescription(metaText.concat(trait.join(' ')));
    }

    async function generateDescription() {
        const res = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt,
                temperature: 0.7,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            }),
        })
            .then((response) => response.json())
            .catch((error) => setError(error.toString()));
        setResponse(res.choices[0].text);
    }
    async function generateImage() {
        const res = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                prompt: imageDescription,
                size: '256x256',
                response_format: 'url',
                n: 1,
            }),
        })
            .then((response) => response.json())
            .catch((error) => setError(error.toString()));
        setUrl(res.data[0].url);
    }
    return (
        <div>
            <div className="justify-content flex bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex">
                    <TagPickerComponent handleChange={handleChange}></TagPickerComponent>
                </div>
                <form onSubmit={onSubmit}>
                    <button
                        className="center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Generate description
                    </button>
                </form>
                <div>
                    <button
                        onClick={generateImage}
                        className="center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Generate image
                    </button>
                    <img title="Your Gunslinger" src={url}></img>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <p>{response}</p>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default GunslingerComponent;
