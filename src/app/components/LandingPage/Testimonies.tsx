import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import image7 from "@/images/7.png";

interface Testimonial {
  name: string;
  role: string;
  image: any; // Use StaticImageData if you're using Next.js Image component
  rating: number;
  review: string;
}

const studentTestimonials: Testimonial[] = [
  {
    name: "Olivia K.",
    role: "Student at Harvard University",
    image: image7,
    rating: 4.5,
    review:
      "I was overwhelmed by all the university options, but Uniglow simplified everything. It's a must-use for any prospective student!",
  },
  {
    name: "Alex W.",
    role: "Freshman at MIT",
    image: image7,
    rating: 5,
    review:
      "Uniglow's interface is so user-friendly, and the recommendations are incredibly accurate. It made my decision-making process a breeze!",
  },
  {
    name: "Emily R.",
    role: "High School Senior",
    image: image7,
    rating: 5,
    review:
      "Thanks to Uniglow, I discovered universities that perfectly matched my career goals. It's an invaluable tool for any student!",
  },
  {
    name: "Daniel M.",
    role: "Graduate Student at Stanford",
    image: image7,
    rating: 4.5,
    review:
      "Uniglow's comprehensive approach to matching students with universities is impressive. It considers every aspect of student life!",
  },
  {
    name: "Sarah L.",
    role: "Transfer Student at UCLA",
    image: image7,
    rating: 5,
    review:
      "Uniglow made my university search so much easier! The personalized recommendations based on my preferences were spot-on.",
  },
  {
    name: "Michael B.",
    role: "International Student at NYU",
    image: image7,
    rating: 4.5,
    review:
      "As an international student, Uniglow helped me navigate the complex US university system. It's an excellent resource!",
  },
  {
    name: "Jessica T.",
    role: "Sophomore at UC Berkeley",
    image: image7,
    rating: 5,
    review:
      "I wish I had known about Uniglow earlier! It would have saved me so much time and stress during my college application process.",
  },
  {
    name: "Ryan K.",
    role: "High School Junior",
    image: image7,
    rating: 4.5,
    review:
      "Uniglow is helping me plan my college applications strategically. It's like having a personal college counselor!",
  },
  {
    name: "Sophia L.",
    role: "Freshman at Columbia University",
    image: image7,
    rating: 5,
    review:
      "Uniglow's recommendations were spot-on. I'm now attending my dream university thanks to their guidance!",
  },
  {
    name: "Ethan J.",
    role: "Student Athlete at Duke",
    image: image7,
    rating: 4.5,
    review:
      "Uniglow considered my athletic aspirations alongside my academic goals. It found the perfect balance for me.",
  },
];

const teacherParentTestimonials: Testimonial[] = [
  {
    name: "Dr. Johnson",
    role: "High School Counselor",
    image: image7,
    rating: 5,
    review:
      "Uniglow has revolutionized how I advise students. It provides comprehensive, tailored university suggestions that I can trust.",
  },
  {
    name: "Mrs. Thompson",
    role: "Parent of College Freshman",
    image: image7,
    rating: 4.5,
    review:
      "As a parent, I found Uniglow incredibly helpful in guiding my child through the college selection process. It eased a lot of our stress!",
  },
  {
    name: "Prof. Martinez",
    role: "University Admissions Officer",
    image: image7,
    rating: 5,
    review:
      "Uniglow helps students find universities that truly fit their needs and aspirations. It's a valuable tool for both students and institutions.",
  },
  {
    name: "Ms. Chen",
    role: "Career Advisor",
    image: image7,
    rating: 5,
    review:
      "I recommend Uniglow to all my students. It aligns their career goals with suitable university programs, setting them up for future success.",
  },
  {
    name: "Mr. Patel",
    role: "Parent of High School Junior",
    image: image7,
    rating: 4.5,
    review:
      "Uniglow has made the daunting task of college search manageable for our family. It's user-friendly and provides excellent insights.",
  },
  {
    name: "Dr. Williams",
    role: "Education Consultant",
    image: image7,
    rating: 5,
    review:
      "Uniglow is a game-changer in college advising. It offers data-driven recommendations that consistently impress both students and parents.",
  },
  {
    name: "Mrs. Garcia",
    role: "High School Principal",
    image: image7,
    rating: 4.5,
    review:
      "We've implemented Uniglow in our school's college counseling program, and the results have been outstanding. It's an invaluable resource.",
  },
  {
    name: "Mr. Nguyen",
    role: "Parent of Twins",
    image: image7,
    rating: 5,
    review:
      "Uniglow made it easy to help both our children find universities that fit their different interests and goals. It's incredibly versatile!",
  },
  {
    name: "Ms. Anderson",
    role: "College Essay Coach",
    image: image7,
    rating: 4.5,
    review:
      "Uniglow's insights help students focus their essays on what makes them unique. It's a great complement to the writing process.",
  },
  {
    name: "Dr. Lee",
    role: "STEM Program Director",
    image: image7,
    rating: 5,
    review:
      "For students interested in STEM fields, Uniglow does an excellent job matching them with universities that have strong programs in their areas of interest.",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <div className="flex flex-col space-y-4 mx-4 border border-white/50 rounded-[10px] p-6 w-[300px]">
    <div className="flex items-start space-x-4">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div className="flex flex-col">
        <p className="text-xl font-medium text-white">{testimonial.name}</p>
        <p className="text-lg text-white">{testimonial.role}</p>
      </div>
    </div>
    <div className="flex items-center">
      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
        <FaStar key={i} className="text-[#f4b034]" />
      ))}
      {testimonial.rating % 1 !== 0 && (
        <FaStarHalfAlt className="text-[#f4b034]" />
      )}
    </div>
    <p className="text-base text-white/60">&quot;{testimonial.review}&quot;</p>
  </div>
);

const Testimonies: React.FC = () => {
  return (
    <div className="w-full py-24 relative flex justify-center items-center flex-col mx-auto gap-y-[30px]">
      <div className="font-bold text-5xl mb-8 underline decoration-[#0070e0] decoration-8 underline-offset-[10px]">
        Testimonials
      </div>
      <div className="flex flex-col gap-y-[40px] mx-auto w-full">
        <div>
          <Marquee
            direction="left"
            className="py-4 max-w-[100%]"
            pauseOnHover={true}
          >
            {studentTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
        <div>
          <Marquee
            direction="right"
            className="py-4 max-w-[100%]"
            pauseOnHover={true}
          >
            {teacherParentTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
