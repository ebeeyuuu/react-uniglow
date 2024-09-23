import React from "react";
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
  return (
    <SlidePresentation numSlides={9}>
      <IntroSlide />
      <SubjectsSlide />
      <RegionSlide />
      <CultureSlide />
      <PrestigeSlide />
      <ClubsSlide />
      <ServicesSlide />
      <AIResponseSlide />
      <FinishedSlide />
    </SlidePresentation>
  );
};

export default Questions;
