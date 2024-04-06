import Image from "next/image";
import quillIcon from "../../public/quill.svg";
import Link from 'next/link'

export default function Hero() {
  return (
    <main className="flex min-h-screen md:flex-row flex-col items-center md:justify-between pr-8 xl:pl-40 lg:pl-32 md:pl-20 pl-10 py-24 bg-white">
      <div className="flex flex-col md:w-1/2 w-full">
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-extrabold tracking-widest" style={{ fontFamily: "Poppins, Sans-serif" }}>
        Unleash your <span className="text-blue-600">creativity</span> with our
          <span  className="italic text-transparent" style={{ WebkitTextStrokeWidth: '2px', WebkitTextStrokeColor: 'black'}}> story writing platform.</span>
        </h2>
        <Link href="/createStory" className="h-8 lg:h-10 w-36 lg:w-48  px-7 lg:px-8 py-2 text-indigo-700 transition-colors duration-150 border-2 bg-green-50 border-indigo-500 rounded-full focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 cursor-pointer mt-10">
            <p className="tracking-normal lg:tracking-wider font-medium text-xs lg:text-base" >GET STARTED</p>
        </Link>
      </div>
      <div className="flex flex-row mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 md:h-28 md:w-28 xl:h-48 xl:w-48 text-blue-950 self-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>

        <Image
          priority
          src={quillIcon}
          alt="Quill"
          className="xl:h-80 xl:w-80 lg:h-60 lg:w-60 h-44 w-44"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 md:h-28 md:w-28 xl:h-48 xl:w-48 text-blue-950 self-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>   
      </div>
    </main>
  );
}
