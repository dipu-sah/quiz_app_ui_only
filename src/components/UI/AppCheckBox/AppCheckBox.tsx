import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
} from "@mui/material";
import { AppCheckBoxProps } from "./AppCheckBox.props";
export function AppCheckBox(props: AppCheckBoxProps) {
  return (
    <FormControl fullWidth>
      <FormLabel>{props.label}</FormLabel>
      <FormGroup>
        {props.options?.map((e, index) => {
          let label = "";
          let value = "";
          if (typeof e == "string") {
            label = e;
            value = e;
          } else {
            label = e.label;
            value = e.value || e.label;
          }
          return (
            <FormControlLabel
              key={index}
              control={<Checkbox required={true} />}
              label={label}
              value={value}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
}
