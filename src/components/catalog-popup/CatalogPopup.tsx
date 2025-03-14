import React from "react";
import s from "./CatalogPopup.module.scss";
import * as Dialog from "@radix-ui/react-dialog";
import { CatalogMenu } from "@/features/CatalogHeader/catalog-menu/CatalogMenu";

type CatalogPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CatalogPopup = ({ isOpen, setIsOpen }: CatalogPopupProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Content className={s.content}>
        <CatalogMenu setIsOpen={setIsOpen} />
      </Dialog.Content>
    </Dialog.Root>
  );
};
