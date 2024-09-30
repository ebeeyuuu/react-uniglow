import React from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "@/app/components/LoadingButton";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="radial-bg w-full h-[150vh] flex justify-center items-center flex-col gap-9">
      <div className="bg-white rounded-full mt-[-1000px] text-black font-medium text-base px-4 py-2">
        What we work for
      </div>
      <div className="text-center scale-100 max-md:scale-[70%] smooth-animation text-6xl font-extrabold flex justify-center flex-col">
        Our mission and values
      </div>
      <div className="w-[60%] mx-auto flex justify-center max-w-[800px] text-center text-lg max-md:text-base font-light">
        We value the importance of education and the pursuit of knowledge, as we
        believe that education is the key to unlocking the full potential of
        each individual.
      </div>
      <div className="h-[100px] border-2 rounded-full border-zinc-600"> </div>
      <div className="w-full h-auto flex justify-center items-center flex-col gap-9">
        <div className="scale-[85%] rounded-full px-[38px] py-7 text-lg border-2 flex justify-center items-center border-gray-400 text-gray-400 font-medium">
          1
        </div>
        <div className="text-4xl font-bold text-center flex justify-center items-center scale-100 max-md:scale-[70%]">
          Our vision
        </div>
        <div className="w-[60%] mx-auto flex justify-center max-w-[800px] text-center text-lg max-md:text-base font-light">
          To be the leading educational partnet in the world for fostering the
          growth and development of the next generation of leaders by setting
          them up with the best univeristy for them.
        </div>
      </div>
      <div className="h-[100px] border-2 rounded-full border-zinc-600"> </div>
      <div className="w-full h-auto flex justify-center items-center flex-col gap-9">
        <div className="scale-[85%] rounded-full px-[38px] py-7 text-lg border-2 flex justify-center items-center border-gray-400 text-gray-400 font-medium">
          2
        </div>
        <div className="text-4xl font-bold text-center flex justify-center items-center scale-100 max-md:scale-[70%]">
          Our mission
        </div>
        <div className="w-[60%] mx-auto flex justify-center max-w-[800px] text-center text-lg max-md:text-base font-light">
          To make the process of deciding a university as easy as possible and
          to make the worries of a typical student when applying to universities
          be as minimal as possible.
        </div>
      </div>
      <div className="h-[100px] border-2 rounded-full border-zinc-600"> </div>
      <div className="w-full h-auto flex justify-center items-center flex-col gap-9">
        <div className="scale-[85%] rounded-full px-[38px] py-7 text-lg border-2 flex justify-center items-center border-gray-400 text-gray-400 font-medium">
          3
        </div>
        <div className="text-4xl font-bold text-center flex justify-center items-center scale-100 max-md:scale-[70%]">
          Our values
        </div>
        <div className="w-[60%] mx-auto flex justify-center max-w-[800px] text-center text-lg max-md:text-base font-light">
          To make the process of deciding a university as easy as possible and
          to make the worries of a typical student when applying to universities
          be as minimal as possible.
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto flex justify-center items-center mt-40 flex-col gap-9">
        <p className="text-3xl font-bold text-center">
          We&apos;re here to revolutionise how students discover their dreams.{" "}
          <span className="text-gray-300">
            Here&apos;s how we&apos;re doing it.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
