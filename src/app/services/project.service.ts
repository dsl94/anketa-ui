import {Inject, Injectable} from '@angular/core';
import {ProfileDto} from "../dto/user/profile.dto";
import {ProjectResponseDto} from "../dto/project/project-response.dto";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {CreateProjectDto} from "../dto/project/create-project.dto";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getLoggedInUserProjects() {
    return this.http.get(this.baseUrl + '/projects').pipe(
      map((data: any) => data.map((item: any) => this.mapToProject(item))),
    );
  }

  createProject(dto: CreateProjectDto) {
    return this.http.post(this.baseUrl + '/projects', dto);
  }

  getProjectById(id: string) {
    return this.http.get(this.baseUrl + '/projects/' + id).pipe(
      map((data: any) => this.mapToProject(data))
    );
  }

  deleteProject(id: string) {
    return this.http.delete(this.baseUrl + "/projects/" + id);
  }

  private mapToProject(item: any) {
    return new ProjectResponseDto(
      item.id,
      item.name,
      item.description,
      item.inProgress,
      item.startDate,
      item.endDate,
      item.createdAt,
      item.repositoryFields,
      item.team
    );
  }
}
