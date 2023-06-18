import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
//@UsePipes(new ValidationPipe())
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('createTask')
  create(@Body() createTask: CreateTaskDto) {
    return this.taskService.create(createTask);
  }

  @Get('todas')
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  //Actualiza un pedazo de la task
  @Patch('update/:id')
  
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
