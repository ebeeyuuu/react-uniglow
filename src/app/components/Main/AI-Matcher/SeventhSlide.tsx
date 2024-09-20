import { useState, useEffect } from "react";

const SeventhSlide = () => {
  const [story, setStory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true);

      try {
        const response = await fetch("/api/generateStory");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let storyText = "";

        if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            storyText += decoder.decode(value, { stream: true });
            setStory((prev) => prev + decoder.decode(value, { stream: true })); // Update story progressively
          }
        } else {
          console.error("Reader is undefined");
          setStory("Failed to load story.");
        }
      } catch (error) {
        console.error("Fetch error: ", error);
        setStory("Failed to load story.");
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  console.log("Story: ", story);

  return (
    <div className="w-full h-full justify-center items-center flex text-xl font-bold">
      {loading ? "Generating story..." : story || "SeventhSlide"}
    </div>
  );
};

export default SeventhSlide;
