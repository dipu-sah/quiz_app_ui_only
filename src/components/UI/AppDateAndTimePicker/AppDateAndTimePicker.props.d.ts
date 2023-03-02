import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
export interface AppDateAndTimePickerProps extends DatePickerProps<Date> {
  value: string;
  label?: string;
}
