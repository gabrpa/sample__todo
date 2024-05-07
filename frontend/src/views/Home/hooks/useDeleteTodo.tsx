import { useState } from "react";

interface IUseDeleteTodo {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleDeleteTodo: (id: number) => any;
}

export const useDeleteTodo = (props: IUseDeleteTodo) => {
    const { handleDeleteTodo } = props;
    const [openDeleteTodoDialog, setOpenDeleteTodoDialog] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState<number | null>(null);

    const handleOpenDeleteTodoDialog = (id: number) => {
        setSelectedTodo(id);
        setOpenDeleteTodoDialog(true);
    };

    const handleCloseDeleteTodoDialog = () => {
        setSelectedTodo(null);
        setOpenDeleteTodoDialog(false);
    }

    const _handleDeleteTodo = async () => {
        await handleDeleteTodo(selectedTodo!)
    }

    return {
        openDeleteTodoDialog,
        selectedTodo,
        setOpenDeleteTodoDialog,
        handleOpenDeleteTodoDialog,
        handleCloseDeleteTodoDialog,
        _handleDeleteTodo,
    }
}