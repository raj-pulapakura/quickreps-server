import { Injectable } from '@nestjs/common';
import OpenAIClient from './providers/OpenAIClient';
import { Models } from './schema/model.enum';

@Injectable()
export class LlmService {
  webTool = {
    name: 'search_web',
    description:
      'Perform a web search using the Bing search engine and retrieve a list of relevant results based on the provided query.',
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
  };

  async generateJSON(
    prompt: string,
    temperature: number = 0.2,
    images: string[] = [],
  ): Promise<{ json: any; inputTokens: number; outputTokens: number }> {
    let result = {
      json: null,
      inputTokens: 0,
      outputTokens: 0,
    };

    let jsonString = '';
    let response: any = null;

    response = await OpenAIClient.generateContent(
      prompt,
      Models.gpt_4o,
      temperature,
      images,
      true,
    );

    if (response) {
      jsonString = response.content;
      result.inputTokens = response.inputTokens;
      result.outputTokens = response.outputTokens;
    }

    try {
      // clean up
      jsonString = jsonString.replace(/^[^{\[]*/, '').replace(/[^}\]]*$/, '');
      // parse
      result.json = JSON.parse(jsonString);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
