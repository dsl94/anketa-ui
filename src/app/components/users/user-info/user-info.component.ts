import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {ProfileDto} from "../../../dto/user/profile.dto";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: any = undefined;
  userId: string = '';

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.user = data;
    });
  }

  getRoleName(role: string) {
    switch (role) {
      case 'ADMIN':
        return 'Administrator';
      case 'USER':
        return 'User'
      default:
        return 'Unknown';
    }
  }

  getAccountType(acc: string) {
    switch (acc) {
      case 'PERSONAL':
        return 'Personal';
      case 'ORGANIZATION':
        return 'Organization'
      default:
        return 'Unknown';
    }
  }

  getAccountColor(acc: string) {
    switch (acc) {
      case 'PERSONAL':
        return 'primary';
      case 'ORGANIZATION':
        return 'info'
      default:
        return 'warning';
    }
  }

}
