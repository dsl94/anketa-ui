import { Component, OnInit } from '@angular/core';
import {ProfileDto} from "../../../dto/user/profile.dto";
import {UserService} from "../../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {ProjectResponseDto} from "../../../dto/project/project-response.dto";
import {ProjectService} from "../../../services/project.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  searchText = '';
  projects: ProjectResponseDto[] = [];
  constructor(private projectService: ProjectService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.projectService.getLoggedInUserProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  getProjectStatus(inProgress: boolean) {
    if (inProgress) {
      return 'In progress';
    } else {
      return 'Finished';
    }
  }

  getProjectStatusColor(inProgress: boolean) {
    if (inProgress) {
      return 'text-info';
    } else {
      return 'text-success';
    }
  }
}
