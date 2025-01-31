import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AddAddressPopup } from "../add-address-popup";
import { RadioCards } from "@/components/ui/radio-cards";
import {
  useGetAddressesQuery,
  useSetDefaultAddressMutation,
} from "@/api/addresses/address.api";
import { EditAddressPopup } from "../edit-address-popup";
import { Address } from "@/api/addresses/address.types";
import s from "./MyAddresses.module.scss";

export const MyAddresses = () => {
  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);
  const [isEditAddressOpen, setIsEditAddressOpen] = useState(false);
  const [editAddress, setEditAddress] = useState<Address | null>(null);
  const [setDefaultAddress] = useSetDefaultAddressMutation();
  const { data: addresses } = useGetAddressesQuery({
    perPage: 20,
  });
  const defaultAddress = addresses?.data.find((elem) => elem.isDefault);

  const addressesOptions = addresses?.data.map((address) => {
    return {
      id: String(address.id),
      value: String(address.id),
      title: (
        <>
          <Typography variant="body_5">Эдвард</Typography>
          <Typography variant="body_3">Основной адрес</Typography>
        </>
      ),
      content: (
        <>
          <Typography variant="body_6">
            {address.address}, {address.region.name}, {address.details}
          </Typography>
          <Typography
            variant="body_6"
            as="button"
            className={s.editButton}
            onClick={() => handleOpenEditAddress(address)}
          >
            Редактировать
          </Typography>
        </>
      ),
    };
  });

  const handleOpenEditAddress = (address: Address) => {
    setIsEditAddressOpen(true);
    setEditAddress(address);
  };

  const changeDefaultAddress = async (id: number) => {
    try {
      await setDefaultAddress({ id: id }).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Мои адреса
      </Typography>
      {!!addressesOptions && addressesOptions?.length > 0 ? (
        <div className={s.addressContainer}>
          <div className={s.cards}>
            <RadioCards
              options={addressesOptions}
              className={s.radioAddress}
              defaultValue={String(defaultAddress?.id)}
              onValueChange={(value) => changeDefaultAddress(Number(value))}
            />
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
      {!!editAddress && (
        <EditAddressPopup
          isOpen={isEditAddressOpen}
          setIsOpen={setIsEditAddressOpen}
          address={editAddress}
        />
      )}
    </div>
  );
};
