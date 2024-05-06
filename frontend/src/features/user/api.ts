import instance from "../../libs/axios/axios"
import { IUserUpdate } from "./interface";

export const getUser = async (username: string | null) => {
    return await instance.get(`user/get/${username}`).then((res) => res.data);
};

export const updateUser = async (username: string, data: IUserUpdate) => {
    await instance.put(`/user/update/${username}`, data);
};