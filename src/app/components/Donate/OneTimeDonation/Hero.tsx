import React, { useState, useEffect } from "react";
import universityPlaceholder from "@/images/university-placeholder.jpg";
import Image from "next/image";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "@/app/components/Donate/ProgressBar";

const Hero = () => {
  const [totalDonated, setTotalDonated] = useState<number | null>(1000);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const q = query(
          collection(db, "global_data"),
          where("total_donated", ">=", 0),
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.total_donated !== undefined) {
            setTotalDonated(data.total_donated);
          }
        });
      } catch (error) {
        console.error("Error fetching global data:", error);
      }
    };
    fetchGlobalData();
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="mt-52 w-full flex flex-row max-lg:flex-col-reverse gap-12 p-10 justify-center items-center">
        <div className="flex justify-center flex-col gap-6">
          <div className="text-3xl font-semibold text-left">
            <span className="block">Help students worldwide</span>
            <span className="block">to discover their dreams.</span>
          </div>
          <ProgressBar
            currentProgressValue={totalDonated || 0}
            maxProgressValue={100}
          />
        </div>
        <Image
          src={universityPlaceholder}
          alt="university placeholder"
          className="w-[30vw] h-[50vh] rounded-2xl max-lg:w-[100vw] max-lg:h-[25vh] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
