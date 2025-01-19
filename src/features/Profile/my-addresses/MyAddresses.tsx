import React, { useState } from "react";
import s from "./MyAddresses.module.scss";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AddAddressPopup } from "../add-address-popup";
import { RadioCards } from "@/components/ui/radio-cards";

const addressesOptions = [
  {
    id: "1",
    value: "express_delivery",
    title: (
      <>
        <Typography variant="body_5">Эдвард</Typography>
        <Typography variant="body_3">Основной адрес</Typography>
      </>
    ),
    content: (
      <>
        <Typography variant="body_6">
          8F9P+XJF, Charents St, Yeghvard, Армения
        </Typography>
        <Typography variant="body_6" as="button" className={s.editButton}>
          Редактировать
        </Typography>
      </>
    ),
  },
  {
    id: "1",
    value: "express_delivery",
    title: (
      <>
        <Typography variant="body_5">Эдвард</Typography>
        <Typography variant="body_3">Основной адрес</Typography>
      </>
    ),
    content: (
      <>
        <Typography variant="body_6">
          8F9P+XJF, Charents St, Yeghvard, Армения
        </Typography>
        <Typography variant="body_6" as="button" className={s.editButton}>
          Редактировать
        </Typography>
      </>
    ),
  },
];

export const MyAddresses = () => {
  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Мои адреса
      </Typography>
      {addressesOptions.length > 0 ? (
        <div className={s.addressContainer}>
          <div className={s.cards}>
            <RadioCards options={addressesOptions} className={s.radioAddress} />
          </div>
          <Button
            className={s.button}
            onClick={() => setIsAddAddressOpen(true)}
          >
            Новый адрес
          </Button>
        </div>
      ) : (
        <div className={s.addAddress}>
          <Typography variant="body_5">
            Вы не добавили ни какой адрес.
          </Typography>
          <Button
            className={s.button}
            onClick={() => setIsAddAddressOpen(true)}
          >
            Добавить адрес
          </Button>
        </div>
      )}
      <AddAddressPopup
        isOpen={isAddAddressOpen}
        setIsOpen={setIsAddAddressOpen}
      />
    </div>
  );
};
