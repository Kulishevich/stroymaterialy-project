import React, { ReactNode } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { Typography } from "../typography";
import { ArrowDownIcon } from "@/shared/assets/icons";
import clsx from "clsx";
import s from "./AccordionSearch.module.scss";

type AccordionProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

const AccordionSearch = React.forwardRef<HTMLDivElement, AccordionProps>(
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
            <Typography variant="h4" as="h4">
              {title}
            </Typography>
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

AccordionSearch.displayName = "AccordionSearch";

export default AccordionSearch;
