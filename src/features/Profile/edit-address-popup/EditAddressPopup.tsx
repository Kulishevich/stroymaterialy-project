import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { useForm } from "react-hook-form";
import { useGetRegionsQuery } from "@/api/regions/regions.api";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { ControlledTextArea } from "@/components/ui/controlled-text-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateAddressMutation } from "@/api/addresses/address.api";
import { editAddressScheme } from "./model/edit-address-scheme";
import { Address } from "@/api/addresses/address.types";
import { showToast } from "@/components/ui/toast";
import s from "./EditAddressPopup.module.scss";

type AddAddressPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  address: Address;
};

export const EditAddressPopup = ({
  isOpen,
  setIsOpen,
  address,
}: AddAddressPopupProps) => {
  const [updateAddress] = useUpdateAddressMutation();
  const { data: regions } = useGetRegionsQuery();
  console.log("Regions:", regions);
  console.log("adres:", address);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      regionId: address.region.id,
      address: address.address,
      details: address.details,
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(editAddressScheme()),
  });

  const formHandler = handleSubmit(async (data) => {
    const fetchData = {
      args: { ...data, regionId: Number(data.regionId) },
      id: address.id,
    };

    try {
      const res = await updateAddress(fetchData).unwrap();
      console.log("result", res);
      setIsOpen(false);
      reset();
      showToast({ message: "Адрес изменён", variant: "success" });
    } catch (err) {
      console.error(err);
      showToast({
        message: "Ошибка при редактировании адреса",
        variant: "error",
      });
    }
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3" as="h3">
          Редактировать адрес
        </Typography>

        <div className={s.inputsContainer}>
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
            <ControlledTextField control={control} name="address" />
          </div>
          <div className={s.inputContainer}>
            <Typography variant="body_5">Детали адреса доставки</Typography>
            <ControlledTextArea
              className={s.textarea}
              control={control}
              name="details"
            />
          </div>
        </div>

        <Button
          disabled={!isValid}
          fullWidth={true}
          className={s.button}
          onClick={formHandler}
        >
          Сохранить
        </Button>

        <Button
          variant={"icon"}
          className={s.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </Button>
      </Dialog.Content>
    </Dialog.Root>
  );
};
