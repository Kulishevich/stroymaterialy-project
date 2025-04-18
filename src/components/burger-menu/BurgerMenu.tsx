import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../../shared/ui/button";
import { BurgerIcon, PercentIcon } from "@/shared/assets/icons";
import s from "./BurgerMenu.module.scss";
import { SocialNetworks } from "../social-networks";
import { Typography } from "../../shared/ui/typography";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import clsx from "clsx";
import Accordion from "../accordion/Accordion";
import { useTranslations } from "next-intl";

const BurgerMenu = () => {
  const t = useTranslations("header.navigation");

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
              {t("main")}
            </Typography>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.deliveryAndPayment}
              className={s.navLink}
            >
              {t("delivery_and_payment")}
            </Typography>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.regularСustomer}
              className={s.navLink}
            >
              {t("regular_customer")}
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
              {t("shares")}
            </Typography>
          </Dialog.Close>
          <Accordion
            title={
              <Typography variant="h3" className={s.navLink}>
                {t("cooperation")}
              </Typography>
            }
          >
            <Dialog.Close asChild>
              <Typography
                as={Link}
                href={Paths.forBusiness}
                variant="placeholder_big"
                className={s.accordion_item}
              >
                {t("for_business")}
              </Typography>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Typography
                as={Link}
                href={Paths.vacancies}
                variant="placeholder_big"
                className={s.accordion_item}
              >
                {t("vacancies")}
              </Typography>
            </Dialog.Close>
          </Accordion>
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.about}
              className={s.navLink}
            >
              {t("about_us")}
            </Typography>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Typography
              variant="h3"
              as={Link}
              href={Paths.contacts}
              className={s.navLink}
            >
              {t("contacts")}
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
