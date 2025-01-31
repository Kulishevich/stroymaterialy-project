import React from "react";
import s from "./CardForm.module.scss";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useCreateGiftMutation } from "@/api/gift/gift.api";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { giftCartScheme } from "./model/create-gift-cart-scheme";
import { showToast } from "@/components/ui/toast";

export const CardForm = () => {
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
    console.log(data);

    try {
      const res = await createGiftCard(data).unwrap();
      console.log(res);
      reset();
      showToast({ message: "карта создана", variant: "success" });
    } catch (err: unknown) {
      console.error(err);
      showToast({ message: "Ошибка", variant: "error" });
    }
  });

  return (
    <div className={s.container}>
      <div className={s.form}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Имя</Typography>
          <ControlledTextField
            control={control}
            name="fullName"
            className={s.input}
            placeholder="Имя"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Телефон</Typography>
          <ControlledTextField
            control={control}
            name="phone"
            className={s.input}
            placeholder="(+374) 12 34 56 78"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Сумма (драм)</Typography>
          <ControlledTextField
            control={control}
            name="balance"
            className={s.input}
            placeholder="20000"
          />
        </div>
        <Button onClick={formHandler}> Отправить</Button>
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
