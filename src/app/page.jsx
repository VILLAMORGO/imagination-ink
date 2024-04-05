import Image from "next/image";
import quillIcon from "../../public/quill.svg";

export default function Hero() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between pl-44 py-24 bg-white">
      <div className="flex flex-col w-1/2">
        {/* <h1 className="text-5xl font-bold tracking-widest" style={{fontFamily: "Poppins, Sans-serif"}}>ImagiNation Ink</h1> */}
        <h2 className="text-6xl font-extrabold tracking-widest" style={{ fontFamily: "Poppins, Sans-serif" }}>
        Unleash your <span className="text-blue-600">creativity</span> with our
          <span  className="italic text-transparent" style={{ WebkitTextStrokeWidth: '2px', WebkitTextStrokeColor: 'black'}}> story writing platform.</span>
        </h2>
        <span className="h-10 w-48  px-8 py-2 text-indigo-700 transition-colors duration-150 border-2 bg-green-50 border-indigo-500 rounded-full focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 cursor-pointer mt-10">
          <p className="tracking-wider font-medium" >GET STARTED</p>
        </span>

      </div>
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-48 w-48 text-blue-950 self-center"
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
          className="h-80 w-80"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-48 w-48 text-blue-950 self-center"
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
