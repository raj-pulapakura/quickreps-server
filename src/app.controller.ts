import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  healthCheck() {
    return {
      message: 'API is up and running',
    };
  }
}
