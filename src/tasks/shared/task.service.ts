import { Injectable } from '@nestjs/common';
import { Task } from './tasks';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';


@Injectable()
export class TaskService {

    constructor(@InjectModel('Task') private taskModel: Model<Task>) { }

    async getAll() {
        return await this.taskModel.find().exec();
    }

    async getById(id: string) {
        return await this.taskModel.findById(id).exec();
    }

    async create(task: Task) {
        const createdTask = new this.taskModel(task);
        return await createdTask.save();
    }

    async update(id: string, task: Task){
        await this.taskModel.updateOne({_id: id }, task).exec()
        return this.getById
    }

    async delete(id: string): Promise<DeleteResult> {
        return await this.taskModel.deleteOne({ _id: id }).exec();
      }      
}