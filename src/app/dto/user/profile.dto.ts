export class ProfileDto {
  id: string;
  email: string;
  name: string;
  accountType: string
  role: string


  constructor(id: string, email: string, name: string, accountType: string, role: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.accountType = accountType;
    this.role = role;
  }
}
