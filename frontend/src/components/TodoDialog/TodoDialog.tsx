import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { UseFormReset, useForm } from "react-hook-form";
import yup, { AnyObject } from 'yup'

interface ITodoDialogProps {
  open: boolean;
  title: string;
  description?: string;
  textfield?: TextFieldProps[];
  schema: yup.ObjectSchema<AnyObject>;
  defaultValues?: AnyObject;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any, reset: UseFormReset<AnyObject>) => void;
  onClose: () => unknown;
}

export const TodoDialog = (props: ITodoDialogProps) => {
  const {
    open,
    title,
    description,
    textfield,
    onSubmit,
    onClose,
    schema,
    ...dialogProps
  } = props;

  const { handleSubmit, register, reset } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <Dialog open={open} onClose={onClose} {...dialogProps}>
      <DialogTitle sx={{ padding: 4}} variant="h3" textAlign={'center'}>{title}</DialogTitle>
      {description && (
        <DialogContentText textAlign={'center'}>{description}</DialogContentText>
      )}
      {textfield && (
        <DialogContent sx={{ padding: 2 }}>
          {textfield.map((field) => (
            <TextField
              sx={{ paddingBottom: 1 }}
              fullWidth
              required={field.required}
              label={field.label}
              {...register(field.name!)}
              type={field.type}

            />
          ))}
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={handleSubmit(async (data) => {
          await onSubmit(data, reset);
        })}>{"Confirm"}</Button>
        <Button onClick={onClose}>{"Cancel"}</Button>
      </DialogActions>
    </Dialog>
  );
};
