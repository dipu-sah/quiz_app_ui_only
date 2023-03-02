import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AppRadioButtonProps } from "./AppRadioButton.props";
import { List, ListItem } from "@mui/material";
export function AppRadioButtons({
  options = [],
  ...radioGroupProps
}: AppRadioButtonProps) {
  return (
    <FormControl fullWidth>
      <FormLabel>{radioGroupProps.label}</FormLabel>

      <RadioGroup>
        <List>
          {options.map((e, index) => {
            let value = "";
            let label = "";
            if (typeof e == "string") {
              label = e;
              value = e;
            } else {
              label = e.label;
              value = e.value || e.label;
            }
            return (
              <ListItem divider key={index} className="w-full">
                <FormControlLabel
                  className="w-full"
                  value={value}
                  control={<Radio required={radioGroupProps.required} />}
                  label={label}
                />
              </ListItem>
            );
          })}
        </List>
      </RadioGroup>
    </FormControl>
  );
}
