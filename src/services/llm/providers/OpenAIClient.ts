import OpenAI from 'openai';
import * as fs from 'fs';

export default class OpenAIClient {
  static webTool = {
    type: 'function',
    function: {
      name: 'search_web',
      description: 'Find content on the Internet using a search engine.',
      parameters: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'The search query to send to the search engine',
          },
        },
        required: ['query'],
      },
    },
  };

  static async generateContent(
    prompt: string,
    modelName: string,
    temperature: number,
    images: string[],
    returnJson?: boolean,
  ): Promise<any> {
    const messages = [];
    messages.push({
      role: 'user',
      content: [{ type: 'text', text: prompt }],
    });

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const result = await client.chat.completions.create({
      model: modelName,
      temperature: temperature,
      messages: messages,
      response_format: {
        type: returnJson ? 'json_object' : 'text',
      },
    });

    return {
      content: result.choices[0].message.content,
      inputTokens: result.usage.prompt_tokens,
      outputTokens: result.usage.completion_tokens,
    };
  }
}
