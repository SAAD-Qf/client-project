import Link from "next/link";
import Image from "next/image";
import com from "../image/com.jpg"

export default function About() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative bg-black">
        <Image className="h-[150px] w-[200px] -mx-10 " src={com} alt=""/>
        <div className="w-full md:w-1/2 flex justify-center">
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="font-bold text-5xl text-white px-4 py-2 rounded-md shadow-inner shadow-white items-start justify-items-start animate-pulse">About</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="text-xl bg-black text-white font-bold space-x-1 shadow-md shadow-white rounded-md px-4 py-1  ">
            I’m a passionate web developer with experience in HTML, CSS, TypeScript, Tailwind CSS, Shadcn, React, and Next.js. I create and build outstanding websites and applications.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link href="/contact" className="mt-8 px-6 py-3 bg-black rounded-lg text-white font-semibold text-left border border-white">
            Go to Contact
          </Link>
        </div>
      </div>
    );
  }