import {RepositoryFieldEntity} from "./repository-field.entity";
import {ProjectMemberEntity} from "./project-member.entity";
import {ProjectTboardEntity} from "./project-tboard.entity";
import {DocumentLinkFieldEntity} from "./document-link-field.entity";
import {CustomFieldEntity} from "./custom-field.entity";

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
  customFields: CustomFieldEntity[];

  constructor(name: string, description: string, inProgress: boolean, startDate: Date, endDate: Date, repositoryFields: RepositoryFieldEntity[], team: ProjectMemberEntity[], taskBoardLinks: ProjectTboardEntity[], documentLinks: DocumentLinkFieldEntity[], customFields: CustomFieldEntity[]) {
    this.name = name;
    this.description = description;
    this.inProgress = inProgress;
    this.startDate = startDate;
    this.endDate = endDate;
    this.repositoryFields = repositoryFields;
    this.team = team;
    this.taskBoardLinks = taskBoardLinks;
    this.documentLinks = documentLinks;
    this.customFields = customFields;
  }
}
