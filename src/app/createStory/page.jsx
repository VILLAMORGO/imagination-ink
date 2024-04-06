"use client";
import { useState } from 'react';
import storyGenerator from '../api/generate.jsx'
import storyRewriter from '../api/rewriteResponse.jsx'

export default function CreateStory() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState('');
  const [originalResponse, setOriginalResponse] = useState('');
  const [rewrittenResponse, setRewrittenResponse] = useState(''); 
  const [showRewritten, setShowRewritten] = useState(false);
  const [showButton, setShowButton] = useState(false); 

  const topics = [
    { name: 'Sad', genre: 'Sad' },
    { name: 'Scary', genre: 'Scary' },
    { name: 'Serious', genre: 'Serious' },
    { name: 'Adventurous', genre: 'Adventurous' },
    { name: 'Nothing', genre: 'Nothing' }
  ];

  const handleTopicSelection = (selectedGenre) => {
    setGenre(selectedGenre);
    setIsDropdownOpen(false);
  };

  const handleGenerateStory = async () => {
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
  
      setOriginalResponse('');
      for (let i = 0; i < generatedResponse.length; i++) {
        setTimeout(() => {
          setOriginalResponse((prevResponse) => prevResponse + generatedResponse[i]);
        }, 15 * i);
      }

      setShowButton(true);
           
    } catch (error) {
      setError('An error occurred while generating the response.');
      console.error(error);
    }
  };  

  const handleRewritingStory = async () => {
    const rewrittenResponse = await storyRewriter(originalResponse);
      if (!rewrittenResponse) {
        setError('Failed to rewrite the story.');
        return;
      }

      setRewrittenResponse('');
      for (let i = 0; i < rewrittenResponse.length; i++) {
        setTimeout(() => {
          setRewrittenResponse((prevResponse) => prevResponse + rewrittenResponse[i]);
        }, 15 * i);
      } 

    setShowRewritten(true);
  }

  const handleTopicChange = (e) => {
    setError('');
    setTopic(e.target.value);
  };

  return (
    <main id="createStory" className="flex min-h-screen flex-col items-center pt-9 lg:pt-20 px-7 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-900">
      <h4 className="text-lg lg:text-2xl font-semibold text-blue-950 tracking-wide text-center lg:text-justify pb-6 lg:pb-10 ">
          Craft tales in seconds! Choose topic, style, and enjoy AI magic.
      </h4>
      <div className='w-full mx-auto flex flex-row flex-wrap justify-evenly'>
        <form className="flex flex-col min-h-96 p-3 lg:p-6 w-96 mx-2 my-3 rounded-2xl shadow-lg bg-black text-white relative">
          {error && <p className="text-red-500">{error}</p>}
          <section className="p-3 text-sm lg:text-base text-center">
            <label htmlFor="input1">What topic would you like for us to write?</label>
            <textarea
              name=""
              id="input1"
              cols="30"
              rows="3"
              className="w-full rounded-md mt-2 bg-stone-800 p-3 text-sm lg:text-base"
              value={topic}
              onChange={handleTopicChange}
            ></textarea>
          </section>
          <section className="px-3 py-1">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white bg-stone-700 font-medium rounded-lg w-full text-sm lg:text-base px-5 py-2 flex justify-center items-center tracking-wide lg:tracking-wider"
              type="button"
            >
              {genre ? `Genre: ${genre}` : 'Select Genre'}{' '}
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
               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-wrap justify-center px-5 w-full">
                {topics.map((topic, index) => (
                  <li key={index} className="text-center border border-white rounded-3xl text-white m-1">
                    <a
                      href="#"
                      className="block px-4 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleTopicSelection(topic.genre)}
                    >
                      {topic.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="text-sm lg:text-base px-9 pb-6 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex text-center">
            <div onClick={handleGenerateStory} className="bg-indigo-600 text-indigo-50 rounded-lg w-full p-2 hover:bg-indigo-400 cursor-pointer">
              Generate Story
            </div>
          </section>
        </form>
        <section className={`flex flex-col min-h-96 max-h-96 p-6 h w-96 mx-2 my-3 rounded-2xl shadow-lg bg-black text-white relative ${originalResponse ? '' : 'hidden'}`}>
          <h2 className='text-center text-lg '>Original Story</h2>
          <br />
          <p  className='text-justify text-sm lg:text-base mx-3 overflow-auto' >{originalResponse}</p>
          {showButton && ( 
          <button onClick={handleRewritingStory} className="bg-indigo-600 text-indigo-50 px-4 py-2 rounded-md mt-2 mx-3 tracking-widest text-sm lg:text-base">
            Make it Funny!
          </button>
        )}
        </section>
        <section className={`flex flex-col min-h-96 max-h-96 p-9 h w-96 mx-2 my-3 rounded-2xl shadow-lg bg-black tracking-wider text-slate-200  ${showRewritten ? '' : 'hidden'}`}>
          <h2 className='text-center text-lg '>Funny Version</h2>
          <br />
          {showRewritten && <p className='text-justify text-sm lg:text-base overflow-auto'>{rewrittenResponse}</p>}
        </section>
      </div>
    </main>
  );
}
