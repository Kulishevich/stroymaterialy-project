import { Button } from "@/components/ui/button";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { Typography } from "@/components/ui/typography";
import React from "react";
import { useCreateAddressMutation } from "@/api/addresses/address.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { addAddressScheme } from "@/features/Profile/add-address-popup/model/add-address-scheme";
import { useForm } from "react-hook-form";
import s from "./AddNewAddress.module.scss";
import { Region } from "@/api/regions/regions.types";

type AddNewAddressProps = {
  setIsAddAddress: (value: boolean) => void;
  regions: Region[];
};

export const AddNewAddress = ({
  setIsAddAddress,
  regions,
}: AddNewAddressProps) => {
  const [createAddress] = useCreateAddressMutation();

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      regionId: String(regions[0].id),
      address: "",
      details: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(addAddressScheme()),
  });

  const addNewAddressForm = handleSubmit(async (data) => {
    try {
      await createAddress({
        ...data,
        regionId: Number(data.regionId),
      }).unwrap();
      reset();
      setIsAddAddress(false);
    } catch (err: unknown) {
      console.log(err);
    }
  });

  const options = regions?.map((elem) => ({
    ...elem,
    id: String(elem.id),
  }));

  return (
    <div className={s.addAddress}>
      <Typography variant="h4" as="h4">
        Добавить адрес
      </Typography>
      <div className={s.addressFields}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Округ</Typography>
          <ControlledSelect
            control={control}
            name="regionId"
            options={options}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Адрес доставки</Typography>
          <ControlledTextField
            control={control}
            name="address"
            placeholder="Адрес доставки"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Детали адреса доставки</Typography>
          <ControlledTextField
            control={control}
            name="details"
            placeholder="Детали адреса доставки"
          />
        </div>
      </div>
      <Button
        className={s.saveAdressButton}
        onClick={addNewAddressForm}
        disabled={!isValid}
      >
        Сохранить адрес
      </Button>
      <Typography
        variant="button"
        as="button"
        onClick={() => setIsAddAddress(false)}
        className={s.buttonBack}
      >
        Назад
      </Typography>
    </div>
  );
};
