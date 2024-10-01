import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "@/app/components/LoadingButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const router = useRouter();
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({
        y: [0, -20, 0],
        transition: {
          duration: 1,
          repeat: 3,
          ease: [0.42, 0, 0.58, 1],
        },
      });
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, controls]);

  const handleRedirect = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    router.push("/pages/signup");
  };

  return (
    <div
      className="radial-bg w-full flex justify-center items-center flex-col gap-9"
      data-aos="fade-up"
    >
      <div className="bg-white rounded-full mt-52 text-black font-medium text-base px-4 py-2">
        What we work for
      </div>
      <div className="text-center scale-100 max-md:scale-[70%] smooth-animation text-6xl font-extrabold flex justify-center flex-col">
        <span className="block">Our mission</span>
        <span className="block">and values</span>
      </div>
      <div className="w-[60%] mx-auto flex justify-center max-w-[800px] text-center text-lg max-md:text-base font-light">
        We value the importance of education and the pursuit of knowledge, as we
        believe that education is the key to unlocking the full potential of
        each individual.
      </div>
      <div className="min-h-[100px] border rounded-full border-zinc-400"> </div>
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
      <div className="min-h-[100px] border rounded-full border-zinc-400"> </div>
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
      <div className="min-h-[100px] border rounded-full border-zinc-400"> </div>
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
      <div className="max-w-[1000px] mx-auto flex justify-center items-center mt-40 flex-col gap-9 p-10">
        <p className="text-3xl font-bold text-center">
          We&apos;re here to revolutionise how students discover their dreams.{" "}
          <span className="text-gray-300">
            Here&apos;s how we&apos;re doing it.
          </span>
        </p>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="border rounded-xl flex justify-center p-10 flex-col gap-4">
            <div className="text-2xl font-bold">One team, one dream</div>
            <div className="text-base font-light">
              We will grow and build the future of students together, going
              through wins to setbacks, and everything in between.
            </div>
          </div>
          <div className="border rounded-xl flex justify-center p-10 flex-col gap-4">
            <div className="text-2xl font-bold">Quality over quantity</div>
            <div className="text-base font-light">
              Rather than solving multiple issues at once, we prefer to focus on
              solving a few problems exceptionally well one at a time.
            </div>
          </div>
          <div className="border rounded-xl flex justify-center p-10 flex-col gap-4">
            <div className="text-2xl font-bold">Kindness and respect</div>
            <div className="text-base font-light">
              We always treat each other, our customers, and the outside world
              with respect, kindness, and compassion, as it&apos;s the right
              thing to do.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center mt-12">
        <motion.div ref={ref} animate={controls}>
          <LoadingButton
            onClick={handleRedirect}
            className="px-5 py-3 rounded-xl text-white flex justify-center items-center bg-[#003dcc] scale-100 hover:scale-105 transition-all duration-300 ease-in-out text-lg font-bold"
            loadingColorHex="#FFF"
          >
            Get started
          </LoadingButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
