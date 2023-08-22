export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profileUrl?: string;
};

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: string;
  status: "online" | "offline";
  newMessages: object;
}
