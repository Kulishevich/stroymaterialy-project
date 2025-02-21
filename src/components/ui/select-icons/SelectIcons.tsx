import * as RadixSelect from "@radix-ui/react-select";
import { SelectGroup, SelectItem } from "@radix-ui/react-select";
import { clsx } from "clsx";
import { AmIcon, ArrowDownIcon, RuIcon } from "@/assets/icons";
import s from "./SelectIcons.module.scss";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "@/store/slices/lang/langSlice";
import { useRouter } from "next/router";

export type SelectLanguageProps = {
  className?: string;
};

export const SelectLanguage = ({ className }: SelectLanguageProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.lang);
  const options = [
    {
      icon: <AmIcon />,
      value: "hy",
    },
    {
      icon: <RuIcon />,
      value: "ru",
    },
  ];

  const changeLanguage = (value: string) => {
    dispatch(changeLang(value));
    document.cookie = `locale=${value}; path=/; max-age=31536000`;
    console.log(document.cookie);
    router.push(router.asPath, router.asPath, { locale: value });
  };

  const mappedOptions = options?.map((item, index) => (
    <SelectItem
      className={s.selectItem}
      key={item.value + index}
      value={item.value}
    >
      <RadixSelect.ItemText asChild>
        <div className={s.option}>{item.icon}</div>
      </RadixSelect.ItemText>
    </SelectItem>
  ));

  return (
    <RadixSelect.Root
      onValueChange={(value) => changeLanguage(value)}
      value={lang}
    >
      <RadixSelect.Trigger className={clsx(s.trigger, className)}>
        <RadixSelect.Value
          placeholder={
            options.find((elem) => elem.value === String(lang))?.icon
          }
        />
        <RadixSelect.Icon asChild>
          <ArrowDownIcon className={s.icon} />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Content className={s.content} position={"popper"}>
        <RadixSelect.Viewport>
          <SelectGroup>{mappedOptions}</SelectGroup>
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};

SelectLanguage.displayName = "SelectLanguage";
