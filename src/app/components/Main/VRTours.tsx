"use client";

import Image from "next/image";
import { BsPlay } from "react-icons/bs";
import Modal, { useModal } from "@/app/components/UI/Modal";
import { useState} from "react";

type VRTour = {
  id: number;
  university: string;
  thumbnail: string;
  duration: string;
  description: string;
  tourUrl: string;
  locations: string[];
}

const virtualTours: VRTour[] = [
  {
    id: 1,
    university: "Stanford University",
    thumbnail: "https://images.unsplash.com/photo-1514906380639-closed-college-campus?q=80",
    duration: "15 min",
    description: "Explore Stanford's historic Main Quad and modern research facilities",
    tourUrl: "/vr/stanford",
    locations: ["Main Quad", "Memorial Church", "Green Library", "Engineering Quad"]
  },
  {
    id: 2,
    university: "Harvard University",
    thumbnail: "https://images.unsplash.com/photo-1576049519901-ef17971aedc4?q=80",
    duration: "20 min",
    description: "Walk through Harvard Yard and visit historic buildings",
    tourUrl: "/vr/harvard",
    locations: ["Harvard Yard", "Widener Library", "Memorial Hall", "Science Center"]
  },
  {
    id: 3,
    university: "MIT",
    thumbnail: "https://images.unsplash.com/photo-1591966475401-f57bae07d7ae?q=80",
    duration: "18 min",
    description: "Experience MIT's cutting-edge facilities and iconic architecture",
    tourUrl: "/vr/mit",
    locations: ["The Great Dome", "Media Lab", "Stata Center", "Infinite Corridor"]
  },
  {
    id: 4,
    university: "Oxford University",
    thumbnail: "https://images.unsplash.com/photo-1580844946486-f08607088f08?q=80",
    duration: "25 min",
    description: "Tour through centuries of academic excellence",
    tourUrl: "/vr/oxford",
    locations: ["Bodleian Library", "Christ Church", "Radcliffe Camera", "Bridge of Sighs"]
  }
];

const VRTours = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedTour, setSelectedTour] = useState<VRTour | null>(null);

  const handleTourClick = (tour: VRTour) => {
    setSelectedTour(tour);
    openModal();
  }

  return (
    <div className="space-y-4 w-full h-full rounded-2xl p-6 border border-white/5 bg-white/[0.01] overflow-scroll scrollbar-hide">
      <div className="flex w-full items-center gap-2 justify-between">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold">
          University VR Tours
        </h2>
        <span className="text-xs text-white/60">
          {virtualTours.length} tours available
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {virtualTours.map((tour) => (
          <div
            key={tour.id}
            className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
            onClick={() => handleTourClick(tour)}
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
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{tour.university}</h3>
                <p className="text-sm text-white/80 line-clamp-2">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BsPlay className="w-5 h-5" />
                    <span className="text-sm text-white/60">{tour.duration}</span>
                  </div>
                  <button className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    Start Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={isOpen} 
        onClose={closeModal}
        title={`${selectedTour?.university} VR Tour`}
      >
        {selectedTour && (
          <div className="space-y-4">
            <div className="aspect-video relative bg-black/50 rounded-xl mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/60">VR Experience Loading...</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white/60 mb-2">Featured Locations</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTour.locations.map((location, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
            <button className="w-full py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
              Launch Full VR Experience
            </button>
          </div>
        )}
      </Modal>
    </div>
  )
};

export default VRTours;
