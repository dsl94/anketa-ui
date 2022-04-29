import {RepositoryFieldEntity} from "./repository-field.entity";
import {ProjectMemberEntity} from "./project-member.entity";

export class CreateProjectDto {
  name: string;
  description: string;
  inProgress: boolean;
  startDate: Date;
  endDate: Date;
  repositoryFields: RepositoryFieldEntity[];
  team: ProjectMemberEntity[]

  constructor(name: string, description: string, inProgress: boolean, startDate: Date, endDate: Date, repositoryFields: RepositoryFieldEntity[], team: ProjectMemberEntity[]) {
    this.name = name;
    this.description = description;
    this.inProgress = inProgress;
    this.startDate = startDate;
    this.endDate = endDate;
    this.repositoryFields = repositoryFields;
    this.team = team;
  }
}
