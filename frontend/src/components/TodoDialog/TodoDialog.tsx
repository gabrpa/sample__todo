import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, UseFormReset, useForm } from "react-hook-form";
import yup, { AnyObject } from "yup";

interface ITodoDialogProps {
  open: boolean;
  title: string;
  description?: string;
  textfield?: TextFieldProps[];
  datetime?: TextFieldProps[];
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
    datetime,
    onSubmit,
    onClose,
    schema,
    ...dialogProps
  } = props;

  const { handleSubmit, register, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Dialog open={open} onClose={onClose} {...dialogProps}>
      <DialogTitle sx={{ padding: 4 }} variant="h3" textAlign={"center"}>
        {title}
      </DialogTitle>
      {description && (
        <DialogContentText textAlign={"center"}>
          {description}
        </DialogContentText>
      )}
      {textfield && (
        <DialogContent sx={{ padding: 2 }}>
          {textfield.map((field) => (
            <TextField
              key={field.name}
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
      {datetime && (
        <DialogContent sx={{ padding: 2 }}>
          {datetime.map((date) => (
            <FormControl key={date.name}>
              <Controller
                name={date.name!}
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    label={date.label}
                    slotProps={{
                      textField: {
                        size: "small",
                        InputLabelProps: { shrink: true },
                      },
                    }}
                  />
                )}
              />
            </FormControl>
          ))}
        </DialogContent>
      )}
      <DialogActions>
        <Button
          onClick={handleSubmit(async (data) => {
            await onSubmit(data, reset);
          })}
        >
          {"Confirm"}
        </Button>
        <Button onClick={onClose}>{"Cancel"}</Button>
      </DialogActions>
    </Dialog>
  );
};
