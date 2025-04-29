import React, { useState } from "react";
import { Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { AddAddressPopup } from "../add-address-popup";
import { RadioCards } from "@/shared/ui/radio-cards";
import { useSetDefaultAddressMutation } from "@/api/addresses/address.api";
import { EditAddressPopup } from "../edit-address-popup";
import { Address, GetAddressesResponse } from "@/api/addresses/address.types";
import s from "./MyAddresses.module.scss";
import { useTranslations } from "next-intl";
import { GetRegionsResponse } from "@/api/regions/regions.types";

export const MyAddresses = ({
  addresses,
  name,
  regions,
}: {
  regions: GetRegionsResponse | undefined;
  name: string;
  addresses: GetAddressesResponse | undefined;
}) => {
  const t = useTranslations("profile.my_addresses");
  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);
  const [isEditAddressOpen, setIsEditAddressOpen] = useState(false);
  const [editAddress, setEditAddress] = useState<Address | null>(null);
  const [setDefaultAddress] = useSetDefaultAddressMutation();

  const defaultAddress = addresses?.data.find((elem) => elem.isDefault);

  const addressesOptions = addresses?.data.map((address) => {
    return {
      id: String(address.id),
      value: String(address.id),
      title: (
        <>
          <Typography variant="body_5">{name}</Typography>
          {address.isDefault && (
            <Typography variant="body_3">
              {t("default_address_label")}
            </Typography>
          )}
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
            {t("edit_button")}
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
      await setDefaultAddress(id).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
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
            {t("new_address_button")}
          </Button>
        </div>
      ) : (
        <div className={s.addAddress}>
          <Typography variant="body_5">{t("no_address_message")}</Typography>
          <Button
            className={s.button}
            onClick={() => setIsAddAddressOpen(true)}
          >
            {t("add_address_button")}
          </Button>
        </div>
      )}
      <AddAddressPopup
        isOpen={isAddAddressOpen}
        setIsOpen={setIsAddAddressOpen}
        regions={regions}
      />
      {!!editAddress && (
        <EditAddressPopup
          isOpen={isEditAddressOpen}
          setIsOpen={setIsEditAddressOpen}
          address={editAddress}
          regions={regions}
        />
      )}
    </div>
  );
};
