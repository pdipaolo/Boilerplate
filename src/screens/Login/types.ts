type PropsTypes = {
  user: UserType | null;
};

type UserType = {
  email: string;
  displayName?: string;
  name?: string;
  lastname?: string;
  city?: string;
  address?: string;
  uid: string;
}
export { type PropsTypes, type UserType };
