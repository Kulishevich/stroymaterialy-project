import React, { useState } from "react";
import s from "./PurchaseMethod.module.scss";
import { Typography } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { Select } from "@/components/ui/select";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import { ControlledRadioCards } from "@/components/ui/controlled-radio-cards/ControlledRadioCards";

const deliveryMethodOprions = [
  {
    id: "1",
    value: "Стандартная доставка",
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
    id: "2",
    value: "Экспресс доставка",
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
    id: "3",
    value: "Курьер Мопед",
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
    id: "4",
    value: "Айпост Доставка",
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

type PurchaseMethodProps = {
  addresses: any;
  control: any;
};

export const PurchaseMethod = ({ addresses, control }: PurchaseMethodProps) => {
  const [isAddAddress, setIsAddAddress] = useState(false);
  console.log("Адреса:", addresses);
  const radioOptions =
    !!addresses?.length &&
    addresses.map((address) => {
      return {
        id: address.id,
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
        <div className={s.addAddress}>
          <Typography variant="h4" as="h4">
            Добавить адрес
          </Typography>
          <div className={s.addressFields}>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Округ</Typography>
              <Select placeHolder="округ" />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Адрес доставки</Typography>
              <TextField placeholder="Адрес доставки" />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Детали адреса доставки</Typography>
              <TextField placeholder="Детали адреса доставки" />
            </div>
          </div>
          <Button
            className={s.saveAdressButton}
            onClick={() => setIsAddAddress(false)}
          >
            Сохранить адрес
          </Button>
          <Typography variant="button" as="button" className={s.buttonBack}>
            Назад
          </Typography>
        </div>
      ) : (
        <div className={s.selectedAdress}>
          <Typography variant="h4" as="h4">
            Адрес:
          </Typography>
          {radioOptions && (
            <ControlledRadioCards
              control={control}
              name="address"
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
          <Typography variant="body_4" className={s.button}>
            Подробнее о доставке
          </Typography>
        </div>
        <div className={s.cardsContainer}>
          <ControlledRadioCards
            options={deliveryMethodOprions}
            control={control}
            name="orderType"
          />
        </div>
      </div>
    </div>
  );
};
