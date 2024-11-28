import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import Barrier from "./Barrier";

const barriersData = [
  { name: "High Costs", solution: "Affordable plans for all." },
  { name: "Lack of Mentors", solution: "Access to expert mentors." },
  { name: "Time Constraints", solution: "Flexible scheduling options." },
  { name: "Limited Resources", solution: "Comprehensive resources provided." },
  {
    name: "Accessibility Issues",
    solution: "User-friendly design for everyone.",
  },
  {
    name: "Knowledge Gaps",
    solution: "Customized learning paths to fill gaps.",
  },
  {
    name: "Complex Processes",
    solution: "Simplified workflows to ease complexity.",
  },
  {
    name: "Lack of Guidance",
    solution: "Step-by-step guidance at every stage.",
  },
  {
    name: "Inconsistent Tools",
    solution: "Integrated tools for a seamless experience.",
  },
  {
    name: "Fear of Failure",
    solution: "Encouragement and a fail-safe environment.",
  },
  {
    name: "Language Barriers",
    solution: "Localized support and multilingual options.",
  },
  {
    name: "Overwhelming Choices",
    solution: "Curated options to match your needs.",
  },
  {
    name: "Technology Limitations",
    solution: "Accessible solutions for all devices.",
  },
  { name: "Unclear Goals", solution: "Goal-setting tools and clarity." },
  {
    name: "Social Isolation",
    solution: "Community-focused features for collaboration.",
  },
];

const ReducingBarriers = () => {
  const [removedBarriers, setRemovedBarriers] = useState<string[]>([]);
  const [showSolutions, setShowSolutions] = useState(false);

  const allCleared = removedBarriers.length === barriersData.length;

  const handleRemove = (name: string) => {
    setRemovedBarriers((prev) => [...prev, name]);
  };

  useEffect(() => {
    if (allCleared) {
      const timer = setTimeout(() => setShowSolutions(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [removedBarriers, allCleared]);

  return (
    <div className="w-[100vw] h-[100vh] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {barriersData.map(({ name, solution }, index) => (
          <Barrier
            key={index}
            name={name}
            solution={solution}
          />
        ))}

        {showSolutions && (
          <Text position={[0, 2, 0]} fontSize={0.5} color="green">
            All barriers cleared! Solutions are here.
          </Text>
        )}

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ReducingBarriers;
