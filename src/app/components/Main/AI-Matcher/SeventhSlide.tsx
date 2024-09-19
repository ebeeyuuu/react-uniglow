import { useState, useEffect } from "react";
import { ollama, generateText } from "modelfusion";

const SeventhSlideComponent = () => {
  const [story, setStory] = useState<string>(""); // State to store the generated story
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading status

  const generateStory = async () => {
    setLoading(true);
    try {
      const text = await generateText({
        model: ollama
          .CompletionTextGenerator({
            model: "mistral:text", // Use mistral base model
            temperature: 0.7,
            maxGenerationTokens: 120,
          })
          .withTextPrompt(), // Ensures prompt formatting

        prompt: "Write a short story about a robot learning to love:\n\n",
      });

      setStory(text); // Set the generated story in the state
    } catch (error) {
      console.error("Error generating story:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateStory(); // Call the function when the component mounts
  }, []);

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h2 className="text-xl font-bold mb-4">
        Seventh Slide: Robot&apos;s Story
      </h2>
      {loading ? (
        <p>Generating story...</p>
      ) : (
        <p>{story}</p> // Display the generated story
      )}
    </div>
  );
};

export default SeventhSlideComponent;
