import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {GroupTableDto} from "../dto/group/group-table.dto";
import {GroupDetailsDto} from "../dto/group/group-details.dto";
import {SurveyTableDto} from "../dto/survey/survey-table.dto";
import {CreateGroupDto} from "../dto/group/create-group.dto";
import {CreateSurveyDto} from "../dto/survey/create-survey.dto";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getSurveys() {
    return this.http.get(this.baseUrl + '/survey').pipe(
      map((data: any) => data.map((item: any) => this.mapToSurveyTable(item))),
    );
  }

  createSurvey(dto: CreateSurveyDto) {
    return this.http.post(this.baseUrl + '/survey', dto);
  }

  removeSurvey(id: string) {
    return this.http.delete(this.baseUrl + '/survey/' + id);
  }

  private mapToSurveyTable(item: any) {
    return new SurveyTableDto(
      item.id,
      item.name,
      item.numberOfGroups
    );
  }

  // private mapDetails(item: any) {
  //   return new GroupDetailsDto(
  //     item.id,
  //     item.name,
  //     item.numberOfUsers,
  //     item.users
  //   );
  // }
}
