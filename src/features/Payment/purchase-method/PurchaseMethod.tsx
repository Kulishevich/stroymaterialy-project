import React, { useState } from "react";
import s from "./PurchaseMethod.module.scss";
import { Typography } from "@/components/ui/typography";
import { Checkbox } from "@/components/ui/checkbox";
import { RhombIcon } from "@/assets/icons";
import { Select } from "@/components/ui/select";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";

export const PurchaseMethod = () => {
  const [isAddAddress, setIsAddAddress] = useState(false);

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
          <div className={s.card}>
            <Checkbox />
            <Typography variant="body_1">
              8F9P+XJF, Charents St, Yeghvard, Армения
            </Typography>
          </div>
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
          <div className={s.card}>
            <Typography variant="body_7">Стандартная доставка</Typography>
            <Typography variant="body_6">
              до 2 дней (не распространяется на цемент и гипсокартон)
            </Typography>
            <Typography variant="body_5">Бесплатно</Typography>
          </div>
          <div className={s.card}>
            <Typography variant="body_7">Экспресс доставка</Typography>
            <Typography variant="body_6">
              день в день (в течение 2-4 часов)
            </Typography>
            <Typography variant="body_5">от 2000 драм</Typography>
          </div>
          <div className={s.card}>
            <Typography variant="body_7">Курьер Мопед (до 10 кг)</Typography>
            <Typography variant="body_6">
              день в день (в течение 2 часов)
            </Typography>
            <Typography variant="body_5">1500 драм</Typography>
          </div>
          <div className={s.card}>
            <Typography variant="body_7">
              Айпост Доставка (вес до 5 кг)
            </Typography>
            <Typography variant="body_6">до 3 дней</Typography>
            <Typography variant="body_5">700 драм</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
