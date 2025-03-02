import { Counter } from "@/components/counter";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { CartList } from "@/api/cart/cart.types";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { Control, Controller } from "react-hook-form";
import s from "./RequestDiscountItem.module.scss";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

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
  const t = useTranslations("cart.request_discount_popup");
  const isMobile = useIsMobile("tablet");
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
        {!isMobile ? (
          <Typography variant="body_3">{product.name}</Typography>
        ) : (
          <Typography variant="body_7">{product.price}</Typography>
        )}
      </div>
      <div className={s.container}>
        <div className={s.myPrice}>
          {isMobile && (
            <>
              <Typography variant="body_5">{t("product")}</Typography>
              <Typography variant="body_6">{product.name}</Typography>
            </>
          )}

          <Typography variant="body_5"> {t("my_suggested_price")}</Typography>
          <ControlledTextField
            placeholder={total}
            control={control}
            name={`orders.${index}.price`}
            className={s.input}
          />
        </div>
        <div className={s.counter}>
          <Typography variant="body_5"> {t("quantity")}</Typography>
          <Controller
            control={control}
            name={`orders.${index}.count`}
            render={({ field }) => (
              <Counter
                size={!isMobile ? "l" : "s"}
                countCurrent={field.value}
                increment={() => field.onChange(field.value + 1)}
                decrement={() => field.onChange(field.value - 1)}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
