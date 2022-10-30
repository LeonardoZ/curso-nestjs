import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { Report } from './report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportsRepository: Repository<Report>,
  ) {}

  create(createReportDto: CreateReportDto, user: User) {
    const report = this.reportsRepository.create(createReportDto);
    report.user = user;
    return this.reportsRepository.save(report);
  }

  createEstimate({ make, model, lat, lng, year, mileage }: GetEstimateDto) {
    return this.reportsRepository
      .createQueryBuilder()
      .select('*')
      .where('make = :make', { make })
      .andWhere('make = :make', { model })
      .andWhere('lat - :lat between -5 and 5', { lat })
      .andWhere('lng - :lng between -5 and 5', { lng })
      .andWhere('year - :year between -3 and 3', { year })
      .andWhere('approved IS true')
      .orderBy('ABS(mileage - :mileage)', 'DESC')
      .setParameters({ mileage })
      .getRawMany();
  }

  async changeApproval(id: string, approved: boolean) {
    const report = await this.reportsRepository.findOne({
      where: { id: parseInt(id) },
    });

    if (!report) {
      throw new NotFoundException('Report not found');
    }
    report.approved = approved;
    return this.reportsRepository.save(report);
  }
}
