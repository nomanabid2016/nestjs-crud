import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;
@Schema()
export class Project {
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ type: String })
  description: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
