import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { CloseIcon, FilterIcon } from "@/assets/icons";
import { ProductsFilter } from "@/features/Products/products-filter";
import s from "./FilterMobile.module.scss";

type FilterMobileProps = {
  filtersData: {
    "category.filters.price.label": {
      "category.filters.price.max": number;
      "category.filters.price.min": number;
    };
    "category.filters.brand.label": string[] | Record<string, string | number>;
  };
};

const FilterMobile = ({ filtersData }: FilterMobileProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant={"only_icon"} className={s.button}>
          <FilterIcon />
          Фильтр
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className={s.dialogContent}>
        <ProductsFilter filtersData={filtersData} />
        <Dialog.DialogClose asChild className={s.closeButton}>
          <Button variant={"only_icon"}>
            <CloseIcon />
          </Button>
        </Dialog.DialogClose>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default FilterMobile;
