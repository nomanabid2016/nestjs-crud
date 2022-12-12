import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, ProjectDocument } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectModel.create(createProjectDto);
  }

  findAll() {
    return this.projectModel.find();
  }

  findOne(id: string) {
    return this.projectModel.findOne({ _id: id });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectModel.updateOne({ _id: id }, updateProjectDto);
  }

  remove(id: string) {
    return this.projectModel.deleteOne({ _id: id });
  }
}
