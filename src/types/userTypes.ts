export interface UserInterface {
  username: string;
  password: string;
}

export interface NewUserInterface extends UserInterface {
  email: string;
  firstname: string;
  lastname: string;
}
