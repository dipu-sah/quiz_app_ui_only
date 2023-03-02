import { Button, IconButton } from "@mui/material";
import { AppButtonProps } from "./AppButtons.props";

export function AppButtons({
  iconOnly = false,
  ...buttonProps
}: AppButtonProps) {
  if (iconOnly) {
    return <IconButton {...buttonProps}>{buttonProps.children} </IconButton>;
  }
  return <Button fullWidth {...buttonProps}></Button>;
}
