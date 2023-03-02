import { RadioGroupProps } from "@mui/material";
import { Option } from "../../../@types/FormFieldOptions";
export interface AppRadioButtonProps extends RadioGroupProps {
  options?: Option[];
  label?: string;
  required?: boolean;
}
