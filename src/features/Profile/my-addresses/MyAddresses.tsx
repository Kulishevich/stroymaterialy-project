import React, { useState } from "react";
import s from "./MyAddresses.module.scss";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AddAddressPopup } from "../add-address-popup";
import { Checkbox } from "@/components/ui/checkbox";

const addresses = [
  {
    id: "1",
    name: "Эдвард",
    info: "8F9P+XJF, Charents St, Yeghvard, Армения",
  },
  {
    id: "2",
    name: "Эдвард",
    info: "8F9P+XJF, Charents St, Yeghvard, Армения",
  },
];

export const MyAddresses = () => {
  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Мои адреса
      </Typography>
      {addresses.length > 0 ? (
        <div className={s.addressContainer}>
          <div className={s.cards}>
            {addresses.map((address) => (
              <div className={s.card} key={address.id}>
                <div className={s.title}>
                  <Typography variant="body_5">{address.name}</Typography>
                  <div className={s.checkboxContainer}>
                    <Typography variant="body_3">Основной адрес</Typography>
                    <Checkbox />
                  </div>
                </div>
                <Typography variant="body_3">{address.info}</Typography>
                <Typography
                  variant="body_6"
                  as="button"
                  className={s.editButton}
                >
                  Редактировать
                </Typography>
              </div>
            ))}
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
