export class UpdateProfileDto {
  email: string;
  name: string;
  accountType: string


  constructor(email: string, name: string, accountType: string) {
    this.email = email;
    this.name = name;
    this.accountType = accountType;
  }
}
