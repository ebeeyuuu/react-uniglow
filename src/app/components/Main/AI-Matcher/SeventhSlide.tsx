import { useState, useEffect } from "react";
import { useUniversityRecommendations } from "@/context/useUniversityRecommendation";

function formatRecommendationsData(recommendations) {
  return (
    `I want you to become an expert university researcher and recommender. I have some information I need you to use to determine the best university possible. Give me only the university name when answering.\n` +
    `Subjects: ${recommendations.subjects.join(", ")}\n` +
    `Detailed Subjects: ${recommendations.detailedSubjects.join(", ")}\n` +
    `Ideal Area Type: ${recommendations.idealArea}\n` +
    `Ideal Countries: ${recommendations.idealCountries.join(", ")}\n` + // Corrected from ideaCountries to idealCountries
    `Support Services: ${recommendations.supportServices.join(", ")}`
  );
}

const SeventhSlide = () => {
  const { recommendations } = useUniversityRecommendations();
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("Enter any prompt here");

  const fetchResponse = async (promptToSend) => {
    setLoading(true);
    setResponse("");

    try {
      const response = await fetch("/api/generateResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptToSend }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          setResponse((prev) => prev + decoder.decode(value, { stream: true }));
        }
      } else {
        console.error("Reader is undefined.");
        setResponse("Failed to load response.");
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      setResponse("Failed to load response.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchResponse(prompt);
  };

  // Ensure recommendations are available before formatting
  const formattedRecommendations = recommendations
    ? formatRecommendationsData(recommendations)
    : "Loading recommendations...";

  // Automatically fetch response on component mount
  useEffect(() => {
    if (recommendations) {
      const promptToSend = formatRecommendationsData(recommendations);
      fetchResponse(promptToSend);
    }
  }, [recommendations]);

  return (
    <div className="w-full h-full justify-center items-center gap-6 flex flex-col text-xl font-bold">
      <form onSubmit={handleSubmit} className="mb-4 px-20">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border mb-4 w-full bg-black text-white px-8 py-5 rounded-xl"
          placeholder="Enter your prompt here"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#003dcc] text-white rounded-xl"
        >
          Get Response
        </button>
      </form>
      <div className="flex justify-center items-center px-20 font-light text-lg">
        {loading
          ? "Generating response..."
          : response || formattedRecommendations}
      </div>
    </div>
  );
};

export default SeventhSlide;
