"use client";

import Image from "next/image";
import { BsPlay } from "react-icons/bs";

const tours = [
  {
    university: "Stanford University",
    thumbnail:
      "https://images.unsplash.com/photo-1681782421891-5088f13466ec?q=80",
    duration: "15 min",
  },
  {
    university: "Harvard University",
    thumbnail:
      "https://images.unsplash.com/photo-1576049519901-ef17971aedc4?q=80",
    duration: "20 min",
  },
];

const VRTours: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide flex flex-col justify-center items-center"
    >
      <div className="flex w-full items-center gap-2 justify-start">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          VR Tours
        </h2>
      </div>

      <div className="space-y-3 w-full">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer w-full"
          >
            <Image
              src={tour.thumbnail}
              alt={tour.university}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent h-1/2" />
            <div className="absolute inset-0 flex flex-col justify-end p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs lg:text-sm truncate font-medium">{tour.university}</span>
                <div className="flex items-center gap-1 text-xs text-white/60">
                  <BsPlay className="w-4 h-4" />
                  {tour.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VRTours;
