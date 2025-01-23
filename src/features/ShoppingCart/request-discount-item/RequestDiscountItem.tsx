import { Counter } from "@/components/counter";
import { TextField } from "@/components/ui/text-field";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

import s from "./RequestDiscountItem.module.scss";
import { CartList } from "@/api/cart/cart.types";
import { debounce } from "lodash";
import { useChangeCounterItemCartMutation } from "@/api/cart/cart.api";

type RequestDiscountItemProps = {
  order: CartList;
};

export const RequestDiscountItem = ({ order }: RequestDiscountItemProps) => {
  const { count, product, total } = order;
  const [countCurrent, setCountCurrent] = useState(count);
  const [changeCount] = useChangeCounterItemCartMutation();

  const debouncedChangeCount = useMemo(
    () =>
      debounce((id, countCurrent) => {
        changeCount({ id, count: countCurrent });
      }, 500),
    [changeCount]
  );

  const increment = () => {
    setCountCurrent((prev) => {
      const newCount = prev + 1;
      debouncedChangeCount(product.id, newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCountCurrent((prev) => {
      const newCount = prev - 1;
      debouncedChangeCount(product.id, newCount);
      return newCount;
    });
  };

  useEffect(() => {
    return () => {
      debouncedChangeCount.cancel();
    };
  }, [debouncedChangeCount]);

  return (
    <div key={product.id} className={s.order}>
      <div className={s.card}>
        <Image
          src={product.images.main.src}
          width={100}
          height={100}
          alt="product image"
        />
        <Typography variant="body_3">{product.name}</Typography>
      </div>
      <div className={s.myPrice}>
        <Typography>Моя предложенная цена (общая сумма)</Typography>
        <TextField placeholder={total} />
      </div>
      <div className={s.counter}>
        <Typography>Количество (шт)</Typography>
        <Counter
          countCurrent={countCurrent}
          increment={increment}
          decrement={decrement}
        />
      </div>
    </div>
  );
};
