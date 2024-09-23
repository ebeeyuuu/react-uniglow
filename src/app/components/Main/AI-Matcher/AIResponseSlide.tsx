import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useUniversityRecommendations } from "@/context/useUniversityRecommendation";
import Loader from "./AIResponseSlide/Loader";

function formatRecommendationsData(recommendations) {
  return (
    `I want you to become an expert university researcher and recommender. I have some information I need you to use to determine the best university possible. Give me only the university name when answering.\n` +
    `Subjects: ${recommendations.subjects.join(", ")}\n` +
    `Detailed Subjects: ${recommendations.detailedSubjects.join(", ")}\n` +
    `Ideal Area Type: ${recommendations.idealArea}\n` +
    `Ideal Countries: ${recommendations.idealCountries.join(", ")}\n` +
    `Support Services: ${recommendations.supportServices.join(", ")}\n` +
    `Importance of culture in the surrounding environment: ${recommendations.cultureImportance}/100 \n` +
    `Importance of the prestige, reputation, and ranking of the university: ${recommendations.prestigeImportance}/100\n` +
    `Format your answer to be like this: Based on your answers, Uniglow recommends you to go to: ... (university only)`
  );
}

function areRecommendationsFilled(recommendations) {
  return (
    recommendations.subjects?.length > 0 &&
    recommendations.detailedSubjects?.length > 0 &&
    recommendations.idealArea !== "" &&
    recommendations.idealCountries?.length > 0 &&
    recommendations.supportServices?.length > 0
  );
}

const AIResponseSlide = () => {
  const { recommendations } = useUniversityRecommendations();
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  const texts = [
    "Thinking of the best university for you right now...",
    "Analysing your preferences...",
    "Comparing universities globally...",
    "Checking subjects offered...",
    "Looking at the support services offered...",
    "Finalising the best university for you...",
  ];

  const fetchResponse = async (promptToSend: string) => {
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

  const formattedRecommendations = recommendations
    ? formatRecommendationsData(recommendations)
    : "Loading recommendations...";

  useEffect(() => {
    if (loading && currentTextIndex < texts.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 7500);
      return () => clearTimeout(timeout);
    }
  }, [loading, currentTextIndex, texts.length]);

  useEffect(() => {
    if (recommendations && areRecommendationsFilled(recommendations)) {
      const promptToSend = formatRecommendationsData(recommendations);
      fetchResponse(promptToSend);
    }
  }, [recommendations]);

  return (
    <div className="w-full h-full justify-center items-center gap-6 flex flex-col text-xl font-bold">
      <div className="flex justify-center items-center px-20 font-light text-lg">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center gap-6"
          >
            <Loader />
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-medium italic"
            >
              {texts[currentTextIndex]}
            </motion.p>
          </motion.div>
        ) : (
          response || formattedRecommendations
        )}
      </div>
    </div>
  );
};

export default AIResponseSlide;
