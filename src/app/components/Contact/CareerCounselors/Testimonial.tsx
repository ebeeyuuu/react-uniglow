import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content:
      "The career guidance I received was transformative. It helped me transition into tech and land my dream job.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Creative Agency",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content:
      "Invaluable insights and practical strategies that accelerated my career growth. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Startup Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content:
      "The personalized approach and industry expertise helped me make a successful career pivot.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/15 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xs lg:text-base text-white/60 max-w-2xl mx-auto">
            Hear from professionals who transformed their careers with our
            guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl smooth-animation" />
              <div className="relative p-6 bg-white/[0.02] rounded-xl border border-white/10 backdrop-blur-xs">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={52}
                    height={52}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="text-sm lg:text-base font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-xs lg:text-sm text-white/60">
                      {testimonial.role}
                    </div>
                    <div className="text-xs lg:text-sm text-purple-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="flex mb-4 gap-.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <BsStarFill key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs lg:text-base text-white/60">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
