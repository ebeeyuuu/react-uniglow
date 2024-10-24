import React from "react";
import { useRouter } from "next/navigation";
import Mentoring from "../../Icons/Mentoring";
import { FaUser } from "react-icons/fa";

interface Point {
  id: number;
  x: number;
  y: number;
}

const generateHexagonPoints = (): Point[] => {
  const centerX = 50;
  const centerY = 50;
  const radius = 25;
  const points: Point[] = [];

  points.push({ id: 1, x: centerX, y: centerY - radius });
  points.push({
    id: 2,
    x: centerX + radius * 0.866,
    y: centerY - radius * 0.5,
  });
  points.push({
    id: 3,
    x: centerX + radius * 0.866,
    y: centerY + radius * 0.5,
  });
  points.push({ id: 4, x: centerX, y: centerY + radius });
  points.push({
    id: 5,
    x: centerX - radius * 0.866,
    y: centerY + radius * 0.5,
  });
  points.push({
    id: 6,
    x: centerX - radius * 0.866,
    y: centerY - radius * 0.5,
  });

  return points;
};

const nodes = generateHexagonPoints();

const MentorsSection = () => {
  const router = useRouter();

  const iconSize = 5; // Adjust this value to change icon size
  const iconOffset = iconSize / 2;

  return (
    <div
      className="row-span-2 col-span-1 max-[2000px]:col-span-2 max-[1200px]:row-span-1 max-[700px]:text-lg rounded-[10px] flex justify-center items-center text-xl font-bold text-center cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden bg-gradient-to-b from-[#212121] to-[#111111]"
      onClick={() => router.push("/pages/main/mentors")}
    >
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {nodes.map((node, index) => {
            return nodes.map((target, targetIndex) => {
              if (index !== targetIndex) {
                return (
                  <line
                    key={`${node.id}-${target.id}`}
                    x1={`${node.x}`}
                    y1={`${node.y}`}
                    x2={`${target.x}`}
                    y2={`${target.y}`}
                    stroke="#3a3a3a"
                    strokeWidth="0.5"
                    strokeOpacity="0.5"
                  />
                );
              }
              return null;
            });
          })}
          {nodes.map((node) => (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <foreignObject
                x={-iconOffset}
                y={-iconOffset}
                width={iconSize}
                height={iconSize}
                className="overflow-visible"
              >
                <div className="flex items-center justify-center w-full h-full">
                  <FaUser
                    className="text-[#4e4e4e]"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center flex-col gap-y-[10px]">
          <Mentoring className="transition-all duration-700 ease-in-out text-[#02ac81]" />
          <div className="flex flex-row items-center justify-center max-sm:text-xs max-md:text-sm text-base smooth-animation">
            Mentors
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsSection;
