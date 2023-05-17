export type UserLoginCredentials = {
  email: string;
  password: string;
  FCMToken:string;
  isDevice:boolean;
};

export type UserLogoutCredential={
  FCMToken:any;
  userId: any;
}