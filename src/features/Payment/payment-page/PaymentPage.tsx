import React, { useEffect, useState } from "react";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { PayerDetails } from "../payer-details";
import { PaymentMethod } from "../payment-method";
import { PurchaseMethod } from "../purchase-method";
import { AdditionalServices } from "../additional-services";
import { useRouter } from "next/router";
import {
  useChangeOrderMutation,
  useChangePayMethodMutation,
  useCheckOrderMutation,
  // useGetOrderQuery,
} from "@/api/orders/orders.api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchemeCreator } from "./model/payment-scheme";
import { useCreateCustomerMutation } from "@/api/customer/customer.api";
import s from "./PaymentPage.module.scss";
import { useGetNextSevenDays } from "@/shared/hooks/useGetNextSevenDays";
import { showToast } from "@/shared/ui/toast";
import { useClearCartMutation } from "@/api/cart/cart.api";
import { useTranslations } from "next-intl";
import {
  ExtraOptionsResponse,
  GetOrderResponse,
} from "@/api/orders/orders.types";
import { UserSettingResponse } from "@/api/user/user.types";
import { Region } from "@/api/regions/regions.types";

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
  address: string;
  additional: string;
  regionId: string;
  paymentMethod: string;
  addressId: string;
  orderType: string;
  payerType: string;
  extraOptions: string[];
  deliveryTime: string;
  deliveryData: string;
};

type PaymentPageProps = {
  order: GetOrderResponse;
  extraOptions: { data: ExtraOptionsResponse[] };
  user: UserSettingResponse | null;
  regions: Region[];
};

export const PaymentPage = ({
  order,
  extraOptions,
  user,
  regions,
}: PaymentPageProps) => {
  const router = useRouter();
  const { orderId } = router.query;
  const t = useTranslations("payment");
  const [deliveryPrice, setDeliveryPrice] = useState(order?.data.deliveryPrice);
  const [priceWithDelivery, setPriceWithDelivery] = useState(order?.data.total);
  const deliveryDataOptions = useGetNextSevenDays();
  const [createCustomer] = useCreateCustomerMutation();
  const [changeOrder] = useChangeOrderMutation();
  const [changePayMethod] = useChangePayMethodMutation();
  const [clearCart] = useClearCartMutation();
  const [checkOrder] = useCheckOrderMutation();
  // const { data } = useGetOrderQuery({ id: orderId as string });

  const payerType = [
    {
      name: t("individual"),
      id: "individual",
    },
    {
      name: t("entity"),
      id: "entity",
    },
  ];

  const {
    control,
    formState: { isValid },
    handleSubmit,
    watch,
  } = useForm<PaymentFormValues>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      tin: "",
      paymentMethod: order?.data?.paymentMethods?.[0]?.slug || "", //способ оплаты
      address: "",
      regionId: String(regions[0].id),
      additional: "",
      addressId: "",
      orderType: String(order?.data?.orderTypes?.[0]?.id) || "", //способ доставки
      payerType: payerType[0].id, //тип плательщика
      extraOptions: [], //доп услуги
      deliveryTime: deliveryTimeOptions[0].id,
      deliveryData: deliveryDataOptions[0].id,
    },
    mode: "onTouched",
    resolver: zodResolver(paymentSchemeCreator(!!user)),
  });

  const payerTypeField = watch("payerType");

  const orderTypeId = watch("orderType");
  const addressId = watch("addressId");
  const regionId = watch("regionId");

  useEffect(() => {
    if ((!!addressId || (!!regionId && !user)) && !!orderTypeId) {
      const getPriceDelivery = async () => {
        try {
          const res = await checkOrder({
            id: orderId,
            data: {
              ...(user ? { addressId: addressId } : { regionId: regionId }),
              orderTypeId: orderTypeId,
            },
          }).unwrap();

          console.log("check:", res.data);
          setPriceWithDelivery(res.data.total);
          setDeliveryPrice(res.data.deliveryPrice);
        } catch (err: unknown) {
          console.log(err);
        }
      };

      getPriceDelivery();
    }
  }, [orderTypeId, addressId, checkOrder, orderId]);

  const formHandler = handleSubmit(async (data) => {
    const customer = {
      // referralCode: "2313", //можно кидать если есть
      orderId: orderId as string,
      email: data.email,
      phone: data.phone,
      type: data.payerType,
      fullName: `${data.firstName} ${data.lastName}`,
      ...(data.payerType === "entity" && { tin: data.tin }),
    };
    //создание покупателя
    try {
      const res = await createCustomer(customer).unwrap();
      console.log("Customer", res);
      showToast({ message: "Customer прошёл", variant: "success" });
    } catch (err) {
      console.error("Error customer", err);
    }

    const changeOrderArgs = {
      ...(user
        ? { addressId: Number(data.addressId) }
        : {
            address: data.address,
            additional: data.additional,
            regionId: data.regionId,
          }),
      orderTypeId: Number(data.orderType),
      extraOptions: data.extraOptions,
      ...(data.orderType !== "15" && {
        date: data.deliveryData,
        start: data.deliveryTime.split("-")[0],
        end: data.deliveryTime.split("-")[1],
      }),
      // gift,
    };
    //данные доставки
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
    //метод оплаты
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
        {t("title")}
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
          {order?.data.orderTypes && (
            <PurchaseMethod
              orderTypes={order?.data.orderTypes}
              controlForm={control}
              addressList={order.data.addresses}
              deliveryTimeOptions={deliveryTimeOptions}
              deliveryDataOptions={deliveryDataOptions}
              orderTypeId={orderTypeId}
              regions={regions}
              user={!!user}
            />
          )}
          <AdditionalServices control={control} extraOptions={extraOptions} />
        </form>
        <div className={s.price}>
          <div className={s.total}>
            <Typography variant="body_3">{t("price")}</Typography>
            <Typography variant="body_3">{order?.data.subtotal}</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="body_3">{t("discount")}</Typography>
            <Typography variant="body_3">{order?.data.discount}</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="body_3">{t("delivery")}</Typography>
            <Typography variant="body_3">{deliveryPrice}</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="h4">{t("total")}</Typography>
            <Typography variant="h4">{priceWithDelivery}</Typography>
          </div>
          <Button fullWidth={true} onClick={formHandler} disabled={!isValid}>
            {t("orderButton")}
          </Button>
        </div>
      </div>
    </div>
  );
};
