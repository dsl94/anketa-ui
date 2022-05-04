import {RepositoryFieldEntity} from "./repository-field.entity";
import {ProjectMemberEntity} from "./project-member.entity";
import {ProjectTboardEntity} from "./project-tboard.entity";
import {DocumentLinkFieldEntity} from "./document-link-field.entity";

export class CreateProjectDto {
  name: string;
  description: string;
  inProgress: boolean;
  startDate: Date;
  endDate: Date;
  repositoryFields: RepositoryFieldEntity[];
  team: ProjectMemberEntity[];
  taskBoardLinks: ProjectTboardEntity[];
  documentLinks: DocumentLinkFieldEntity[];

  constructor(name: string, description: string, inProgress: boolean, startDate: Date, endDate: Date, repositoryFields: RepositoryFieldEntity[], team: ProjectMemberEntity[], taskBoardLinks: ProjectTboardEntity[], documentLinks: DocumentLinkFieldEntity[]) {
    this.name = name;
    this.description = description;
    this.inProgress = inProgress;
    this.startDate = startDate;
    this.endDate = endDate;
    this.repositoryFields = repositoryFields;
    this.team = team;
    this.taskBoardLinks = taskBoardLinks;
    this.documentLinks = documentLinks;
  }
}
