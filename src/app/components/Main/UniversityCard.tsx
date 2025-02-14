import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type University = {
  id: number;
  name: string;
  country: string;
  globalRanking: number;
  logo: string;
  description: string;
  categories: string[];
  scores: {
    academic: number;
    research: number;
    international: number;
    industry: number;
    overallScore: number;
  };
};

interface UniversityCardProps {
  university: University;
  isPinned: boolean;
  isSelected: boolean;
  isCompareMode: boolean;
  onPin: () => void;
  onCompare: () => void;
}

const UniversityCard: React.FC<UniversityCardProps> = ({
  university: uni,
  isPinned,
  isSelected,
  isCompareMode,
  onPin,
  onCompare,
}) => {
  return (
    <motion.div layoutId={`uni-${uni.id}`} className="relative">
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={() => (isCompareMode ? onCompare() : onPin())}
        className={`bg-white/[0.05] border border-white/10 rounded-2xl cursor-pointer ${
          isSelected ? "ring-2 ring-white/30" : ""
        }`}
      >
        <div className="relative w-full h-48">
          <Image
            src={`${uni.logo}?w=400&h=300&fit=crop`}
            alt={uni.name}
            fill
            className="rounded-t-xl object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">{uni.name}</h3>
            <p className="text-sm text-white/60">{uni.country}</p>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-white/60">Global Ranking</span>
            <span className="font-semibold">#{uni.globalRanking}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {uni.categories.map((category) => (
              <span
                key={category}
                className="px-2 py-1 bg-white/10 rounded-full text-xs"
              >
                {category}
              </span>
            ))}
          </div>

          <AnimatePresence>
            {isPinned && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-4 border-t border-white/10"
              >
                <div className="space-y-4">
                  <p className="text-sm text-white/80">{uni.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(uni.scores).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-white/10 rounded-xl p-3 flex flex-col"
                      >
                        <span className="text-sm capitalize text-white/60">
                          {key}
                        </span>
                        <span className="font-semibold">
                          {value.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UniversityCard;
