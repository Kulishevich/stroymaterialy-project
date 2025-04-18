import {
  Control,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { Select, SelectProps } from "../select";

export type ControlledSelectProps<T extends FieldValues> = {
  control: Control<T>;
} & Omit<SelectProps, "onBlur" | "onChange" | "onValueChange" | "value"> &
  Omit<UseControllerProps<T>, "control" | "defaultValue" | "rules">;

export const ControlledSelect = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...props
}: ControlledSelectProps<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  });

  return (
    <Select {...props} onValueChange={onChange} value={value} {...field} />
  );
};
