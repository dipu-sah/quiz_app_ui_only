import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import { AppCheckBoxProps } from "./AppCheckBox.props";
export function AppCheckBox(props: AppCheckBoxProps) {
  const [selectedOptions, setSelectedOption] = useState<string[]>([]);
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
              checked={selectedOptions.findIndex((e) => e == value) >= 0}
              control={<Checkbox required={props.required && !!selectedOptions.length} />}
              label={label}
              value={value}
              onChange={(_, isChecked) => {
                if(isChecked){
                  setSelectedOption((e) => [
                    ...e.filter((x) => x !== value),
                    value,
                  ]);
                }else{
                  setSelectedOption((e) => [
                    ...e.filter((x) => x !== value),
                  ]);
                }
               
              }}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
}
