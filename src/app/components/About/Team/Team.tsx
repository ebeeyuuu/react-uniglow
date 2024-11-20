"use client";

import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import placeholder from "@/images/7.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    name: "Ean James Yu",
    role: "Founder & CEO",
    image: placeholder,
    bio: "Former education consultant with a passion for technology and accessibility.",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    bio: "AI expert with 15 years of experience in EdTech innovation.",
  },
  {
    name: "Emily Thompson",
    role: "Head of Student Success",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    bio: "Dedicated to creating exceptional student experiences and outcomes.",
  },
  {
    name: "John Doe",
    role: "Chief Marketing Officer",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
    bio: "Expert in digital marketing and customer acquisition.",
  },
  {
    name: "Samuel Smith",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    bio: "Passionate about creating seamless user experiences and intuitive interfaces.",
  },
  {
    name: "Chris Evans",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1519340333755-42b6baf7f1d3",
    bio: "Lead software engineer specializing in full-stack development.",
  },
  {
    name: "Olivia Brown",
    role: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    bio: "Creative designer with an eye for detail, passionate about user-centered design.",
  },
  {
    name: "David Smith",
    role: "Lead Data Scientist",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    bio: "Experienced data scientist dedicated to building actionable insights from data.",
  },
  {
    name: "Alice Kim",
    role: "Customer Support Lead",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9",
    bio: "Empathetic and solution-oriented, ensuring customer satisfaction.",
  },
  {
    name: "Mark Green",
    role: "Business Development",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    bio: "Experienced in building strategic partnerships and driving business growth.",
  },
  {
    name: "Sophia White",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    bio: "Efficient manager with a knack for optimizing operations and processes.",
  },
  {
    name: "Liam Jackson",
    role: "Lead Software Developer",
    image: "https://images.unsplash.com/photo-1548946526-f69e2424cf45",
    bio: "Software development leader focused on scalable solutions.",
  },
  {
    name: "Nina Patel",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    bio: "Strategist passionate about innovative marketing solutions.",
  },
  {
    name: "Max Johnson",
    role: "Technical Support Lead",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de01e7f",
    bio: "Technical support lead helping teams solve complex issues.",
  },
  {
    name: "Emma Wilson",
    role: "Legal Advisor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Expert legal advisor with experience in tech and IP law.",
  },
];

const Team = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 max-w-md md:max-w-none mx-auto md:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${400 + 50 * index}`}
              key={index}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative bg-white/[0.02] rounded-2xl h-full border border-white/5 backdrop-blur-sm overflow-hidden flex flex-col">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1">
                    {member.name}
                  </h3>
                  <div className="text-purple-400 text-sm mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs md:text-sm lg:text-base text-white/60 mb-6">
                    {member.bio}
                  </p>
                </div>
                <div className="absolute bottom-4 left-6 flex gap-3">
                  <a
                    href="#"
                    className="text-white/40 hover:text-purple-400 transition-colors"
                  >
                    <BsLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-white/40 hover:text-purple-400 transition-colors"
                  >
                    <BsTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
