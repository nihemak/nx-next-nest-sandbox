import { Controller, Get, Request } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('data')
  getCommonData() {
    return this.appService.getCommonData();
  }

  @Get('search')
  getSearch(
    @Request() request
  ) {
    const q = (request.query.q ?? '').toLowerCase();
    return this.appService.getCommonData().filter(( { name } ) => name.toLowerCase().includes(q));
  }
}
