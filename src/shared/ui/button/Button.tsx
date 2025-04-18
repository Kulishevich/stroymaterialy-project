import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";

import s from "./Button.module.scss";
import clsx from "clsx";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  variant?: "icon" | "secondary" | "primary" | "only_icon";
  active?: boolean;
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<T>;

export const Button = forwardRef(
  <T extends ElementType = "button">(
    props: ButtonProps<T>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const {
      as: Component = "button",
      className,
      type = "button",
      variant = "primary",
      active = false,
      fullWidth = false,
      ...rest
    } = props;

    return (
      <Component
        className={clsx(
          s.button,
          s[variant],
          className,
          active && s.active,
          fullWidth && s.fullWidth
        )}
        ref={ref}
        type={type}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";
