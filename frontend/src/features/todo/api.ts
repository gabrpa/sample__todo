import instance from "../../libs/axios/axios"
import { ITodoCreate, ITodos } from "./interface";

export const getTodos = async (username: string) => {
    return await instance.get<ITodos>(`/todo/get-all/${username}`,).then((res) => {
        return res.data;
    })
}

export const createTodo = async (username: string, data: ITodoCreate) => {
    return await instance.post<ITodoCreate>(`todo/create/${username}`, data)
}