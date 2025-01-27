import React from "react";
import s from "./PaymentPage.module.scss";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { PayerDetails } from "../payer-details";
import { PaymentMethod } from "../payment-method";
import { PurchaseMethod } from "../purchase-method";
import { AdditionalServices } from "../additional-services";
import { useRouter } from "next/router";
import { useGetOrderQuery } from "@/api/orders/orders.api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchemeCreator } from "./model/payment-scheme";

export const PaymentPage = () => {
  const router = useRouter();
  const { orderId } = router.query;

  const { data: order } = useGetOrderQuery({
    id: orderId,
  });

  console.log(order);

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      paymentMethod: "",
      address: "",
      orderType: "",
      extraOptions: "",
    },
    mode: "onTouched",
    resolver: zodResolver(paymentSchemeCreator()),
  });

  const formHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Оплата
      </Typography>

      <div className={s.content}>
        <form className={s.form}>
          <PayerDetails control={control} />
          <PaymentMethod control={control} />
          <PurchaseMethod control={control} addresses={order?.data.addresses} />
          <AdditionalServices control={control} />
        </form>
        <div className={s.price}>
          <div className={s.total}>
            <Typography variant="body_3">Цена</Typography>
            <Typography variant="body_3">{order?.data.total}</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="body_3">Доставка</Typography>
            <Typography variant="body_3">
              {order?.data.deliveryPrice}
            </Typography>
          </div>
          <div className={s.total}>
            <Typography variant="h4">Сумма</Typography>
            <Typography variant="h4">
              {order?.data.totalWithDelivery}
            </Typography>
          </div>
          <Button fullWidth={true} onClick={formHandler} disabled={!isValid}>
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );
};
