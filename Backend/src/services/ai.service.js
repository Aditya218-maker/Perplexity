import { ChatGoogle } from "@langchain/google";
const model = new ChatGoogle({
    model: "gemini-flash-latest", 
    apiKey: process.env.GOOGLE_API_KEY
});

export async function testAI() {
    try {
        const response = await model.invoke("what is Ai explain in 10 words?");
        console.log("AI Response:", response.content);
    } catch (error) {
        console.error("AI Fetch Error:", error);
    }
}
