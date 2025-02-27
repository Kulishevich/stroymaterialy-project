import React, { useEffect, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { RequestDiscountPopup } from "../request-discount-popup";
import { Paths } from "@/shared/enums";
import { useClearCartMutation, useGetCartQuery } from "@/api/cart/cart.api";
import s from "./ShoppingCartPage.module.scss";
import { ShoppingCartItemRow } from "../shopping-cart-item-row";
import { useCreateOrderMutation } from "@/api/orders/orders.api";
import { useRouter } from "next/router";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { Item } from "@/components/item";
import { useTranslations } from "next-intl";
import { CartResponse } from "@/api/cart/cart.types";

export const ShoppingCart = ({ cartData }: { cartData: CartResponse }) => {
  const t = useTranslations("cart");
  const [cartState, setCartState] = useState(cartData);
  const router = useRouter();
  const isMobile = useIsMobile("tablet");
  const [isOpen, setIsOpen] = useState(false);

  const { data: cart } = useGetCartQuery(undefined, {
    skip: !cartState,
  });

  const [clearCart] = useClearCartMutation();
  const [createOrder] = useCreateOrderMutation();

  useEffect(() => {
    if (cart) {
      setCartState(cart);
    }
  }, [cart]);

  const handleCreateOrder = async () => {
    const fetchData = {
      items: cart?.data.list
        ? cart.data.list.map((elem) => ({
            count: elem.count,
            id: elem.product.id,
          }))
        : [],
    };
    console.log("Ложим в заказ:", fetchData);
    try {
      const { data } = await createOrder(fetchData).unwrap();
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

  return (
    <div className={s.container}>
      <Typography variant="h1" as="h1">
        {t("title")}
      </Typography>
      <div className={s.content}>
        {!isMobile ? (
          <div className={s.tableContainer}>
            <table>
              <thead>
                <tr>
                  <Typography variant="h4" as="th" className={s.title}>
                    {t("product")}
                  </Typography>
                  <Typography variant="h4" as="th">
                    {t("price")}
                  </Typography>
                  <Typography variant="h4" as="th">
                    {t("quantity")}
                  </Typography>
                  <Typography variant="h4" as="th">
                    {t("sum")}
                  </Typography>
                  <Typography variant="h4" as="th"></Typography>
                </tr>
              </thead>
              <tbody>
                {cartState?.data.list.map((item) => (
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
              {t("clearCart")}
            </Typography>
          </div>
        ) : (
          <>
            <div className={s.mobileContent}>
              {cartState?.data.list.map((item) => (
                <Item product={item.product} key={item.product.id} />
              ))}
            </div>
            <Typography
              variant="body_4"
              as="button"
              onClick={handleClearCart}
              className={s.clearButton}
            >
              {t("clearCart")}
            </Typography>
          </>
        )}
        <div className={s.price}>
          <div className={s.total}>
            <Typography variant="body_3"> {t("price")}</Typography>
            <Typography variant="body_3">{cartState?.data.subtotal}</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="body_3">{t("discount")}</Typography>
            <Typography variant="body_3">{cartState?.data.discount}</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="h4">{t("total")}</Typography>
            <Typography variant="h4">{cartState?.data.total}</Typography>
          </div>
          <div className={s.buttonsContainer}>
            <Button fullWidth={true} onClick={handleCreateOrder}>
              {t("continue")}
            </Button>
            <Button
              fullWidth={true}
              variant="secondary"
              onClick={() => setIsOpen(true)}
              disabled={!cartState?.data.list.length}
            >
              {t("requestDiscount")}
            </Button>
          </div>
        </div>
      </div>
      {cart?.data.list && (
        <RequestDiscountPopup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          orders={cartState?.data.list}
        />
      )}
    </div>
  );
};
