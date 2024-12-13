import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  { name: "John Doe", text: "Uniglow changed my life. I found my dream university and career path.", image: "/placeholder.svg" },
  { name: "Jane Smith", text: "The support I received from Uniglow was invaluable. Highly recommended!", image: "/placeholder.svg" },
  { name: "Mike Johnson", text: "Thanks to Uniglow, I secured a scholarship I never thought possible.", image: "/placeholder.svg" },
]

const CommunityImpact = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-[#020202]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Community Impact
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Before & After</h3>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Before"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <motion.div
                className="absolute inset-0 bg-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: "50%" }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg"
                  alt="After"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  Drag to compare
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Testimonials</h3>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-900/20 backdrop-blur-md rounded-lg p-6"
            >
              <p className="text-white/80 mb-4">{testimonials[currentTestimonial].text}</p>
              <div className="flex items-center">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              </div>
            </motion.div>
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${index === currentTestimonial ? 'bg-purple-600' : 'bg-purple-900/20'
                    }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityImpact

