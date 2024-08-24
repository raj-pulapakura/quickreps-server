import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { LlmService } from './services/llm/llm.service';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    ExerciseModule,
  ],
  providers: [LlmService],
  controllers: [AppController],
})
export class AppModule {}
