import OpenAI from 'openai';

const secretKey = process.env.NEXT_PUBLIC_OPENAI_KEY

const openai = new OpenAI({
  apiKey: secretKey, 
  dangerouslyAllowBrowser: true
});

export default openai