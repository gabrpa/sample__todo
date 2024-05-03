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

interface ITodoDialogProps {
  open: boolean;
  title: string;
  description?: string;
  textfield?: TextFieldProps[];
  onSubmit: () => unknown;
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
    ...dialogProps
  } = props;
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
              name={field.name}
              type={field.type}

            />
          ))}
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={onSubmit}>{"Confirm"}</Button>
        <Button onClick={onClose}>{"Cancel"}</Button>
      </DialogActions>
    </Dialog>
  );
};
