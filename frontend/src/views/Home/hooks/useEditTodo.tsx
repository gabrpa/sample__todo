import { useState } from "react";
import { ITodo, ITodoUpdate } from "../../../features/todo/interface";

interface IUseEditTodo {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleEditTodo: (id: number, data: ITodoUpdate) => any;
}

export const useEditTodo = (props: IUseEditTodo) => {
    const {handleEditTodo} = props;
    const [openEditTodoDialog, setOpenEditTodoDialog] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);

    const handleOpenEditTodoDialog = (todo: ITodo) => {
        setSelectedTodo(todo);
        setOpenEditTodoDialog(true);
    };

    const handleCloseEditTodoDialog = () => {
        setSelectedTodo(null);
        setOpenEditTodoDialog(false);
    }

    const _handleEditTodo = async (data: ITodoUpdate) => {
        await handleEditTodo(selectedTodo!.id, data)
    }

    return {
        openEditTodoDialog, 
        selectedTodo,
        setOpenEditTodoDialog,
        handleOpenEditTodoDialog,
        handleCloseEditTodoDialog,
        _handleEditTodo,
    }
}