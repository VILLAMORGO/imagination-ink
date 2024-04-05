import openai from "@/utils/openai";
import { NextApiRequest, NextApiResponse } from "next";

export default async function generateStory(NextApiRequest, NextApiResponse) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
    });

    // Send response back to the client
    console.log(chatCompletion.choices[0]);
}