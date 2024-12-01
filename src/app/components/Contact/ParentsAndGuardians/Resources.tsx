"use client";

import {
  BsCalculator,
  BsBook,
  BsHouse,
  BsShieldCheck,
  BsListCheck,
} from "react-icons/bs";
import Image from "next/image";

const resources = [
  {
    icon: BsCalculator,
    title: "University Cost Calculator",
    description:
      "Plan your finances with our comprehensive and easy-to-use cost tool",
    link: "#",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    icon: BsBook,
    title: "Financial Aid Guide",
    description:
      "Navigate scholarships, loans, and grant opportunities effortlessly",
    link: "#",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  {
    icon: BsHouse,
    title: "Accommodation Guide",
    description:
      "Compare housing options and living costs across top universities",
    link: "#",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
  },
  {
    icon: BsShieldCheck,
    title: "Safety Statistics",
    description:
      "Access detailed campus safety information and trustworthy reports",
    link: "#",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  },
  {
    icon: BsListCheck,
    title: "Parent Checklist",
    description: "Stay organized with our comprehensive preparation checklist",
    link: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
  },
];

const Resources = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Resources & Tools
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Everything you need to support your child&apos;s university journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
              </div>

              <div className="absolute inset-0 p-9 flex flex-col justify-center items-center">
                <div className="flex flex-col gap-3 -mb-2">
                  <div>
                    <resource.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {resource.title}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-white/80">{resource.description}</p>
                    <button className="text-white">Access Resource</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
