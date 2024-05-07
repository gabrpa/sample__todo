import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITodoCreate } from "../../../features/todo/interface";
import { UseFormReset } from "react-hook-form";
import { createTodo } from "../../../features/todo/api";

export const useCreateTodo = () => {
    const username = sessionStorage.getItem('username');
    const navigate = useNavigate();
    const [openCreateTodo, setOpenCreateTodo] = useState(false);

    const handleOpenCreateTodoDialog = () => {
        navigate("/home/todos");
        setOpenCreateTodo(true);
      };

    const handleCloseCreateTodoDialog = () => {
        setOpenCreateTodo(false);
    }

    const handleCreateTodo = async (
        data: ITodoCreate,
        reset: UseFormReset<ITodoCreate>
      ) => {
        await createTodo(username!, data);
        setOpenCreateTodo(false);
        reset();
      };

    return {
        openCreateTodo,
        handleOpenCreateTodoDialog,
        handleCloseCreateTodoDialog,
        handleCreateTodo,
    }
}