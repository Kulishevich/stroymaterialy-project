import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
  useId,
} from "react";

import * as RadixRadio from "@radix-ui/react-radio-group";
import clsx from "clsx";

import s from "./RadioCards.module.scss";

export type RadioCardsOption = {
  id: string;
  value: string;
  title: ReactNode;
  content: ReactNode;
};

export type RadioCardsProps = {
  options: RadioCardsOption[];
} & ComponentPropsWithoutRef<typeof RadixRadio.Root>;
type RadioGroupRef = ElementRef<typeof RadixRadio.Root>;

export const RadioCards = forwardRef<RadioGroupRef, RadioCardsProps>(
  (props, ref) => {
    const { className, disabled, options, defaultValue, ...rest } = props;

    const radioGroupId = useId();

    return (
      <RadixRadio.Root
        className={clsx(s.root, className)}
        disabled={disabled}
        // defaultValue={options.length > 0 ? options[0].value : undefined}
        defaultValue={
          defaultValue
            ? defaultValue
            : options.length > 0
            ? options[0].value
            : undefined
        }
        ref={ref}
        {...rest}
      >
        {options.map((option) => (
          <div className={s.itemContainer} key={option.id}>
            <div className={s.header}>
              <div className={s.title}>{option.title}</div>
              <RadixRadio.Item
                className={s.item}
                id={radioGroupId + option.id}
                tabIndex={+option.id}
                value={option.value}
              >
                <RadixRadio.Indicator className={s.indicator} />
              </RadixRadio.Item>
            </div>
            <div className={s.content}>{option.content}</div>
          </div>
        ))}
      </RadixRadio.Root>
    );
  }
);

RadioCards.displayName = "RadioCards";
