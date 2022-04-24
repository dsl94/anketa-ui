export class CreateProjectDto {
  name: string;
  description: string;
  inProgress: boolean;
  startDate: Date;
  endDate: Date;


  constructor(name: string, description: string, inProgress: boolean, startDate: Date, endDate: Date) {
    this.name = name;
    this.description = description;
    this.inProgress = inProgress;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
