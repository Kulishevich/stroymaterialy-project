import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { BurgerIcon, PercentIcon } from "@/assets/icons";
import s from "./BurgerMenu.module.scss";
import { SocialNetworks } from "../social-networks";
import { Typography } from "../ui/typography";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import clsx from "clsx";
import { Dropdown } from "../ui/dropdown";

const cooperationOptions = [
  {
    value: (
      <Dialog.Close asChild>
        <Typography
          as={Link}
          href={Paths.forBusiness}
          variant="placeholder_big"
        >
          Для бизнеса
        </Typography>
      </Dialog.Close>
    ),
    id: "value1",
  },
  {
    value: (
      <Dialog.Close asChild>
        <Typography as={Link} href={Paths.vacancies} variant="placeholder_big">
          Вакансии
        </Typography>
      </Dialog.Close>
    ),
    id: "value2",
  },
];

const BurgerMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={s.burgerTrigger}>
        <Button className={s.burgerButton}>
          <BurgerIcon width={16} height={10} />
        </Button>
      </Dialog.Trigger>

      <Dialog.Overlay className={s.dialogOverlay} />
      <Dialog.Content className={s.dialogContent}>
        <nav className={s.navigate}>
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.home}
              className={s.navLink}
            >
              Главная
            </Typography>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.deliveryAndPayment}
              className={s.navLink}
            >
              Доставка и оплата
            </Typography>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.regularСustomer}
              className={s.navLink}
            >
              Постоянный клиент
            </Typography>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.shares}
              className={clsx(s.navLink, s.shares)}
            >
              <PercentIcon />
              Акции
            </Typography>
          </Dialog.Close>
          <Dropdown
            placeholder="Сотрудничество"
            items={cooperationOptions}
            className={(s.navLink, s.dropdown)}
          />
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.about}
              className={s.navLink}
            >
              О нас
            </Typography>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.contacts}
              className={s.navLink}
            >
              Контакты
            </Typography>
          </Dialog.Close>
        </nav>
        <div className={s.info}>
          <SocialNetworks size={24} />
          <Typography variant="h4" as="h4">
            +374 (33) 144-000
          </Typography>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default BurgerMenu;
