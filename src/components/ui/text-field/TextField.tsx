import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useEffect,
  useId,
  useRef,
} from "react";

import clsx from "clsx";

import s from "./TextField.module.scss";
import { Typography } from "../typography";
import { SearchIcon } from "@/assets/icons";

export type TextFieldProps = {
  errorMessage?: ReactNode | string;
  isRequired?: boolean;
  label?: string;
  variant?: "input_field" | "search_field";
} & ComponentPropsWithoutRef<"input">;

type TextFieldRef = ElementRef<"input">;

export const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      disabled,
      errorMessage,
      label,
      onChange,
      placeholder,
      value,
      isRequired = false,
      variant = "input_field",
      ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const id = useId();

    const isSearch = variant === "search_field";

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      if (inputRef.current) {
        inputRef.current.value = e.target.value;
      }
    };

    useEffect(() => {
      if (inputRef) {
        if (typeof value === "string" && inputRef.current) {
          inputRef.current.value = value;
        }
      }
    }, [value]);

    return (
      <div className={s.container}>
        {label && (
          <Typography
            as={"label"}
            className={clsx(disabled && s.disabled)}
            htmlFor={id}
          >
            {label}
          </Typography>
        )}
        <div className={clsx(s.inputContainer, disabled && s.disabled)}>
          {isSearch && (
            <SearchIcon
              className={clsx(s.iconSearch, disabled && s.disabled)}
            />
          )}
          <input
            className={clsx(
              s.input,
              s[variant],
              errorMessage && s.error,
              disabled && s.disabled,
              className
            )}
            disabled={disabled}
            id={id}
            onChange={inputChangeHandler}
            ref={ref}
            type={"text"}
            value={value}
            {...rest}
          />
          {placeholder && !value && (
            <Typography
              className={s.placeholder}
              style={{ left: isSearch ? "52px" : "16px" }}
            >
              {placeholder}
              <Typography as="span">{isRequired && "*"}</Typography>
            </Typography>
          )}
        </div>
        {errorMessage && (
          <Typography as={"span"} variant="body_6" className={s.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";
