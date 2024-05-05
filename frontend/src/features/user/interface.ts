export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}

export interface IUserUpdate extends Omit<IUser, 'password'> {}