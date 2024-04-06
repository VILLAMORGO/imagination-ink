import openai from "../../utils/openai";

export default async function storyRewriter(generatedResponse) {
    const topic = generatedResponse; // Assigning the response to the topic
    const genre = "funny"; // Assuming a default genre
    const prompt = `Can you rewrite this story ${topic} with a ${genre.toLowerCase()} genre?`;

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ 
            role: 'user', 
            content: prompt }],
        model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices[0].message.content;
}