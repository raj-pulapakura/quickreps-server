import { Injectable, Logger } from '@nestjs/common';
import { LlmService } from 'src/services/llm/llm.service';
import { createPromptGenerateRoutine } from './prompts/generate-routine-prompt';
import { Routine } from './entities/routine';

@Injectable()
export class ExerciseService {
  private logger = new Logger('ExerciseService');

  constructor(private readonly llmService: LlmService) {}

  async generateRoutine(durationInMinutes: number): Promise<Routine> {
    this.logger.debug('Generating routine...');
    const prompt = createPromptGenerateRoutine(durationInMinutes);
    const response = await this.llmService.generateJSON(prompt, 0.2);
    const routine = response.json as Routine;
    this.logger.log(`Routine: ${JSON.stringify(routine)}`);
    return routine;
  }
}
