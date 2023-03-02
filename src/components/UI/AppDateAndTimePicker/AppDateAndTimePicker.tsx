import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AppDateAndTimePickerProps } from "./AppDateAndTimePicker.props";
import { FormControl, FormLabel } from "@mui/material";
export function AppDateAndTimePicker({
  label = "",
  ...props
}: AppDateAndTimePickerProps) {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <DateTimePicker
        renderInput={(params) => <TextField {...params} />}
        onChange={(e, v) => {
          console.log(e);
        }}
        {...props}
      />
    </FormControl>
  );
}
