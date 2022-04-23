import {Inject, Injectable} from '@angular/core';
import {ProfileDto} from "../dto/user/profile.dto";
import {ProjectResponseDto} from "../dto/project/project-response.dto";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

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

  private mapToProject(item: any) {
    return new ProjectResponseDto(
      item.id,
      item.name,
      item.description,
      item.inProgress,
      item.startDate,
      item.endDate,
      item.createdAt,
    );
  }
}
