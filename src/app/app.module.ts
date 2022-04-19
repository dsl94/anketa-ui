import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './components/auth/register/register.component';
import {AuthService} from "./services/auth.service";
import {TokenService} from "./services/token.service";
import {AuthInterceptor} from "./helpers/auth.interceptor";
import { LoginComponent } from './components/auth/login/login.component';
import {AuthGuard} from "./helpers/auth.guard";

const routes: Routes = [
  // osnovne rute
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: IndexComponent,
    canActivate: [AuthGuard],
    data: { roles: ['USER'] }
    },
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    AuthService,
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
