import {
  useChangeCounterItemCartMutation,
  useRemoveItemCartMutation,
} from "@/api/cart/cart.api";
import { CartList } from "@/api/cart/cart.types";
import { TrashIcon } from "@/assets/icons";
import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";

import s from "./ShoppingCartItemRow.module.scss";
import { showToast } from "@/components/ui/toast";
import { useTranslations } from "next-intl";

type ShoppingCartItemRowProps = {
  item: CartList;
};

export const ShoppingCartItemRow = ({ item }: ShoppingCartItemRowProps) => {
  const t = useTranslations("cart");
  const [count, setCount] = useState(item.count);
  const [deleteItemCart] = useRemoveItemCartMutation();
  const [changeCount] = useChangeCounterItemCartMutation();
  const isDiscount = !!Number(item.product.discount.split(" ")[0]);

  const hadleDeleteItemCart = async (idItem: string) => {
    try {
      await deleteItemCart({ id: idItem }).unwrap();
      showToast({ message: t("delete_from_cart"), variant: "success" });
    } catch (err: unknown) {
      console.log(err);
      showToast({
        message: t("delete_from_cart_error"),
        variant: "success",
        description: t("delete_from_cart_error_description"),
      });
    }
  };

  const debouncedChangeCount = useMemo(
    () =>
      debounce((id, count) => {
        changeCount({ id, count });
      }, 500),
    [changeCount]
  );

  const increment = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      debouncedChangeCount(item.product.id, newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      const newCount = prev - 1;
      debouncedChangeCount(item.product.id, newCount);
      return newCount;
    });
  };

  useEffect(() => {
    return () => {
      debouncedChangeCount.cancel();
    };
  }, [debouncedChangeCount]);

  return (
    <tr key={item.product.id} className={s.row}>
      <td className={s.card}>
        <Image
          src={item.product.images.main.src}
          width={120}
          height={120}
          alt="product image"
          className={s.image}
        />
        <Typography variant="body_3">{item.product.name}</Typography>
      </td>
      <td>
        {isDiscount ? (
          <>
            <Typography variant="body_2" className={s.discountPrice}>
              {item.product.discountedPrice}
            </Typography>
            <Typography variant="price_sale" as="span" className={s.oldPrice}>
              {item.product.price}
            </Typography>
          </>
        ) : (
          <Typography variant="body_2">{item.product.price}</Typography>
        )}
      </td>
      <td>
        <Counter
          countCurrent={count}
          increment={increment}
          decrement={decrement}
        />
      </td>
      <td>
        <Typography variant="body_2">{item.total}</Typography>
      </td>
      <td>
        <Button
          variant={"only_icon"}
          className={s.trashButton}
          onClick={() => hadleDeleteItemCart(item.product.id)}
        >
          <TrashIcon />
        </Button>
      </td>
    </tr>
  );
};
