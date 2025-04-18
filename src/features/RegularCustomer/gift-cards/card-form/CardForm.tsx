import React from "react";
import s from "./CardForm.module.scss";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useCreateGiftMutation } from "@/api/gift/gift.api";
import { ControlledTextField } from "@/shared/ui/controlled-textfiled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { giftCartScheme } from "./model/create-gift-cart-scheme";
import { showToast } from "@/shared/ui/toast";
import { useTranslations } from "next-intl";

export const CardForm = () => {
  const t = useTranslations("regular_customer.gift_card.order_card");
  const isMobile = useIsMobile("tablet");
  const [createGiftCard] = useCreateGiftMutation();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      balance: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(giftCartScheme()),
  });

  const formHandler = handleSubmit(async (data) => {
    try {
      const res = await createGiftCard(data).unwrap();
      console.log(res);
      reset();
      showToast({ message: "Карта создана", variant: "success" });
    } catch (err: unknown) {
      console.error(err);
      showToast({ message: "Ошибка", variant: "error" });
    }
  });

  return (
    <div className={s.container}>
      <div className={s.form}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("name")}</Typography>
          <ControlledTextField
            control={control}
            name="fullName"
            className={s.input}
            placeholder={t("name")}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("phone")}</Typography>
          <ControlledTextField
            control={control}
            name="phone"
            className={s.input}
            placeholder="(+374) 12 34 56 78"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("sum")}</Typography>
          <ControlledTextField
            control={control}
            name="balance"
            className={s.input}
            placeholder="20000"
          />
        </div>
        <Button onClick={formHandler}> {t("send")}</Button>
      </div>
      <Image
        src={"/images/domix-card.png"}
        width={!isMobile ? 518 : 336}
        height={!isMobile ? 288 : 187}
        alt="card"
      />
    </div>
  );
};
