import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello please open http://localhost:3000/api for swagger api';
  }
}
