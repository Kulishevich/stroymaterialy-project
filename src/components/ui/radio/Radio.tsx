import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from "react";

import * as RadixRadio from "@radix-ui/react-radio-group";
import clsx from "clsx";

import s from "@/components/radio/Radio.module.scss";

export type RadioOption = {
  id: string;
  value: string;
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
      ref={ref}
      {...rest}
    >
      {options.map((option) => (
        <div className={s.itemContainer} key={option.id}>
          <RadixRadio.Item
            className={s.item}
            id={radioGroupId + option.id}
            tabIndex={+option.id}
            value={option.value}
          >
            <RadixRadio.Indicator className={s.indicator} />
          </RadixRadio.Item>
        </div>
      ))}
    </RadixRadio.Root>
  );
});

Radio.displayName = "Radio";
