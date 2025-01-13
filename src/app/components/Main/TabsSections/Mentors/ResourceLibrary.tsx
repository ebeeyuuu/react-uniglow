"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsBook, BsDownload, BsLink45Deg } from "react-icons/bs";
import Modal, { useModal } from "@/app/components/UI/Modal";

interface Resource {
  title: string;
  type: "pdf" | "video" | "link" | "document";
  category: string;
  description: string;
  dateAdded: string;
  url: string;
  sharedWith: string[];
  tags: string[];
}

const resources: Resource[] = [
  {
    title: "Machine Learning Fundamentals",
    type: "pdf",
    category: "Computer Science",
    description: "Comprehensive guide covering ML basics and advanced concepts",
    dateAdded: "2025-01-10",
    url: "/resources/ml-fundamentals.pdf",
    sharedWith: ["Alex Thompson", "Sarah Chen"],
    tags: ["AI", "Machine Learning", "Beginner"],
  },
  {
    title: "Research Writing Guidelines",
    type: "document",
    category: "Academic Skills",
    description: "Best practices for academic research writing and publication",
    dateAdded: "2025-01-12",
    url: "/resources/research-guidelines.doc",
    sharedWith: ["Michael Park"],
    tags: ["Research", "Writing", "Academic"],
  },
];

const ResourceLibrary: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...divProps
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null,
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { isOpen, openModal, closeModal } = useModal();

  const categories = [
    "all",
    ...Array.from(new Set(resources.map((r) => r.category))),
  ];

  const filteredResources = resources.filter(
    (resource) =>
      (selectedCategory === "all" || resource.category === selectedCategory) &&
      (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        )),
  );

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
    openModal();
  };

  const getTypeIcon = (type: Resource["type"]) => {
    switch (type) {
      case "pdf":
        return "📄";
      case "video":
        return "🎥";
      case "link":
        return "🔗";
      case "document":
        return "📝";
    }
  };

  return (
    <div
      {...divProps}
      className="space-y-2 w-full h-full max-w-3xl mx-auto rounded-2xl p-6 border border-white/5 bg-white/[0.01]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Resource Library</h2>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-3 py-1 text-sm focus:outline-none focus:border-purple-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search resources or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 pl-10 focus:outline-none focus:border-purple-500 text-sm"
          />
          <BsBook className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredResources.map((resource) => (
          <motion.div
            key={resource.title}
            className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => handleResourceClick(resource)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col items-start">
              <div>
                <div className="flex flex-col gap-2">
                  <span>{getTypeIcon(resource.type)}</span>
                  <h3 className="text-sm font-medium text-white/85">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-xs text-white/60 mt-1">
                  {new Date(resource.dateAdded).toLocaleDateString()} · Shared
                  with {resource.sharedWith.length} students
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-2 mt-2">
                <BsDownload className="text-white/60" />
                <BsLink45Deg className="text-white/60" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} title="Resource Details">
        {selectedResource && (
          <div className="space-y-4">
            <p className="text-sm">
              <strong>Title:</strong> {selectedResource.title}
            </p>
            <p className="text-sm">
              <strong>Category:</strong> {selectedResource.category}
            </p>
            <p className="text-sm">
              <strong>Description:</strong> {selectedResource.description}
            </p>
            <p className="text-sm">
              <strong>Shared with:</strong>{" "}
              {selectedResource.sharedWith.join(", ")}
            </p>
            <div className="flex gap-2">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition-colors">
                Download
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                Copy Link
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ResourceLibrary;
