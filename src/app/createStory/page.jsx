"use client";
import { useState } from 'react';
import storyGenerator from '../api/generate.jsx'

export default function CreateStory() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerateStory = async () => {
    // Check if topic and genre are provided
    if (!topic.trim()) {
      setError('Please provide a topic.');
      return;
    }
    if (!genre) {
      setError('Please select a genre.');
      return;
    }
  
    try {
      const generatedResponse = await storyGenerator(topic, genre);
      if (!generatedResponse) {
        setError('Failed to generate response.');
        return;
      }
  
      setResponse('');
  
      // Render response like typewriter effect
      for (let i = 0; i < generatedResponse.length; i++) {
        setTimeout(() => {
          setResponse((prevResponse) => prevResponse + generatedResponse[i]);
        }, 50 * i);
      }
    } catch (error) {
      setError('An error occurred while generating the response.');
      console.error(error);
    }
  };  

  const handleTopicChange = (e) => {
    setError('');
    setTopic(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-12 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-900">
      <h4 className="text-lg font-semibold text-blue-950 tracking-wide w-1/4 text-justify pb-5 px-3">
        Craft tales in seconds! Choose topic, style, and enjoy AI magic.
      </h4>
      <form className="flex flex-col min-h-96 p-6 h w-96 mx-auto rounded-2xl shadow-lg bg-black text-white relative">
        {error && <p className="text-red-500">{error}</p>}
        <section className="p-3 text-sm">
          <label htmlFor="input1">What topic would you like for us to write?</label>
          <textarea
            name=""
            id="input1"
            cols="30"
            rows="3"
            className="w-full rounded-md mt-2 bg-stone-800 p-3"
            value={topic}
            onChange={handleTopicChange}
          ></textarea>
        </section>
        <section className="px-4 py-1">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white bg-stone-700 font-medium rounded-lg w-full text-sm px-5 py-2.5 flex justify-center items-center tracking-wider"
            type="button"
          >
            SELECT GENRE{' '}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            className={`${
              isDropdownOpen ? 'block' : 'hidden'
            } z-10 absolute bg-transparent divide-y divide-gray-100 rounded-lg w-72 px-auto dark:bg-gray-700`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-wrap px-5">
              <li className="flex-grow text-center border border-white rounded-3xl text-white m-1">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => { setGenre('Sad'); setIsDropdownOpen(false); }}
                >
                  Sad
                </a>
              </li>
              <li className="flex-grow text-center border border-white rounded-3xl text-white m-1">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => { setGenre('Scary'); setIsDropdownOpen(false); }}
                >
                  Scary
                </a>
              </li>
              <li className="flex-grow text-center border border-white rounded-3xl text-white m-1">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => { setGenre('Serious'); setIsDropdownOpen(false); }}
                >
                  Serious
                </a>
              </li>
              <li className="flex-grow text-center border border-white rounded-3xl text-white m-1">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => { setGenre('Adventurous'); setIsDropdownOpen(false); }}
                >
                  Adventurous
                </a>
              </li>
              <li className="flex-grow text-center border border-white rounded-3xl text-white m-1">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => { setGenre('No'); setIsDropdownOpen(false); }}
                >
                  Nothing
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="px-10 pb-7 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 flex text-center">
          <span onClick={handleGenerateStory} className="bg-indigo-600 text-indigo-50 rounded-lg w-full p-2 hover:bg-indigo-400 cursor-pointer">
            Generate Story
          </span>
        </section>
      </form>
      <div className="text-white mt-4 text-left max-w-xl mx-auto">
        {response}
      </div>
    </main>
  );
}
