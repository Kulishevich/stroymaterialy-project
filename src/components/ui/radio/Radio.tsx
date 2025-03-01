import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";

import * as RadixRadio from "@radix-ui/react-radio-group";
import clsx from "clsx";

import s from "./Radio.module.scss";
import { Typography } from "../typography";

export type RadioOption = {
  id: string;
  name: string;
};

export type RadioProps = {
  options: RadioOption[];
} & ComponentPropsWithoutRef<typeof RadixRadio.Root>;
type RadioGroupRef = ElementRef<typeof RadixRadio.Root>;

export const Radio = forwardRef<RadioGroupRef, RadioProps>((props, ref) => {
  const { className, disabled, options, ...rest } = props;

  const radioGroupId = useId();

  return (
    <RadixRadio.Root
      className={clsx(s.root, className)}
      disabled={disabled}
      defaultValue={options[0].id}
      ref={ref}
      {...rest}
    >
      {options.map((option) => (
        <div className={s.itemContainer} key={option.id}>
          <RadixRadio.Item
            className={s.item}
            id={radioGroupId + option.id}
            tabIndex={+option.id}
            value={option.id}
          >
            <RadixRadio.Indicator className={s.indicator} />
          </RadixRadio.Item>
          <Typography variant="body_1">{option.name}</Typography>
        </div>
      ))}
    </RadixRadio.Root>
  );
});

Radio.displayName = "Radio";
