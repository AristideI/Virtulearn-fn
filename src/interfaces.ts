export enum Roles {
  MENTOR = "mentor",
  STUDENT = "student",
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  profilePicture: string;
  isMentor: boolean;
}

export interface UserDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePicture: string;
  isMentor: boolean;
  token: string;
  _id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courses: any[];
}

export interface formInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPwd: string;
  role: Roles;
  pfp: File;
}

export interface AuthContextProps {
  user: UserDto | null;
  token: string | null;
  isLogged: boolean;
  login: ({ user, token }: { user: UserDto; token: string }) => void;
  logout: () => void;
}