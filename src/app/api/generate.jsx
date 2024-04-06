import openai from "../../utils/openai";

export default async function storyGenerator(topic, genre) {
    const prompt = `Write a 100 words ${genre.toLowerCase()} story about ${topic}.`;

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ 
            role: 'user', 
            content: prompt }],
        model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices[0].message.content;
}