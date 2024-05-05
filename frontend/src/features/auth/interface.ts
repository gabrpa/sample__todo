import { IUser } from "../user/interface";

export interface IAuthRegister extends Omit<IUser, 'id'> {}

export interface IAuthLogin extends Omit<IAuthRegister, 'firstName' | 'lastName'> {}