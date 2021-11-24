import { Injectable } from '@nestjs/common';

import { CommonData, data } from './app.dto';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to backend!' };
  }

  getCommonData(): CommonData[] {
    return data;
  }
}
