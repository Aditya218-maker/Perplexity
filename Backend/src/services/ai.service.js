import { ChatGoogle } from "@langchain/google";
import { HumanMessage } from "@langchain/core/messages";

const model = new ChatGoogle({
    model: "gemini-flash-latest", 
    apiKey: process.env.GOOGLE_API_KEY
});

export async function generateResponse(message) {
    const response = await model.invoke([
        new HumanMessage(message)
    ]);
    return response.content;
}
