export type UserModel = {
  id: string;
  username?: string;
  name_first?: string;
  name_last?: string;
  email?: string | undefined;
  join_date: string;
  refresh_token?: string;
  id_token?: string;
  uid?: string;
};
