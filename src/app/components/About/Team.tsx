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
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "AI expert with 15 years of experience in EdTech innovation.",
  },
  {
    name: "Emily Thompson",
    role: "Head of Student Success",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Dedicated to creating exceptional student experiences and outcomes.",
  },
];

const Team = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" data-aos-delay="300" className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p data-aos="fade-up" data-aos-delay="350" className="text-white/60 max-w-2xl mx-auto">
            The passionate individuals behind our mission to transform education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div data-aos="fade-up" data-aos-delay={`${400 + 50 * index}`} key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative bg-white/[0.02] rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-purple-400 text-sm mb-3">
                    {member.role}
                  </div>
                  <p className="text-white/60 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
