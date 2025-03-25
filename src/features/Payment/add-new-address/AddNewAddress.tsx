import { Button } from "@/components/ui/button";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { Typography } from "@/components/ui/typography";
import React, { useEffect } from "react";
import s from "./AddNewAddress.module.scss";
import { useGetRegionsQuery } from "@/api/regions/regions.api";
import { useCreateAddressMutation } from "@/api/addresses/address.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { addAddressScheme } from "@/features/Profile/add-address-popup/model/add-address-scheme";
import { useForm } from "react-hook-form";

type AddNewAddressProps = {
  setIsAddAddress: (value: boolean) => void;
};

export const AddNewAddress = ({ setIsAddAddress }: AddNewAddressProps) => {
  const { data: regions } = useGetRegionsQuery();
  const [createAddress] = useCreateAddressMutation();

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      regionId: null as string | null,
      address: "",
      details: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(addAddressScheme()),
  });

  useEffect(() => {
    if (regions?.data?.length) {
      reset((prev) => ({
        ...prev,
        regionId: regions.data[0].id,
      }));
    }
  }, [regions, reset]);

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
            options={regions?.data}
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
