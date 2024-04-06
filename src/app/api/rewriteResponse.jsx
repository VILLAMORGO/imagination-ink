import openai from "../../utils/openai";

export default async function storyRewriter(generatedResponse) {
    const topic = generatedResponse; 
    const genre = "funny"; 
    const prompt = `Inject a dose of humor into this narrative: ${topic}, transforming it into a ${genre.toLowerCase()} masterpiece!`;

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ 
            role: 'user', 
            content: prompt }],
        model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices[0].message.content;
}