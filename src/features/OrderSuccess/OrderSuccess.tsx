import { ErrorIcon, SuccessIcon } from "@/shared/assets/icons";
import React from "react";
import s from "./OrderSuccess.module.scss";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { useRouter } from "next/router";
import { useGetOrderQuery } from "@/api/orders/orders.api";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const OrderSuccess = () => {
  const t = useTranslations("orderSuccess");
  const router = useRouter();
  const { id } = router.query;
  const token = useSelector((state: RootState) => state.auth.token);
  const { data } = useGetOrderQuery({ id: (id as string) || "" });

  return !!data ? (
    <div className={s.container}>
      <SuccessIcon className={s.green} />
      <div className={s.textContent}>
        <Typography variant="h2" as="h2">
          {t("successTitle")}
        </Typography>
        <Typography variant="body_1">
          {t("orderNumber")} <strong>{data?.data.id}</strong>
        </Typography>
        <Typography variant="body_3">{t("managerWillCall")}</Typography>
      </div>

      <div className={s.buttonsContainer}>
        {!!token && (
          <Button as={Link} href={`${Paths.profile}?tab=orders`}>
            {t("ordersBtn")}
          </Button>
        )}
        <Button variant="secondary" as={Link} href={"/"}>
          {t("homeBtn")}
        </Button>
      </div>
    </div>
  ) : (
    <div className={s.container}>
      <ErrorIcon className={s.red} />
      <div className={s.textContent}>
        <Typography variant="h2" as="h2">
          {t("errorTitle")}
        </Typography>
        <Typography variant="body_3">{t("managerWillCallError")}</Typography>
      </div>

      <div className={s.buttonsContainer}>
        {!!token && (
          <Button as={Link} href={`${Paths.profile}?tab=orders`}>
            {t("ordersBtn")}
          </Button>
        )}
        <Button variant="secondary" as={Link} href={"/"}>
          {t("homeBtn")}
        </Button>
      </div>
    </div>
  );
};
