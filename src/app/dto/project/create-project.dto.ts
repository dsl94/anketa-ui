import {RepositoryFieldEntity} from "./repository-field.entity";

export class CreateProjectDto {
  name: string;
  description: string;
  inProgress: boolean;
  startDate: Date;
  endDate: Date;
  repositoryFields: RepositoryFieldEntity[];

  constructor(name: string, description: string, inProgress: boolean, startDate: Date, endDate: Date, repositoryFields: RepositoryFieldEntity[]) {
    this.name = name;
    this.description = description;
    this.inProgress = inProgress;
    this.startDate = startDate;
    this.endDate = endDate;
    this.repositoryFields = repositoryFields;
  }
}
