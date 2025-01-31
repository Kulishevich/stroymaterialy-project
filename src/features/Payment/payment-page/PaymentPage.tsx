import React from "react";
import s from "./PaymentPage.module.scss";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { PayerDetails } from "../payer-details";
import { PaymentMethod } from "../payment-method";
import { PurchaseMethod } from "../purchase-method";
import { AdditionalServices } from "../additional-services";
import { useRouter } from "next/router";
import {
  useChangeOrderMutation,
  useGetOrderQuery,
} from "@/api/orders/orders.api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchemeCreator } from "./model/payment-scheme";
// import { useCreateCustomerMutation } from "@/api/customer/customer.api";

export const PaymentPage = () => {
  const router = useRouter();
  const { orderId } = router.query;
  // const [createCustomer] = useCreateCustomerMutation();
  const [changeOrder] = useChangeOrderMutation();
  const { data: order } = useGetOrderQuery({
    id: orderId as string,
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
      payerType: "",
      extraOptions: "",
    },
    mode: "onTouched",
    resolver: zodResolver(paymentSchemeCreator()),
  });

  const formHandler = handleSubmit(async (data) => {
    console.log("Отправка заказа", data);

    // const processData = {
    // extraOptions: 1,
    // addressId = selectedAddress?.id;
    // regionId = city.id;
    // gift = giftCard;
    // orderTypeId = purchaseType.id;
    // date = moment(deliveryDate).format("YYYY-MM-DD");
    // start = selectedHours?.start;
    // end = selectedHours?.end;
    // };

    const changeOrderArgs = {
      items: [
        {
          addressId: 1,
          regionId: 1,
          address: "address",
          additional: "daasd",
          orderTypeId: 2,
          extraOptions: [
            {
              extraOptionId: "1",
            },
          ],
        },
      ],
    };

    try {
      const res = await changeOrder({
        args: changeOrderArgs,
        orderId: orderId as string,
      }).unwrap();
      console.log("Result", res);
    } catch (err) {
      console.error(err);
    }

    // const customer = {
    //   orderId: orderId,
    //   email: data.email,
    //   phone: data.phone,
    //   type: data.payerType,
    //   tin: "",
    //   referralCode: "",
    // };

    // try {
    //   const res = await createCustomer(customer).unwrap();
    //   console.log("Customer", res);
    // } catch (err) {
    //   console.error(err);
    // }
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
