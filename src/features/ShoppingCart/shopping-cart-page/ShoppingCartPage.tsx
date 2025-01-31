import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { RequestDiscountPopup } from "../request-discount-popup";
import { Paths } from "@/shared/enums";
import { useClearCartMutation, useGetCartQuery } from "@/api/cart/cart.api";
import s from "./ShoppingCartPage.module.scss";
import { ShoppingCartItemRow } from "../shopping-cart-item-row";
import { useCreateOrderMutation } from "@/api/orders/orders.api";
import { useRouter } from "next/router";

export const ShoppingCartPage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: cart } = useGetCartQuery();
  const [clearCart] = useClearCartMutation();

  const [createOrder] = useCreateOrderMutation();

  const handleCreateOrder = async () => {
    const fetchData = {
      items: cart?.data.list.map((elem) => {
        return {
          count: elem.count,
          id: elem.product.id,
        };
      }),
    };
    console.log("Ложим в заказ:", fetchData);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = await createOrder(fetchData as any).unwrap();
      console.log("Созданный заказ:", data);
      router.push(`${Paths.payment}/${data.id}`);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  const handleClearCart = async () => {
    try {
      const res = await clearCart().unwrap();
      console.log(res);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  if (cart) {
    console.log("Корзина:", cart.data);
  }

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        Корзина
      </Typography>
      <div className={s.content}>
        <div className={s.tableContainer}>
          <table>
            <thead>
              <tr>
                <Typography variant="h4" as="th" className={s.title}>
                  Товар
                </Typography>
                <Typography variant="h4" as="th">
                  Цена
                </Typography>
                <Typography variant="h4" as="th">
                  Количество
                </Typography>
                <Typography variant="h4" as="th">
                  Сумма
                </Typography>
                <Typography variant="h4" as="th"></Typography>
              </tr>
            </thead>
            <tbody>
              {cart?.data.list.map((item) => (
                <ShoppingCartItemRow item={item} key={item.product.id} />
              ))}
            </tbody>
          </table>
          <Typography
            variant="body_4"
            as="button"
            onClick={handleClearCart}
            className={s.clearButton}
          >
            Очистить корзину
          </Typography>
        </div>
        <div className={s.price}>
          <div className={s.total}>
            <Typography variant="body_3">Цена</Typography>
            <Typography variant="body_3">{cart?.data.subtotal}</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="h4">Сумма</Typography>
            <Typography variant="h4">{cart?.data.total}</Typography>
          </div>
          <div className={s.buttonsContainer}>
            <Button fullWidth={true} onClick={handleCreateOrder}>
              Продолжить
            </Button>
            <Button
              fullWidth={true}
              variant="secondary"
              onClick={() => setIsOpen(true)}
              disabled={!cart?.data.list.length}
            >
              Запросить скидку
            </Button>
          </div>
        </div>
      </div>
      {cart?.data.list && (
        <RequestDiscountPopup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          orders={cart?.data.list}
        />
      )}
    </div>
  );
};
