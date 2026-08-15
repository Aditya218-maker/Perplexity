import { ChatGoogle } from "@langchain/google";

// Latest model setup
const model = new ChatGoogle({
    model: "gemini-flash-latest", // ⚡ Latest & Superfast model
    apiKey: process.env.GEMINI_API_KEY
});

export async function testAI() {
    try {
        const response = await model.invoke("what is Ai explain in 10 words?");
        
        // 🎯 LangChain mein output `content` property mein hota hai!
        console.log("AI Response:", response.content);
    } catch (error) {
        console.error("AI Fetch Error:", error);
    }
}
