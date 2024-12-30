"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";

interface Resource {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  dateAdded: string;
  size?: string;
  downloadUrl: string;
}

const ResourcesView: React.FC<{ mentorId: string }> = ({ mentorId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const resources: Resource[] = [
    {
      id: "1",
      title: "Research Methodology Guide",
      type: "PDF",
      category: "academic",
      description: "Comprehensive guide for conducting academic research",
      dateAdded: "2024-12-28",
      size: "2.4 MB",
      downloadUrl: "/files/research-guide.pdf",
    },
    {
      id: "2",
      title: "Interview Preparation Kit",
      type: "ZIP",
      category: "career",
      description: "Collection of interview questions and tips",
      dateAdded: "2024-12-27",
      size: "15.7 MB",
      downloadUrl: "/files/interview-kit.zip",
    },
  ];

  const categories = ["all", "academic", "career", "research", "personal"];

  const filteredResources = resources.filter(
    (resource) =>
      (selectedCategory === "all" || resource.category === selectedCategory) &&
      (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto space-y-2">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-sm bg-white/5 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${selectedCategory === category
                ? "bg-purple-600/20 border border-purple-500/50"
                : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
            >
              <span className="capitalize text-xs">{category}</span>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="flex flex-row flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-sm">{resource.title}</h3>
                  <p className="text-xs text-white/60">
                    {resource.description}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/50`}
                >
                  {resource.type}
                </span>
              </div>

              <div className="flex items-center justify-between mt-4 text-xs text-white/60">
                <div className="flex flex-row flex-wrap justify-between">
                  <span>
                    Added: {new Date(resource.dateAdded).toLocaleDateString()}
                  </span>
                  <span>
                    {resource.size && <span>{resource.size}</span>}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-2">
                    <BsDownload />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesView;
