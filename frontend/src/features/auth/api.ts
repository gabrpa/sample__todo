
import instance from "../../libs/axios/axios";
import { IAuthLogin, IAuthRegister } from "./interface";

export const register = async (data: IAuthRegister) => {
    return await instance.post('/auth/register', data);
}

export const login = async (data: IAuthLogin) => {
    return await instance.post('auth/login', data).then((res) => {
        const token = res.data['access_token'];
        sessionStorage.setItem('token', token);
    })
     
}