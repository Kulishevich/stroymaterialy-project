import React, { useState } from "react";
import s from "./PurchaseMethod.module.scss";
import { Typography } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { ControlledRadioCards } from "@/components/ui/controlled-radio-cards/ControlledRadioCards";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { Control } from "react-hook-form";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { PaymentFormValues } from "../payment-page";
import { Address } from "@/api/addresses/address.types";
import { OptionsValue } from "@/components/ui/select";
import { OrderTypes } from "@/api/orders/orders.types";
import { AddNewAddress } from "../add-new-address";

type PurchaseMethodProps = {
  addresses: Address[];
  controlForm: Control<PaymentFormValues>;
  deliveryTimeOptions: OptionsValue[];
  deliveryDataOptions: OptionsValue[];
  orderTypes: OrderTypes[];
};

const deliveryMethodOptions = [
  {
    title: <Typography variant="body_7">Стандартная доставка</Typography>,
    content: (
      <>
        <Typography variant="body_6">
          до 2 дней (не распространяется на цемент и гипсокартон)
        </Typography>
        <Typography variant="body_5">Бесплатно</Typography>
      </>
    ),
  },
  {
    title: <Typography variant="body_7">Экспресс доставка</Typography>,
    content: (
      <>
        <Typography variant="body_6">
          день в день (в течение 2-4 часов)
        </Typography>
        <Typography variant="body_5">от 2000 драм</Typography>
      </>
    ),
  },
  {
    title: <Typography variant="body_7">Курьер Мопед (до 10 кг)</Typography>,
    content: (
      <>
        <Typography variant="body_6">
          день в день (в течение 2 часов)
        </Typography>
        <Typography variant="body_5">1500 драм</Typography>
      </>
    ),
  },
  {
    title: (
      <Typography variant="body_7">Айпост Доставка (вес до 5 кг)</Typography>
    ),
    content: (
      <>
        <Typography variant="body_6">до 3 дней</Typography>
        <Typography variant="body_5">700 драм</Typography>
      </>
    ),
  },
];

export const PurchaseMethod = ({
  addresses,
  controlForm,
  deliveryTimeOptions,
  deliveryDataOptions,
  orderTypes,
}: PurchaseMethodProps) => {
  const isMobile = useIsMobile("tablet");
  const [isAddAddress, setIsAddAddress] = useState(false);
  const orderTypesOptions = deliveryMethodOptions.map((orderType, index) => {
    return {
      ...orderType,
      id: String(orderTypes[index].id),
      value: orderTypes[index].name,
    };
  });
  console.log("Order Types:", orderTypesOptions);

  const radioOptions =
    !!addresses?.length &&
    addresses.map((address) => {
      return {
        id: String(address.id),
        value: address.address,
        title: "",
        content: (
          <Typography variant="body_1">
            {address.address},{address.region.name}
          </Typography>
        ),
      };
    });

  return (
    <div className={s.payment}>
      <div className={s.title}>
        <div className={s.numCard}>
          <Typography variant="h3" as="h3">
            3
          </Typography>
          <RhombIcon />
        </div>
        <Typography variant="h3" as="h3">
          Способ покупки
        </Typography>
      </div>
      {isAddAddress ? (
        <AddNewAddress setIsAddAddress={setIsAddAddress} />
      ) : (
        <div className={s.selectedAdress}>
          <Typography variant="h4" as="h4">
            Адрес:
          </Typography>
          {radioOptions && (
            <ControlledRadioCards
              control={controlForm}
              name="addressId"
              options={radioOptions}
            />
          )}
          <Typography
            variant="button"
            as="button"
            onClick={() => setIsAddAddress(true)}
          >
            Добавить адрес
          </Typography>
        </div>
      )}
      <div className={s.deliveryMethod}>
        <div className={s.deliveryTitle}>
          <Typography variant="h4" as="h4">
            Способ доставки:
          </Typography>
          {!isMobile && (
            <Typography variant="body_4" className={s.button}>
              Подробнее о доставке
            </Typography>
          )}
        </div>
        <div className={s.cardsContainer}>
          <ControlledRadioCards
            options={orderTypesOptions}
            control={controlForm}
            name="orderType"
          />
        </div>
        <div className={s.deliveryTimeContainer}>
          <ControlledSelect
            control={controlForm}
            name="deliveryTime"
            options={deliveryTimeOptions}
          />
          <ControlledSelect
            control={controlForm}
            name="deliveryData"
            options={deliveryDataOptions}
          />
        </div>
        {isMobile && (
          <Typography variant="body_4" className={s.button}>
            Подробнее о доставке
          </Typography>
        )}
      </div>
    </div>
  );
};
