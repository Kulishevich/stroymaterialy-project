import React from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { PayerDetails } from "../payer-details";
import { PaymentMethod } from "../payment-method";
import { PurchaseMethod } from "../purchase-method";
import { AdditionalServices } from "../additional-services";
import { useRouter } from "next/router";
import {
  useChangeOrderMutation,
  useChangePayMethodMutation,
  // useCheckOrderMutation,
  useGetOrderQuery,
} from "@/api/orders/orders.api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchemeCreator } from "./model/payment-scheme";
import { useCreateCustomerMutation } from "@/api/customer/customer.api";
import s from "./PaymentPage.module.scss";
import { useGetNextSevenDays } from "@/shared/hooks/useGetNextSevenDays";
import { showToast } from "@/components/ui/toast";
import { useClearCartMutation } from "@/api/cart/cart.api";

const payerType = [
  {
    name: "Физическое лицо",
    id: "individual",
  },
  {
    name: "Юридическое лицо",
    id: "entity",
  },
];

const deliveryTimeOptions = [
  {
    id: "08:00-12:00",
    name: "08:00-12:00",
  },
  {
    id: "12:00-16:00",
    name: "12:00-16:00",
  },
  {
    id: "16:00-20:00",
    name: "16:00-20:00",
  },
];

export type PaymentFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tin: string;
  paymentMethod: string;
  addressId: number | null;
  orderType: string;
  payerType: string;
  extraOptions: string[];
  deliveryTime: string;
  deliveryData: string;
};

export const PaymentPage = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const [createCustomer] = useCreateCustomerMutation();
  const [changeOrder] = useChangeOrderMutation();
  const [changePayMethod] = useChangePayMethodMutation();
  const [clearCart] = useClearCartMutation();
  // const [checkOrder] = useCheckOrderMutation();

  const { data: order } = useGetOrderQuery({
    id: orderId as string,
  });

  const deliveryDataOptions = useGetNextSevenDays();
  console.log("Order:", order);

  const {
    control,
    formState: { isValid },
    handleSubmit,
    watch,
  } = useForm<PaymentFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      tin: "",
      paymentMethod: "", //способ оплаты
      addressId: null,
      orderType: "", //способ доставки
      payerType: payerType[0].id, //тип плательщика
      extraOptions: [], //доп услуги
      deliveryTime: deliveryTimeOptions[0].id,
      deliveryData: deliveryDataOptions[0].id,
    },
    mode: "onTouched",
    resolver: zodResolver(paymentSchemeCreator()),
  });

  const payerTypeField = watch("payerType");
  // const orderTypeId = watch("orderType");
  // const addressId = watch("addressId");
  // console.log("OrderTypeId", orderTypeId);
  // console.log("addressId:", addressId);
  // useEffect(() => {
  //   const getPrice = async () => {
  //     try {
  //       const res = await checkOrder({
  //         id: orderId,
  //         data: { orderTypeId: orderTypeId, addressId: addressId },
  //       }).unwrap();

  //       console.log("check:", res);
  //     } catch (err: unknown) {
  //       console.log(err);
  //     }
  //   };

  //   getPrice();
  // }, [orderTypeId]);

  const formHandler = handleSubmit(async (data) => {
    const customer = {
      orderId: orderId as string,
      email: data.email,
      phone: data.phone,
      type: data.payerType,
      // referralCode: "2313", //можно кидать если есть
      fullName: `${data.firstName} ${data.lastName}`,
      ...(data.payerType === "entity" && { tin: data.tin }),
    };

    try {
      const res = await createCustomer(customer).unwrap();
      console.log("Customer", res);
      showToast({ message: "Customer прошёл", variant: "success" });
    } catch (err) {
      console.error("Error customer", err);
    }

    // const selectedAddress = order?.data.addresses.find(
    //   (elem) => elem.id === Number(data.addressId)
    // );
    const changeOrderArgs = {
      // additional: selectedAddress?.details as string,
      // address: selectedAddress?.address as string,
      // regionId: selectedAddress?.region.id as number,
      addressId: Number(data.addressId),
      date: data.deliveryData,
      start: data.deliveryTime.split("-")[0],
      end: data.deliveryTime.split("-")[1],
      orderTypeId: Number(data.orderType),
      extraOptions: data.extraOptions,
      // gift
    };
    try {
      const res = await changeOrder({
        args: changeOrderArgs,
        orderId: orderId as string,
      }).unwrap();
      console.log("changeOrder", res);
      showToast({ message: "changeOrder прошёл", variant: "success" });
    } catch (err) {
      console.error("Ошибка при создании заказа:", err);
    }

    const payMethodArgs = {
      id: orderId as string,
      method: data.paymentMethod,
    };
    try {
      const res = await changePayMethod(payMethodArgs).unwrap();
      showToast({ message: "Payment прошёл", variant: "success" });
      if (res.data.redirectUrl) {
        window.location.href = res.data.redirectUrl;
      } else {
        await clearCart();
      }
    } catch (err: unknown) {
      console.error("Payment error", err);
    }
  });

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Оплата
      </Typography>

      <div className={s.content}>
        <form className={s.form}>
          <PayerDetails
            control={control}
            payerType={payerType}
            payerTypeField={payerTypeField}
          />
          {order?.data.paymentMethods && (
            <PaymentMethod
              control={control}
              paymentMethod={order?.data.paymentMethods}
            />
          )}
          {order?.data.addresses && order?.data.orderTypes && (
            <PurchaseMethod
              orderTypes={order?.data.orderTypes}
              controlForm={control}
              addresses={order?.data.addresses}
              deliveryTimeOptions={deliveryTimeOptions}
              deliveryDataOptions={deliveryDataOptions}
            />
          )}
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
