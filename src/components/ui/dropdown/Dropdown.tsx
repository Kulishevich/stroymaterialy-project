import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import s from "./Dropdown.module.scss";
import { Checkbox } from "../checkbox";
import { Typography } from "../typography";
import { ArrowDownIcon } from "@/assets/icons";

export type DropdownItem = {
  id: string;
  value: string;
};

type DropdownProps = {
  placeholder: string;
  items: DropdownItem[];
};

export const Dropdown = ({ placeholder, items }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={s.trigger}>
        <Typography variant="h4">{placeholder}</Typography>
        <ArrowDownIcon />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content}>
          {items.map((item) => (
            <DropdownMenu.Item className={s.item} key={item.id}>
              <Checkbox />
              {item.value}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
