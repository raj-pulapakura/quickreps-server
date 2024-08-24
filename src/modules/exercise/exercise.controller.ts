import { Body, Controller, Post } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { GenerateRoutineDto } from './dto/generate-routine.dto';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post('generate-routine')
  async generateRoutine(@Body() body: GenerateRoutineDto) {
    const { durationInMinutes } = body; 
    return this.exerciseService.generateRoutine(durationInMinutes);
  }
}
