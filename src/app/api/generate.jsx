import openai from "../../utils/openai";

export default async function storyGenerator(topic, genre) {
    switch (genre) {
        case 'Sad':
            var prompt = `Weave a 500-word tale of sorrow and introspection, crafting a ${genre.toLowerCase()} narrative about ${topic}.`
            break;
        case 'Scary':
            var prompt = `Plunge into the depths of fear and suspense with a spine-chilling ${genre.toLowerCase()} story, set amidst the haunting backdrop of ${topic}`
            break;
        case 'Serious':
            var prompt = `Dive into the complexities of ${topic} with a ${genre.toLowerCase()} narrative that demands contemplation and reflection in 500 words`
            break;
        case 'Adventurous':
            var prompt = `Embark on an exhilarating journey through ${topic}, infusing the spirit of adventure into your 500-word ${genre.toLowerCase()} narrative.`
            break;
        case 'Nothing':
            var prompt = `Craft a 500-word narrative around ${topic}, embracing its essence without the constraints of genre.`;
            break;
    }

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ 
            role: 'user', 
            content: prompt }],
        model: 'gpt-3.5-turbo',
    });

    return chatCompletion.choices[0].message.content;
}