import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
    setEmail(value);
  };

  return (
    <div className="mt-[40px]">
      <div className="flex flex-col gap-y-[20px] max-[900px]:justify-center">
        <div className="text-sm md:text-base lg:text-lg font-semibold underline decoration-4 decoration-[#ff992c] underline-offset-[10px]">
          Join our newsletter
        </div>
        <div className="font-light text-xs md:text-sm w-1/2">
          Get <span style={{ fontWeight: 700 }}>instant updates</span> on
          Uniglow&apos;s latest features! Subscribe now to stay informed and{" "}
          <span style={{ fontWeight: 700 }}>
            enhance your experience with our cutting-edge innovations.
          </span>
        </div>
        <div className="flex flex-col gap-y-[15px]">
          <div className="font-bold text-sm md:text-base lg:text-lg">
            Email address
          </div>
          <input
            type="text"
            placeholder="Enter your email address here"
            className="w-1/2 p-3 text-sm min-w-[300px] max-w-[400px] rounded-[10px] bg-[#004fa3] placeholder-white max-[900px]:w-full"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
          />
          {error && (
            <div className="text-[#ff7f00] text-sm mt-1 font-bold">{error}</div>
          )}
          <div className="px-3 py-2 border-white border w-[100px] flex items-center justify-center mt-[10px] rounded-[10px] cursor-pointer scale-100 hover:scale-110 transition-all duration-300 ease-in-out">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
