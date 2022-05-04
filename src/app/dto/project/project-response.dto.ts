import {RepositoryFieldEntity} from "./repository-field.entity";
import {ProjectMemberEntity} from "./project-member.entity";
import {ProjectTboardEntity} from "./project-tboard.entity";
import {DocumentLinkFieldEntity} from "./document-link-field.entity";
import {CustomFieldEntity} from "./custom-field.entity";

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
  taskBoardLinks: ProjectTboardEntity[];
  documentLinks: DocumentLinkFieldEntity[];
  customFields: CustomFieldEntity[];

  constructor(id: string, name: string, description: string, inProgress: boolean, startDate: Date, endDate: Date, createdAt: Date, repositoryFields: RepositoryFieldEntity[], team: ProjectMemberEntity[], taskBoardLinks: ProjectTboardEntity[], documentLinks: DocumentLinkFieldEntity[], customFields: CustomFieldEntity[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.inProgress = inProgress;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = createdAt;
    this.repositoryFields = repositoryFields == null ? [] : repositoryFields;
    this.team = team == null ? [] : team;
    this.taskBoardLinks = taskBoardLinks == null ? [] : taskBoardLinks;
    this.documentLinks = documentLinks == null ? [] : documentLinks;
    this.customFields = customFields == null ? [] : customFields;
  }
}
