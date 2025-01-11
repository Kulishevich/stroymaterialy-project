import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";

import s from "./Button.module.scss";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  variant?: "icon" | "secondary" | "primary";
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
      ...rest
    } = props;

    return (
      <Component
        className={`${s.button} ${s[variant]} ${className}`}
        ref={ref}
        type={type}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";
