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
    endDate: null
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
        this.form.endDate = data.endDate.toString().slice(0, 10);
      });
    }
  }

  onSubmit() {
    const dto = new CreateProjectDto(
      this.form.name,
      this.form.description,
      this.form.inProgress,
      this.form.startDate,
      this.form.inProgress ? null : this.form.endDate
    );
    this.projectService.createProject(dto).subscribe(data => {
      this.toastr.success("Project created");
      this.router.navigate(['/central/projects']);
    },
      error => {
        const errm = error.error.message;
        this.errorMessage = Array.isArray(errm) ? errm[0] : errm;
        this.isRequestFailed = true;
      })
  }

  mapToForm(project: any) {
    console.log(project);

  }
}
