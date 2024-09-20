import React, { useState, useEffect } from "react";

const SeventhSlide = () => {
  const [story, setStory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true);
      const response = await fetch("/api/generateStory");
      const data = await response.json();
      setStory(data.story);
      setLoading(false);
    };

    fetchStory();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center text-xl font-bold">
      {loading ? "Loading story..." : story || "SeventSlide"}
    </div>
  );
};

export default SeventhSlide;
