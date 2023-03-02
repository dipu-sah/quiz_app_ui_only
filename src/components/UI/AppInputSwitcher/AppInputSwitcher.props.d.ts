import { Option } from "../../../@types/FormFieldOptions";
import { AppTextFieldProps } from "../AppTextField/AppTextField.props";

export interface AppInputSwitcherProps
  extends Omit<AppTextFieldProps, "value"> {
  type: string;
  value?: any;
  label?: string;
  options?: Option[];
}
