
import instance from "../../libs/axios/axios";
import { IAuthLogin, IAuthRegister } from "./interface";

export const register = async (data: IAuthRegister) => {
    await instance.post('/auth/register', data);
};

export const login = async (data: IAuthLogin) => {
    return await instance.post('auth/login', data).then((res) => {
        const { access_token, username } = res.data;
        sessionStorage.setItem('token', access_token);
        sessionStorage.setItem('username', username);
    });
}