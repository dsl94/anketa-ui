export class RegisterDto {
  email: string;
  name: string;
  password: string;
  accountType: string;


  constructor(email: string, name: string, password: string, accountType: string) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.accountType = accountType;
  }
}
