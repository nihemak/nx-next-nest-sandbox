import { Injectable } from '@nestjs/common';

import { data } from './app.dto';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to backend!' };
  }

  getCommonData() {
    return data;
  }
}
