import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";

import * as RadixSelect from "@radix-ui/react-select";
import { SelectGroup, SelectItem } from "@radix-ui/react-select";
import { clsx } from "clsx";

import s from "./Select.module.scss";
import { Typography } from "../typography";
import { ArrowDownIcon } from "@/assets/icons";

export type OptionsValue = {
  icon?: ReactNode;
  name: string;
  id: string;
};
export type SelectProps = {
  variant?: "primary" | "secondary";
  className?: string;
  label?: string;
  options?: OptionsValue[];
  placeHolder?: string;
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>;
export const Select = forwardRef<
  ElementRef<typeof RadixSelect.Trigger>,
  SelectProps
>(
  (
    {
      variant = "primary",
      className,
      defaultValue,
      disabled,
      label,
      onValueChange,
      options = [],
      placeHolder = options[0].name,
      value,
      ...rest
    },
    ref
  ) => {
    const mappedOptions = options?.map((item, index) => (
      <SelectItem
        className={s.selectItem}
        key={item.id + index}
        value={item.id}
      >
        <RadixSelect.ItemText asChild>
          <div className={s.option}>
            {item.icon}
            {item.name}
          </div>
        </RadixSelect.ItemText>
      </SelectItem>
    ));

    return (
      <RadixSelect.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        value={value}
        {...rest}
      >
        {label && <Typography as={"label"}>{label}</Typography>}
        <RadixSelect.Trigger
          className={clsx(
            variant === "primary" ? s.trigger : s.triggerSecondary,
            className
          )}
          ref={ref}
        >
          <RadixSelect.Value placeholder={placeHolder} />
          <RadixSelect.Icon asChild>
            <ArrowDownIcon className={s.icon} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Content className={s.content} position={"popper"}>
          <RadixSelect.Viewport>
            <SelectGroup>{mappedOptions}</SelectGroup>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Root>
    );
  }
);

Select.displayName = "Select";
