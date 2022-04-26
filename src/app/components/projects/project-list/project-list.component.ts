import { Component, OnInit } from '@angular/core';
import {ProfileDto} from "../../../dto/user/profile.dto";
import {UserService} from "../../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {ProjectResponseDto} from "../../../dto/project/project-response.dto";
import {ProjectService} from "../../../services/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  searchText = '';
  projects: ProjectResponseDto[] = [];
  constructor(private projectService: ProjectService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
   this.loadData();
  }

  loadData() {
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

  goToCreate() {
    this.router.navigate(['/central/project-create']);
  }

  delete(id: string) {
    this.projectService.deleteProject(id).subscribe(data => {
      this.toastr.info("Project deleted");
      this.loadData();
    },
      error => {
        this.toastr.error("Problem with deleting project");
      });
  }

  getPosition(i: number) {
    if (i==1) {
      return 'left';
    }
    if (i>1 && (i-1)%3 == 0) {
      return 'left';
    }
    return 'top';
  }
}
