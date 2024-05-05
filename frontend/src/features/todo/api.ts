import instance from "../../libs/axios/axios"
import { ITodoCreate, ITodos } from "./interface";

export const getTodos = async () => {
    return await instance.get<ITodos>('todo/get/all').then((res) => {
        return res.data;
    })
}

export const createTodo = async (data: ITodoCreate) => {
    return await instance.post<ITodoCreate>('todo/create', data)
}