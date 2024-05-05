import * as Yup from 'yup'
import { ITodoCreate, ITodoDelete, ITodoUpdate } from './interface'

export const todoCreateSchema = Yup.object<ITodoCreate>().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    date: Yup.date().optional(),
});

export const todoUpdateSchema = Yup.object<ITodoUpdate>().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    date: Yup.date().optional(),
    completed: Yup.boolean().optional()
});

export const todoDeleteSchema = Yup.object<ITodoDelete>().shape({
    id: Yup.number().required(),
})