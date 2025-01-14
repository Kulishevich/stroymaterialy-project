import React from "react";
import { StarRating } from "@/components/star-rating";
import s from "./ProductInfo.module.scss";
import { Typography } from "@/components/ui/typography";
import { Counter } from "@/components/item/counter";
import { Button } from "@/components/ui/button";
import {
  AddressLocationIcon,
  ClockIcon,
  DollarIcon,
  HeartIcon,
} from "@/assets/icons";

export const ProductInfo = () => {
  return (
    <div className={s.container}>
      <div className={s.head}>
        <div className={s.infoContainer}>
          <StarRating />
          <div className={s.info}>
            <Typography variant="body_3">
              <span className={s.title}>Бренд</span>
              <span className={s.value}>BONDIT</span>
            </Typography>
            <Typography variant="body_3">
              <span className={s.title}>Высота [мм]</span>
              <span className={s.value}>78,0</span>
            </Typography>
            <Typography variant="body_3">
              <span className={s.title}>Диаметр 1 [мм]</span>
              <span className={s.value}>176</span>
            </Typography>
            <Typography variant="body_3">
              <span className={s.title}>Диаметр 2 (мм)</span>
              <span className={s.value}>142</span>
            </Typography>
            <Typography variant="body_3">
              <span className={s.title}>Диаметр 3 (мм)</span>
              <span className={s.value}>98</span>
            </Typography>
            <Typography variant="body_3">
              <span className={s.title}>EAN</span>
              <span className={s.value}>8010042116203</span>
            </Typography>
          </div>
        </div>
        <div className={s.priceContainer}>
          <Counter />
          <div className={s.price}>
            <Typography variant="h3" as="h3">
              300,00 AMD / шт
            </Typography>
            <Typography variant="price_sale" as="span">
              400,00 AMD
            </Typography>
          </div>
          <div className={s.buttonsContainer}>
            <Button className={s.basketButton}>В корзину</Button>
            <Button variant={"icon"} className={s.iconButton}>
              <HeartIcon />
            </Button>
            <Button fullWidth={true} variant={"secondary"}>
              Запросить скидку
            </Button>
          </div>
        </div>
      </div>
      <div className={s.description}>
        <div className={s.elem}>
          <Typography variant="h3" as="h3">
            Описание
          </Typography>
          <Typography variant="body_1">
            Малярная лента используется при покраске для защиты площадей,
            которые не должны быть покрыты краской, а также для создания чётких
            краёв рисунка. Основная особенность ленты — в её клеевом слое,
            который позволяет удалить ленту, не повреждая поверхность под ней.
          </Typography>
        </div>
        <div className={s.elem}>
          <Typography variant="h3" as="h3">
            Информация о доставке
          </Typography>
          <table className={s.tableDelivery}>
            <thead>
              <tr>
                <th className={s.tableTitle}>
                  <Typography variant="body_5">Вид доставки</Typography>
                </th>
                <th className={s.tableTitle}>
                  <Typography variant="body_5">Экспресс</Typography>
                </th>
                <th className={s.tableTitle}>
                  <Typography variant="body_5">Стандартная</Typography>
                </th>
                <th className={s.tableTitle}>
                  <Typography variant="body_5">Курьер</Typography>
                </th>
                <th className={s.tableTitle}>
                  <Typography variant="body_5">Доставка</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Typography as="th" variant="body_5" scope="row">
                  <AddressLocationIcon /> Место
                </Typography>
                <td>
                  <Typography variant="body_8">Город</Typography>
                  <Typography variant="body_7">Ереван</Typography>
                </td>
                <td>
                  <Typography variant="body_8">Город</Typography>
                  <Typography variant="body_7">Ереван</Typography>
                </td>
                <td>
                  <Typography variant="body_8">Город</Typography>
                  <Typography variant="body_7">Ереван</Typography>
                </td>
                <td>
                  <Typography variant="body_8">Город</Typography>
                  <Typography variant="body_7">все регионы</Typography>
                </td>
              </tr>
              <tr>
                <Typography as="th" variant="body_5" scope="row">
                  <ClockIcon /> Время
                </Typography>
                <td>
                  <Typography variant="body_8">день в день</Typography>
                  <Typography variant="body_7">в течение 2-4 часов</Typography>
                </td>
                <td>
                  <Typography variant="body_7">в течение 1-2 дней</Typography>
                </td>
                <td>
                  <Typography variant="body_8">день в день</Typography>
                  <Typography variant="body_7">в течение 2 часов</Typography>
                </td>
                <td>
                  <Typography variant="body_7">в течение 1-3 дней</Typography>
                </td>
              </tr>
              <tr>
                <Typography as="th" variant="body_5" scope="row">
                  <DollarIcon />
                  Цены
                </Typography>
                <td>
                  <Typography variant="body_8">Начиная</Typography>
                  <Typography variant="body_7">с 2000 драм</Typography>
                </td>
                <td>
                  <Typography variant="body_7">Бесплатная</Typography>
                </td>
                <td>
                  <Typography variant="body_7">1500 драм</Typography>
                </td>
                <td>
                  <Typography variant="body_7">700 драм</Typography>
                </td>
              </tr>
              <tr>
                <Typography as="th" variant="body_5" scope="row">
                  Особые примечания
                </Typography>
                <td>
                  <Typography variant="body_5">-</Typography>
                </td>
                <td>
                  <Typography variant="body_8">Исключение</Typography>
                  <Typography variant="body_7">Цемент, гипсокартон</Typography>
                </td>
                <td>
                  <Typography variant="body_8">Вес</Typography>
                  <Typography variant="body_7">до 10 кг</Typography>
                </td>
                <td>
                  <Typography variant="body_8">Вес</Typography>
                  <Typography variant="body_7">до 5 кг</Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={s.elem}>
          <Typography variant="h3" as="h3">
            Информация о подъёме
          </Typography>
          <table className={s.tablePayment}>
            <thead>
              <tr>
                <Typography as="th" variant={"body_6"} scope="row">
                  Вид груза
                </Typography>
                <Typography variant={"body_6"} as="td">
                  кг / штук
                </Typography>
                <Typography variant={"body_6"} as="td">
                  цена
                </Typography>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Typography as="th" variant={"body_5"} scope="row">
                  1 мешок
                </Typography>
                <Typography variant={"body_7"} as="td">
                  25-50 кг
                </Typography>
                <Typography variant={"body_7"} as="td">
                  100 драм/ этаж
                </Typography>
              </tr>
              <tr>
                <Typography as="th" variant={"body_5"} scope="row">
                  Гипсокартон
                </Typography>
                <Typography variant={"body_7"} as="td">
                  1200x2400 мм
                </Typography>
                <Typography variant={"body_7"} as="td">
                  150 драм/ этаж
                </Typography>
              </tr>
              <tr>
                <Typography as="th" variant={"body_5"} scope="row">
                  Профили
                </Typography>
                <Typography variant={"body_7"} as="td">
                  20 штук
                </Typography>
                <Typography variant={"body_7"} as="td">
                  150 драм/ этаж
                </Typography>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
