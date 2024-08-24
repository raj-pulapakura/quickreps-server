import { Module } from '@nestjs/common';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { LlmService } from 'src/services/llm/llm.service';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService, LlmService],
  exports: [ExerciseService],
})
export class ExerciseModule {}
