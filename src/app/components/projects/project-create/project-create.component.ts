import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../services/project.service";
import {CreateProjectDto} from "../../../dto/project/create-project.dto";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  form: any = {
    name: null,
    description: null,
    inProgress: true,
    startDate: null,
    endDate: null,
    repositoryFields: [],
    team: []
  }

  id = null;

  isRequestFailed = false;
  errorMessage = '';

  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.projectService.getProjectById(this.id).subscribe((data) => {
        this.form.name = data.name;
        this.form.description = data.description;
        this.form.inProgress = data.inProgress;
        this.form.startDate = data.startDate.toString().slice(0, 10);
        if (this.form.endDate != null) {
          this.form.endDate = data.endDate.toString().slice(0, 10);
        }
        this.form.repositoryFields = data.repositoryFields;
        this.form.team = data.team;
      });
    }
  }

  onSubmit() {
    const dto = new CreateProjectDto(
      this.form.name,
      this.form.description,
      this.form.inProgress,
      this.form.startDate,
      this.form.inProgress ? null : this.form.endDate,
      this.form.repositoryFields,
      this.form.team
    );
    this.projectService.createProject(dto).subscribe(data => {
      this.toastr.success(this.id ? "Project saved" : "Project created");
      this.router.navigate(['/central/projects']);
    },
      error => {
        const errm = error.error.message;
        this.errorMessage = Array.isArray(errm) ? errm[0] : errm;
        this.isRequestFailed = true;
      })
  }

  pageName() {
    if (this.id) {
      return 'Project info';
    } else {
      return 'Create new project';
    }
  }

  // Repository
  addRepositoryField() {
    this.form.repositoryFields.push(
      {
        name: null,
        url: null
      }
    );
  }
  removeRepositoryField(i: number) {
    this.form.repositoryFields.splice(i, 1);
  }

  // Team
  addTeamField() {
    this.form.team.push(
      {
        name: null,
        position: null,
        stillOnTeam: true
      }
    );
  }
  removeTeamField(i: number) {
    this.form.team.splice(i, 1);
  }
}
