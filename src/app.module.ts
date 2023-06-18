import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'localhost',
      port: 5432,
      //port: 54732,
      username: 'postgres',
      password: 'password',
      database: 'proyecto',
      autoLoadEntities: true,
      synchronize: true 
    }),
    TaskModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
