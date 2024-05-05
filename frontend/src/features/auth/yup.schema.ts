import * as Yup from 'yup'
import { IAuthLogin, IAuthRegister } from './interface'

export const authRegisterSchema = Yup.object<IAuthRegister>().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required()
});

export const authLoginSchema = Yup.object<IAuthLogin>().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
})