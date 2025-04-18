import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useId,
} from "react";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { clsx } from "clsx";

import s from "./Checkbox.module.scss";
import { Typography, Variant } from "../typography";
import { CheckMarkIcon } from "@/shared/assets/icons";

export type CheckboxProps = {
  error?: string;
  isRequired?: boolean;
  label?: ReactNode;
  labelText?: Variant;
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>;

type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>;

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const {
    className,
    disabled,
    error,
    isRequired,
    label,
    labelText = "body_3",
    variant = "primary",
    ...rest
  } = props;
  const checkboxId = useId();

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <RadixCheckbox.Root
          className={clsx(s.root, s[variant], error && s.error)}
          disabled={disabled}
          id={checkboxId}
          ref={ref}
          {...rest}
        >
          <RadixCheckbox.Indicator
            className={clsx(s.indicator, s[variant], disabled && s.disabled)}
          >
            {variant === "primary" && (
              <CheckMarkIcon
                className={clsx(s.icon, disabled && s.disabledIcon)}
              />
            )}
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && (
          <Typography
            as={"label"}
            variant={labelText}
            className={clsx(
              s.label,
              s[variant],
              className,
              disabled && s.disabled
            )}
            htmlFor={checkboxId}
            isRequired={isRequired}
          >
            {label}
          </Typography>
        )}
      </div>
      {error && (
        <Typography as={"span"} className={s.errorMessage} variant="body_6">
          {error}
        </Typography>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";
