import { Component, OnInit } from '@angular/core';
import {ProfileDto} from "../../../dto/user/profile.dto";
import {UserService} from "../../../services/user.service";
import {UpdateProfileDto} from "../../../dto/user/update-profile.dto";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form: any = {
    email: '',
    name: '',
    accountType: 'PERSONAL',
  }
  errorMessage = '';
  requestFailed = false;

  profile: ProfileDto | undefined;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.userService.getProfile().subscribe(data => {
      this.profile = data;
      this.form.email = this.profile.email;
      this.form.name = this.profile.name;
      this.form.accountType = this.profile.accountType;
    });
  }

  onSubmit() {
    const dto = new UpdateProfileDto(this.form.email, this.form.name, this.form.accountType);
    this.userService.updateProfile(dto).subscribe(
      data => {
        this.toastr.success("Profile updated")
        this.loadData()
      },
      error => {
        const errm = error.error.message;
        this.errorMessage = Array.isArray(errm) ? errm[0] : errm;
        this.requestFailed = true;
      }
    )
  }

}
