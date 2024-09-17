import ExpandingServices from "./SixthSlide/ExpandingServices";
import { supportServices } from "@/data";
import TestParallax from "./SixthSlide/TestParallax";

const SixthSlide = () => {
  return (
    <div className="w-full h-full relative overflow-y-auto overflow-x-hidden scrollbar-hide">
      {/* TestParallax takes up the entire screen */}
      <div className="relative w-full h-screen">
        <TestParallax />
      </div>

      {/* Content below the parallax */}
      <div className="w-full h-full space-y-6 text-6xl font-bold p-56 mt-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          bibendum, urna a dapibus tincidunt, elit dui viverra eros, ac
          pellentesque risus metus ut nisi. Nullam ullamcorper lorem non massa
          tincidunt dapibus. Sed mollis lacus in turpis aliquam, vitae tincidunt
          felis luctus. Curabitur euismod vulputate nibh, eget sollicitudin eros
          fermentum ut. Fusce tincidunt magna a augue interdum, eget pharetra
          lorem convallis.
        </p>
        <p>
          Duis sit amet ultricies nulla. Cras accumsan, orci ut dapibus
          volutpat, turpis lacus lacinia leo, ac gravida purus nulla eget felis.
          Vestibulum sit amet enim tincidunt, facilisis purus in, fermentum
          nunc. Phasellus a libero non dolor posuere convallis sed eu ligula.
          Suspendisse potenti. Nam laoreet dolor nec efficitur fermentum. Etiam
          viverra orci sed augue convallis, vitae posuere magna vehicula.
        </p>
        <p>
          Sed malesuada justo vitae tincidunt convallis. Proin nec metus orci.
          Donec vitae justo ac ligula gravida vehicula. Maecenas placerat, lorem
          vitae elementum lobortis, tortor nisi ullamcorper velit, nec consequat
          lectus neque non quam. Etiam rutrum felis at suscipit venenatis. Ut at
          magna non turpis ultrices gravida at ac metus.
        </p>
        <p>
          Pellentesque ac metus ut lacus dapibus sodales. Suspendisse eget felis
          euismod, pulvinar est vel, condimentum mi. Aenean lacinia consectetur
          suscipit. Donec dapibus, velit ut efficitur ultricies, dolor libero
          viverra ante, ac dictum ex elit id mauris.
        </p>
        <p>
          Vivamus cursus sapien in sem gravida viverra. Cras nec augue eu ante
          aliquet aliquam non sit amet quam. Duis tincidunt eros nisi, ut
          vulputate quam interdum ut.
        </p>
      </div>
    </div>
  );
};

export default SixthSlide;
