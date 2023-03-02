import { TextFieldProps } from "@mui/material/TextField";
export interface AppTextFieldProps extends TextFieldProps {
  multiline?: boolean;
  rows?: number;
  label?: string;
  required?: boolean;
}
