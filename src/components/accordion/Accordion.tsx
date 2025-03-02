import React, { ReactNode } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ArrowDownIcon } from "@/assets/icons";
import clsx from "clsx";
import s from "./Accordion.module.scss";

type AccordionProps = {
  title: ReactNode;
  className?: string;
  children: ReactNode;
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ title, className, children, ...props }, forwardedRef) => (
    <RadixAccordion.Root
      className={clsx(s.root, className)}
      type="single"
      collapsible
      {...props}
      ref={forwardedRef}
    >
      <RadixAccordion.Item className={s.item} value="item-1">
        <RadixAccordion.Header className={s.header}>
          <RadixAccordion.Trigger className={s.trigger}>
            {title}
            <ArrowDownIcon />
          </RadixAccordion.Trigger>
        </RadixAccordion.Header>
        <RadixAccordion.Content className={s.content}>
          <div className={s.container}>{children}</div>
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  )
);

Accordion.displayName = "Accordion";

export default Accordion;
