import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import { RadioCards, RadioCardsProps } from "../radio-cards";

export type ControlledRadioProps<T extends FieldValues> = Omit<
  RadioCardsProps,
  "asChild" | "defaultValue" | "disabled" | "name" | "onValueChange" | "value"
> &
  UseControllerProps<T>;

export const ControlledRadioCards = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  options,
  rules,
  shouldUnregister,
  ...props
}: ControlledRadioProps<T>) => {
  const {
    field: { onChange, ...field },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  });

  return (
    <RadioCards
      onValueChange={onChange}
      options={options}
      {...props}
      {...field}
    />
  );
};
