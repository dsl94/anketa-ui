import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './components/auth/register/register.component';
import {AuthService} from "./services/auth.service";
import {TokenService} from "./services/token.service";
import {AuthInterceptor} from "./helpers/auth.interceptor";
import { LoginComponent } from './components/auth/login/login.component';
import {AuthGuard} from "./helpers/auth.guard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { MainComponent } from './components/main/main.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import {UserService} from "./services/user.service";
import { UserListComponent } from './components/users/user-list/user-list.component';
import {DataTablesModule} from "angular-datatables";

const routes: Routes = [
  // osnovne rute
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  {
    path: 'central',
    component: MainComponent,
    canActivate: [AuthGuard],
    data: { roles: ['USER'] },
    children: [
      {path: 'profile', component: ProfileComponent}
    ]
    },
  {
    path: 'admin',
    component: MainComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
    children: [
      {path: 'users', component: UserListComponent}
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    AuthService,
    TokenService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
