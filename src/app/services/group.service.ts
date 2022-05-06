import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {UpdateProfileDto} from "../dto/user/update-profile.dto";
import {ChangePasswordDto} from "../dto/user/change-password.dto";
import {ProfileDto} from "../dto/user/profile.dto";
import {AdminUserResponseDto} from "../dto/user/admin-user-response.dto";
import {GroupTableDto} from "../dto/group/group-table.dto";
import {CreateGroupDto} from "../dto/group/create-group.dto";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getGroups() {
    return this.http.get(this.baseUrl + '/group').pipe(
      map((data: any) => data.map((item: any) => this.mapToGroupTable(item))),
    );
  }

  // getUserById(id: string) {
  //   return this.http.get(this.baseUrl + '/users/' + id).pipe(
  //     map((data: any) => this.mapToAdminResp(data))
  //   );
  // }

  createGroup(dto: CreateGroupDto) {
    return this.http.post(this.baseUrl + '/group', dto);
  }

  private mapToGroupTable(item: any) {
    return new GroupTableDto(
      item.id,
      item.name,
     item.numberOfUsers
    );
  }
}
