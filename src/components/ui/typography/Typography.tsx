import { ComponentPropsWithoutRef, ElementType } from "react";

import s from "./Typography.module.scss";
import clsx from "clsx";

type TypographyProps<T extends ElementType = "p"> = {
  as?: T;
  isRequired?: boolean;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body_1"
    | "body_2"
    | "body_3"
    | "body_4"
    | "body_5"
    | "body_6"
    | "body_7"
    | "body_8"
    | "price_sale"
    | "button";
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "p">(
  props: TypographyProps<T>
) => {
  const {
    as: Component = "p",
    className,
    variant = "body_1",
    isRequired = false,
    ...rest
  } = props;

  return (
    <Component
      className={clsx(s[variant], isRequired && s.required, className)}
      {...rest}
    />
  );
};
