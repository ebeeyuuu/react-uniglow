import React from "react";
import SlidePresentation from "./SlidePresentation";

import IntroSlide from "./IntroSlide";
import SubjectsSlide from "./SubjectsSlide";
import RegionSlide from "./RegionSlide";
import CultureSlide from "./CultureSlide";
import ClubsSlide from "./ClubsSlide";
import ServicesSlide from "./ServicesSlide";

const Questions = () => {
  return (
    <SlidePresentation numSlides={8}>
      <IntroSlide />
      <SubjectsSlide />
      <RegionSlide />
      <CultureSlide />
      <ClubsSlide />
      <ServicesSlide />
    </SlidePresentation>
  );
};

export default Questions;
