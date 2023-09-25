import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose'
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://heCarlo:DKgBZTNo5lGE3lhQ@cluster0.q1wjgcr.mongodb.net/?retryWrites=true&w=majority'),
    TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 