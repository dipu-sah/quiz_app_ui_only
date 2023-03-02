import { HTMLInputTypeAttribute } from "react";
import { AppCheckBox } from "../AppCheckBox/AppCheckBox";
import { AppCheckBoxProps } from "../AppCheckBox/AppCheckBox.props";
import { AppDateAndTimePicker } from "../AppDateAndTimePicker/AppDateAndTimePicker";
import { AppDateAndTimePickerProps } from "../AppDateAndTimePicker/AppDateAndTimePicker.props";
import { AppRadioButtonProps } from "../AppRadioButtons/AppRadioButton.props";
import { AppRadioButtons } from "../AppRadioButtons/AppRadioButtons";
import { AppTextField } from "../AppTextField/AppTextField";
import { AppInputSwitcherProps } from "./AppInputSwitcher.props";
export function AppInputSwitcher({ type, ...props }: AppInputSwitcherProps) {
  const componentsForDifferentInputType: Record<
    HTMLInputTypeAttribute | "textarea",
    JSX.Element
  > = {
    number: <AppTextField {...props}></AppTextField>,
    button: <></>,
    checkbox: <AppCheckBox {...(props as AppCheckBoxProps)}></AppCheckBox>,
    color: <AppTextField {...props}></AppTextField>,
    date: (
      <AppDateAndTimePicker
        {...(props as AppDateAndTimePickerProps)}
      ></AppDateAndTimePicker>
    ),
    "datetime-local": <AppTextField {...props}></AppTextField>,
    email: <AppTextField {...props}></AppTextField>,
    file: <AppTextField {...props}></AppTextField>,
    hidden: <AppTextField {...props}></AppTextField>,
    image: <AppTextField {...props}></AppTextField>,
    month: <AppTextField {...props}></AppTextField>,
    password: <AppTextField {...props}></AppTextField>,
    radio: (
      <AppRadioButtons {...(props as AppRadioButtonProps)}></AppRadioButtons>
    ),
    range: <AppTextField {...props}></AppTextField>,
    reset: <AppTextField {...props}></AppTextField>,
    search: <AppTextField {...props}></AppTextField>,
    submit: <AppTextField {...props}></AppTextField>,
    tel: <AppTextField {...props}></AppTextField>,
    text: <AppTextField {...props}></AppTextField>,
    time: <AppTextField {...props}></AppTextField>,
    url: <AppTextField {...props}></AppTextField>,
    week: <AppTextField {...props}></AppTextField>,
    textarea: <AppTextField {...props} multiline rows={4}></AppTextField>,
  };
  return (
    <>
      {componentsForDifferentInputType[type.toLowerCase()] ||
        componentsForDifferentInputType["text"]}
    </>
  );
}
