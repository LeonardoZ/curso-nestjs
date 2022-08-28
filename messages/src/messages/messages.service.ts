import { Injectable } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messageRepository: MessagesRepository) {}

  async findOne(id: string): Promise<any> {
    return this.messageRepository.findOne(id);
  }
  async findAll() {
    return this.messageRepository.findAll();
  }
  async create(message: CreateMessageDTO) {
    return this.messageRepository.create(message.content);
  }
}
