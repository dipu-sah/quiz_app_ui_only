import { TextField, FormControl, FormLabel } from "@mui/material";
import { AppTextFieldProps } from "./AppTextField.props";

export function AppTextField({ label = "", ...props }: AppTextFieldProps) {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <TextField fullWidth {...props} />
    </FormControl>
  );
}
