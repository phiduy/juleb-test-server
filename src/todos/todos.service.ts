import { ForbiddenException, Injectable, ParseIntPipe } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from '../prisma/prisma.service';
import { TodoDto } from './dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async create(dto: TodoDto) {
    try {
      const todo = await this.prisma.todo.create({
        data: {
          note: dto.note,
        },
      });
      return todo;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException();
        }
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(id: string) {
    try {
      const result = await this.prisma.todo.findFirst({
        where: {
          id: {
            equals: parseInt(id),
          },
        },
      });
      if (!result) {
        throw new ForbiddenException('Id is not exist');
      }
      return {
        data: result,
        success: true,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException();
        }
      }
      throw error;
    }
  }

  async update(id: string, dto: TodoDto) {
    try {
      const { success } = await this.findOne(id);
      if (success) {
        const data = await this.prisma.todo.update({
          where: {
            id: parseInt(id),
          },
          data: {
            note: dto.note,
          },
        });

        return {
          data,
          success: true,
        };
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException();
        }
      }
      throw error;
    }
  }

  async delete(id: string) {
    try {
      const { success } = await this.findOne(id);
      if (!success) return;
      await this.prisma.todo.delete({
        where: {
          id: parseInt(id),
        },
      });
      return {
        success: true,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException();
        }
      }
      throw error;
    }
  }
}
