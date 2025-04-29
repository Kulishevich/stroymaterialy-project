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
import { useTranslations } from "next-intl";
import { ProductDelivery } from "../product-delivery";
import { ProductLifting } from "../product-lifting";

type ProductInfoProps = {
  item: Product;
};

export const ProductInfo = ({ item }: ProductInfoProps) => {
  const t = useTranslations("product");
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
      showToast({ message: t("added_to_cart"), variant: "success" });
    } catch (err: unknown) {
      console.error(err);
      showToast({ message: t("error"), variant: "error" });
    }
  };

  const handleAddFavorite = async () => {
    if (isFavorite) {
      try {
        await deleteFavorite(item?.id).unwrap();
        showToast({ message: t("removed_from_favorites"), variant: "success" });
      } catch (err: unknown) {
        console.error(err);
        showToast({ message: t("error"), variant: "error" });
      }
    } else {
      try {
        await addInFavorite({ products: [item?.id] }).unwrap();
        showToast({ message: t("added_to_favorites"), variant: "success" });
      } catch (err: unknown) {
        console.error(err);
        showToast({ message: t("error"), variant: "error" });
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
              <span className={s.title}>{t("brand")}</span>
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
              {t("add_to_cart")}
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
              {t("request_discount")}
            </Button>
          </div>
        </div>
      </div>
      <div className={s.description}>
        <div className={s.elem}>
          <Typography variant="h3" as="h3">
            {t("description")}
          </Typography>
          <Typography
            variant="body_1"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
        <div className={s.elem}>
          <Typography variant="h3" as="h3">
            {t("delivery_info")}
          </Typography>
          {!isMobile ? <ProductDelivery /> : <TableDelliveryMobile />}
        </div>
        <div className={s.elem}>
          <Typography variant="h3" as="h3">
            {t("lifting_info")}
          </Typography>
          {!isMobile ? <ProductLifting /> : <TableLiftingMobile />}
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
