import { Component, OnInit } from '@angular/core';
import {SurveyService} from "../../../services/survey.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-surveys-result',
  templateUrl: './surveys-result.component.html',
  styleUrls: ['./surveys-result.component.css']
})
export class SurveysResultComponent implements OnInit {
  id = '';
  survey: any = {}

  constructor(private surveyService: SurveyService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.surveyService.getResults(this.id).subscribe(data => {
      this.survey = data;
    })
  }

}
