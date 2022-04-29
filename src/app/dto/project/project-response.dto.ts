import {RepositoryFieldEntity} from "./repository-field.entity";
import {ProjectMemberEntity} from "./project-member.entity";

export class ProjectResponseDto {
  id: string;
  name: string;
  description: string;
  inProgress: boolean;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  repositoryFields: RepositoryFieldEntity[];
  team: ProjectMemberEntity[];

  constructor(id: string, name: string, description: string, inProgress: boolean, startDate: Date, endDate: Date, createdAt: Date, repositoryFields: RepositoryFieldEntity[], team: ProjectMemberEntity[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.inProgress = inProgress;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.repositoryFields = repositoryFields == null ? [] : repositoryFields;
    this.team = team == null ? [] : team;
  }
}
