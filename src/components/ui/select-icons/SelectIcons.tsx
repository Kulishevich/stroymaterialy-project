import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from "react";

import * as RadixSelect from "@radix-ui/react-select";
import { SelectGroup, SelectItem } from "@radix-ui/react-select";
import { clsx } from "clsx";

import { ArrowDownIcon } from "@/assets/icons";
import s from "./SelectIcons.module.scss";

export type OptionsValue = {
  icon?: ReactNode;
  value: string;
};
export type SelectIconsProps = {
  className?: string;
  options?: OptionsValue[];
  placeHolder?: ReactNode;
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>;
export const SelectIcons = forwardRef<
  ElementRef<typeof RadixSelect.Trigger>,
  SelectIconsProps
>(
  (
    {
      className,
      defaultValue,
      disabled,
      onValueChange,
      options = [],
      placeHolder,
      value,
      ...rest
    },
    ref
  ) => {
    const mappedOptions = options?.map((item, index) => (
      <SelectItem
        className={s.selectItem}
        key={item.value + index}
        value={item.value}
      >
        <RadixSelect.ItemText asChild>
          <div className={s.option}>{item.icon}</div>
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
        <RadixSelect.Trigger className={clsx(s.trigger, className)} ref={ref}>
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

SelectIcons.displayName = "SelectIcons";
