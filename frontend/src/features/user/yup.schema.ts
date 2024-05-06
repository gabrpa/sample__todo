import * as Yup from 'yup';
import { IUserUpdate } from "./interface";

export const userProfileSchema = Yup.object<IUserUpdate>().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
})