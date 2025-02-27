import { Counter } from "@/components/counter";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { CartList } from "@/api/cart/cart.types";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { Control, Controller } from "react-hook-form";
import s from "./RequestDiscountItem.module.scss";

type FormValues = {
  orders: {
    productId: string;
    price: string;
    count: number;
  }[];
};

type RequestDiscountItemProps = {
  order: CartList;
  index: number;
  control: Control<FormValues>;
};

export const RequestDiscountItem = ({
  order,
  index,
  control,
}: RequestDiscountItemProps) => {
  const { product, total } = order;

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
        <ControlledTextField
          placeholder={total}
          control={control}
          name={`orders.${index}.price`}
        />
      </div>
      <div className={s.counter}>
        <Typography>Количество (шт)</Typography>
        <Controller
          control={control}
          name={`orders.${index}.count`}
          render={({ field }) => (
            <Counter
              countCurrent={field.value}
              increment={() => field.onChange(field.value + 1)}
              decrement={() => field.onChange(field.value - 1)}
            />
          )}
        />
      </div>
    </div>
  );
};
