import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { RequestDiscountPopup } from "../request-discount-popup";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { useClearCartMutation, useGetCartQuery } from "@/api/cart/cart.api";
import s from "./ShoppingCartPage.module.scss";
import { ShoppingCartItemRow } from "../shopping-cart-item-row";

export const ShoppingCartPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: cart } = useGetCartQuery();
  const [clearCart] = useClearCartMutation();

  const handleClearCart = async () => {
    try {
      const res = await clearCart().unwrap();
      console.log(res);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  if (cart) {
    console.log(cart);
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
            <Button fullWidth={true} as={Link} href={Paths.payment}>
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
