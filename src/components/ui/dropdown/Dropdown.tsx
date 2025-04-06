import React, { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from "./Dropdown.module.scss";
import { Typography } from "../typography";
import { ArrowDownIcon } from "@/shared/assets/icons";
import clsx from "clsx";

export type DropdownItem = {
  id: string;
  value: ReactNode;
};

type DropdownProps = {
  placeholder: string;
  items: DropdownItem[];
  className?: string;
};

export const Dropdown = ({ placeholder, items, className }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={clsx(s.trigger, className)}>
        <Typography variant="body_1">{placeholder}</Typography>
        <ArrowDownIcon />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={s.content}>
        {items.map((item) => (
          <DropdownMenu.Item className={s.item} key={item.id} asChild>
            {item.value}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
