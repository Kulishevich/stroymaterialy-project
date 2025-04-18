import React, { useState } from "react";
import { StarRating } from "@/components/star-rating";
import s from "./ProductInfo.module.scss";
import { Typography } from "@/shared/ui/typography";
import { Counter } from "@/components/counter";
import { Button } from "@/shared/ui/button";
import {
  AddressLocationIcon,
  ClockIcon,
  DollarIcon,
  HeartIcon,
} from "@/shared/assets/icons";
import { Product } from "@/api/products/products.types";
import { useAddItemCartMutation } from "@/api/cart/cart.api";
import {
  useAddInFavoriteMutation,
  useDeleteFavoriteMutation,
} from "@/api/products/products.api";
import { showToast } from "@/shared/ui/toast";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import clsx from "clsx";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { TableDelliveryMobile } from "@/features/DeliveryAndPayment/DeliveryAndLifting/table-dellivery/TableDelliveryMobile/TableDelliveryMobile";
import { TableLiftingMobile } from "@/features/DeliveryAndPayment/DeliveryAndLifting/table-lifting/table-lifting-mobile";
import { RequestDiscountPopup } from "../request-discount-popup";

type ProductInfoProps = {
  item: Product;
};

export const ProductInfo = ({ item }: ProductInfoProps) => {
  const isMobile = useIsMobile("tablet");
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [addItemCart] = useAddItemCartMutation();
  const [addInFavorite] = useAddInFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();
  const favoritesItems = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favoritesItems.includes(item.id);
  const isDiscount = !!Number(item.discount.split(" ")[0]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleAddItemInCart = async () => {
    const fetchData = {
      id: item.id,
      count: count,
    };
    try {
      await addItemCart(fetchData).unwrap();
      setCount(1);
      showToast({ message: "Добавлено в корзину", variant: "success" });
    } catch (err: unknown) {
      console.error(err);
      showToast({ message: "Ошибка", variant: "error" });
    }
  };

  const handleAddFavorite = async () => {
    if (isFavorite) {
      try {
        await deleteFavorite(item?.id).unwrap();
        showToast({ message: "Удалено из избранное", variant: "success" });
      } catch (err: unknown) {
        console.error(err);
        showToast({ message: "Ошибка", variant: "error" });
      }
    } else {
      try {
        await addInFavorite({ products: [item?.id] }).unwrap();
        showToast({ message: "Добавлено в избранное", variant: "success" });
      } catch (err: unknown) {
        console.error(err);
        showToast({ message: "Ошибка", variant: "error" });
      }
    }
  };

  return (
    <div className={s.container}>
      <div className={s.head}>
        <div className={s.infoContainer}>
          <StarRating />
          <div className={s.info}>
            <Typography variant="body_3">
              <span className={s.title}>Бренд</span>
              <span className={s.value}>{item.brand}</span>
            </Typography>
            {item.characteristics.map((characteristic) => (
              <Typography variant="body_3" key={1}>
                <span className={s.title}>{characteristic.name}</span>
                <span className={s.value}>{characteristic.value}</span>
              </Typography>
            ))}
          </div>
        </div>
        <div className={s.priceContainer}>
          <Counter
            countCurrent={count}
            increment={increment}
            decrement={decrement}
          />
          <div className={s.price}>
            {isDiscount ? (
              <>
                <Typography variant="h3" as="h3">
                  {item.discountedPrice}
                </Typography>
                <Typography variant="price_sale" as="span">
                  {item.price}
                </Typography>
              </>
            ) : (
              <Typography variant={"h3"} as="h3" className={s.priceValue}>
                {item.price}
              </Typography>
            )}
          </div>
          <div className={s.buttonsContainer}>
            <Button className={s.basketButton} onClick={handleAddItemInCart}>
              В корзину
            </Button>
            <Button
              variant={"icon"}
              className={clsx(s.iconButton, isFavorite && s.active)}
              onClick={handleAddFavorite}
            >
              <HeartIcon />
            </Button>
            <Button
              fullWidth={true}
              variant={"secondary"}
              onClick={() => setIsOpen(true)}
            >
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
          <Typography
            variant="body_1"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
        <div className={s.elem}>
          <Typography variant="h3" as="h3">
            Информация о доставке
          </Typography>
          {!isMobile ? (
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
                    <Typography variant="body_7">
                      в течение 2-4 часов
                    </Typography>
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
                    <Typography variant="body_7">
                      Цемент, гипсокартон
                    </Typography>
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
          ) : (
            <TableDelliveryMobile />
          )}
        </div>
        <div className={s.elem}>
          <Typography variant="h3" as="h3">
            Информация о подъёме
          </Typography>
          {!isMobile ? (
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
          ) : (
            <TableLiftingMobile />
          )}
        </div>
      </div>
      <RequestDiscountPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        product={item}
      />
    </div>
  );
};
