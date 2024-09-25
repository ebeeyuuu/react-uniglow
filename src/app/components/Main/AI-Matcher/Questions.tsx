import React, { useState } from "react";
import SlidePresentation from "./SlidePresentation";

import IntroSlide from "./IntroSlide";
import SubjectsSlide from "./SubjectsSlide";
import RegionSlide from "./RegionSlide";
import CultureSlide from "./CultureSlide";
import PrestigeSlide from "./PrestigeSlide";
import ClubsSlide from "./ClubsSlide";
import ServicesSlide from "./ServicesSlide";
import AIResponseSlide from "./AIResponseSlide";
import FinishedSlide from "./FinishedSlide";

const Questions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <SlidePresentation
      numSlides={9}
      currentIndex={currentSlide}
      setCurrentIndex={setCurrentSlide}
    >
      <IntroSlide onNextSlide={() => setCurrentSlide(1)} />
      <SubjectsSlide onNextSlide={() => setCurrentSlide(2)} />
      <RegionSlide onNextSlide={() => setCurrentSlide(3)} />
      <CultureSlide onNextSlide={() => setCurrentSlide(4)} />
      <PrestigeSlide onNextSlide={() => setCurrentSlide(5)} />
      <ClubsSlide onNextSlide={() => setCurrentSlide(6)} />
      <ServicesSlide onNextSlide={() => setCurrentSlide(7)} />
      <AIResponseSlide onNextSlide={() => setCurrentSlide(8)} />
      <FinishedSlide />
    </SlidePresentation>
  );
};

export default Questions;
