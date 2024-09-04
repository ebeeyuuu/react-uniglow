import React from "react";
import TypeClubs from "./FifthSlide/TypeClubs";
import TypeGroups from "./FifthSlide/TypeGroups";
import ExampleClubs from "./FifthSlide/ExampleClubs";
import ExampleGroups from "./FifthSlide/ExampleGroups";

const FifthSlide = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-20">
      <p className="text-3xl w-4/5 font-medium text-center">
        What kind of clubs or groups would you love to join in college?
      </p>
      <div className="flex flex-col gap-5">
        <TypeClubs />
        <ExampleClubs />
        <TypeGroups />
        <ExampleGroups />
      </div>
    </div>
  );
};

export default FifthSlide;
