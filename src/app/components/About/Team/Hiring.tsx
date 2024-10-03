import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hiring = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-9 justify-center items-center">
      <div
        className="min-h-[100px] border rounded-full border-zinc-400"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        {" "}
      </div>
      <div
        className="text-5xl font-extrabold max-md:scale-[70%] scale-100 transition-all duration-300 ease-in-out"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Open positions
      </div>
      <div
        className="flex flex-col gap-6 justify-center mt-12 items-center w-full h-full px-10"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="border-2 border-blue-500 rounded-full px-5 py-3 uppercase text-sm">
          1. Engineering
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4 mx-auto">
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Engineering Manager</div>
            <div className="text-lg font-light text-gray-400">
              Build, lead, and develop a group of passionate and talented
              product engineers to build a better future for the world.
            </div>
          </div>
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Frontend Engineer</div>
            <div className="text-lg font-light text-gray-400">
              Collaborate with design teams to create intuitive and responsive
              user interfaces that enhance the user experience and drive
              engagement.
            </div>
          </div>
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Backend Engineer</div>
            <div className="text-lg font-light text-gray-400">
              Develop and maintain robust server-side applications and APIs,
              ensuring scalability and security to support the needs of our
              users.
            </div>
          </div>
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">DevOps Engineer</div>
            <div className="text-lg font-light text-gray-400">
              Streamline development processes and enhance system reliability by
              implementing continuous integration and deployment practices
              across the organization.
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-6 justify-center mt-20 items-center w-full h-full px-10"
        data-aos="fade-up"
      >
        <div className="border-2 border-green-500 rounded-full px-5 py-3 uppercase text-sm">
          2. Product
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4 mx-auto">
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Product Manager</div>
            <div className="text-lg font-light text-gray-400">
              Define the product vision and strategy, ensuring alignment with
              market needs and business objectives while leading
              cross-functional teams to deliver successful products.
            </div>
          </div>
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Product Designer</div>
            <div className="text-lg font-light text-gray-400">
              Create user-centered designs by conducting user research and
              testing, translating complex ideas into elegant and functional
              products that enhance the user experience.
            </div>
          </div>
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Product Marketing Manager</div>
            <div className="text-lg font-light text-gray-400">
              Develop and execute marketing strategies that resonate with target
              audiences, ensuring successful product launches and driving
              product adoption in the market.
            </div>
          </div>
          <div className="rounded-xl gap-4 flex flex-col p-10 shadow-md shadow-zinc-500">
            <div className="text-xl font-bold">Product Analyst</div>
            <div className="text-lg font-light text-gray-400">
              Analyze product performance metrics and user feedback to provide
              insights and recommendations that inform product enhancements and
              drive continuous improvement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
