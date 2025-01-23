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

type ShoppingCartItemRowProps = {
  item: CartList;
};

export const ShoppingCartItemRow = ({ item }: ShoppingCartItemRowProps) => {
  const [count, setCount] = useState(item.count);
  const [deleteItemCart] = useRemoveItemCartMutation();
  const [changeCount] = useChangeCounterItemCartMutation();

  const hadleDeleteItemCart = async (idItem: string) => {
    try {
      const resData = await deleteItemCart({ id: idItem }).unwrap();
      console.log(resData);
    } catch (err: unknown) {
      console.log(err);
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
        <Typography variant="body_2">{item.product.price}</Typography>
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
