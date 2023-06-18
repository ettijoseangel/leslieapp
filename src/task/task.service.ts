import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

  //Inyectar el repository en el constructor
  constructor (
    @InjectRepository(Task) private taskRepository: Repository <Task>
  ){}

  async create(createTask: CreateTaskDto) {
    const task = this.taskRepository.create(createTask);
    await this.taskRepository.save(task);
    return task;
  }

  findAll() {
    const tasks = this.taskRepository.find();
    return tasks;
  }
  //Funcion para encontrar a traves del number del ID
 async findOne(id: number) {
    const task = await this.taskRepository.findOne({where: {id}});
    if (!task){
      //return {msn: 'No encontrado'}
      throw new BadRequestException("Task no encontrada");
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    this.taskRepository.update(id, updateTaskDto);
    const task = await this.taskRepository.findOne({
      where: {id}
    });
    if (!task){
      //return {msn: 'No encontrado'}
      throw new BadRequestException("Task no encontrada");
    }
    return task;
  }

  remove(id: number) {
   this.taskRepository.delete(id);
  }

}
