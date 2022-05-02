import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {ProfileDto} from "../../../dto/user/profile.dto";
import {AdminUserResponseDto} from "../../../dto/user/admin-user-response.dto";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: AdminUserResponseDto[] = [];
  dtOptions: DataTables.Settings = {};
  fetched: boolean = false;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      lengthMenu: [5, 10, 25],
      processing: true,
      order: []
    };

    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
      this.fetched = true;
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
