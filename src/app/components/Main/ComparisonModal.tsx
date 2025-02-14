import React from "react";
import { motion } from "framer-motion";
import { BsX } from "react-icons/bs";

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

interface ComparisonModalProps {
  universities: University[];
  onClose: () => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({
  universities,
  onClose,
}) => {
  const scoreCategories = Object.keys(universities[0].scores);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 p-8 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">University Comparison</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <BsX size={24} />
          </button>
        </div>

        <div className="grid w-full gap-8">
          {universities.map((uni) => (
            <motion.div
              key={uni.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/[0.05] border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">{uni.name}</h3>
              <div className="space-y-4">
                <div className="text-sm text-white/80">{uni.description}</div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-white/60">Basic Info</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/10 rounded-xl p-3">
                      <div className="text-sm text-white/60">Country</div>
                      <div>{uni.country}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3">
                      <div className="text-sm text-white/60">Ranking</div>
                      <div>#{uni.globalRanking}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-white/60">Categories</div>
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
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-white/60">Scores</div>
                  {scoreCategories.map((key) => (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize text-white/60">{key}</span>
                        <span>{uni.scores[key as keyof University["scores"]].toFixed(2)}</span>
                      </div>
                      <motion.div
                        className="h-2 bg-white/10 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8 }}
                      >
                        <motion.div
                          className="h-full bg-white/30"
                          initial={{ width: 0 }}
                          animate={{ width: `${uni.scores[key as keyof University["scores"]]}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ComparisonModal;
