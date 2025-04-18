import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../../shared/ui/button";
import { CloseIcon, SearchIcon } from "@/shared/assets/icons";
import { Search } from "../search/Search";
import s from "./SearchMobile.module.scss";

export const SearchMobile = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant={"only_icon"} className={s.buttonIcon}>
          <SearchIcon width={26} height={26} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className={s.dialogContent}>
        <Search />
        <Dialog.DialogClose asChild className={s.closeButton}>
          <Button variant={"only_icon"}>
            <CloseIcon width={20} height={20} />
          </Button>
        </Dialog.DialogClose>
      </Dialog.Content>
    </Dialog.Root>
  );
};
