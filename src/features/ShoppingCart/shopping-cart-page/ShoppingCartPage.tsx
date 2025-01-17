import React, { useState } from "react";
import s from "./ShoppingCartPage.module.scss";
import { Typography } from "@/components/ui/typography";
import { Counter } from "@/components/item/counter";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@/assets/icons";
import Image from "next/image";
import { RequestDiscountPopup } from "../request-discount-popup";
import Link from "next/link";
import { Paths } from "@/shared/enums";

const products = [
  {
    id: "1",
    image: "/images/profile-card.png",
    title: "Абразивный диск с листовой кромкой песок N60, 115мм RODEX",
    price: "500,00 AMD",
  },
  {
    id: "2",
    image: "/images/profile-card.png",
    title: "Абразивный диск с листовой кромкой песок N60, 115мм RODEX",
    price: "500,00 AMD",
  },
  {
    id: "3",
    image: "/images/profile-card.png",
    title: "Абразивный диск с листовой кромкой песок N60, 115мм RODEX",
    price: "500,00 AMD",
  },
];

export const ShoppingCartPage = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              {products.map((product) => (
                <tr key={product.id}>
                  <td className={s.card}>
                    <Image
                      src={product.image}
                      width={120}
                      height={120}
                      alt="product image"
                      className={s.image}
                    />
                    <Typography variant="body_3">{product.title}</Typography>
                  </td>
                  <td>
                    <Typography variant="body_2">{product.price}</Typography>
                  </td>
                  <td>
                    <Counter />
                  </td>
                  <td>
                    <Typography variant="body_2">{product.price}</Typography>
                  </td>
                  <td>
                    <Button variant={"icon"} className={s.trashButton}>
                      <TrashIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Typography variant="body_4" as="button" className={s.clearButton}>
            Очистить корзину
          </Typography>
        </div>
        <div className={s.price}>
          <div className={s.total}>
            <Typography variant="body_3">Цена</Typography>
            <Typography variant="body_3">1 500,00 AMD</Typography>
          </div>
          <div className={s.total}>
            <Typography variant="h4">Сумма</Typography>
            <Typography variant="h4">1 500,00 AMD</Typography>
          </div>
          <div className={s.buttonsContainer}>
            <Button fullWidth={true} as={Link} href={Paths.payment}>
              Продолжить
            </Button>
            <Button
              fullWidth={true}
              variant="secondary"
              onClick={() => setIsOpen(true)}
            >
              Запросить скидку
            </Button>
          </div>
        </div>
      </div>
      <RequestDiscountPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        orders={products}
      />
    </div>
  );
};
