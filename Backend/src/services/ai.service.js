import { ChatGoogleGenerativeAI } from "@langchain/google-genai"

const model = new ChatGoogleGenerativeAI({
    model:"gemini 2.5",
    apiKey:"yourkey"
})