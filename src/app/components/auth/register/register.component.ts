import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {RegisterDto} from "../../../dto/auth/register.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    email: null,
    name: null,
    accountType: 'PERSONAL',
    password: null,
  };
  registerFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const register = new RegisterDto(
      this.form.email,
      this.form.name,
      this.form.password,
      this.form.accountType
    );
    this.authService.register(register).subscribe((data) => {
      this.router.navigate(['/login']);
    },
      error => {
        const errm = error.error.message;
        this.errorMessage = Array.isArray(errm) ? errm[0] : errm;
        this.registerFailed = true;
      });
  }

}
