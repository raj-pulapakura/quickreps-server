import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExerciseModule } from './modules/exercise/exercise.module';

@Module({
  imports: [ExerciseModule],
  controllers: [AppController],
})
export class AppModule {}
