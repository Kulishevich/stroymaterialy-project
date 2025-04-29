import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/shared/ui/button";
import { CloseIcon } from "@/shared/assets/icons";
import { Typography } from "@/shared/ui/typography";
import { useForm } from "react-hook-form";
import { useGetRegionsQuery } from "@/api/regions/regions.api";
import { ControlledSelect } from "@/shared/ui/controlled-select";
import { ControlledTextField } from "@/shared/ui/controlled-textfiled";
import { ControlledTextArea } from "@/shared/ui/controlled-text-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateAddressMutation } from "@/api/addresses/address.api";
import { editAddressScheme } from "./model/edit-address-scheme";
import { Address } from "@/api/addresses/address.types";
import { showToast } from "@/shared/ui/toast";
import s from "./EditAddressPopup.module.scss";
import { useTranslations } from "next-intl";
import { GetRegionsResponse } from "@/api/regions/regions.types";

type AddAddressPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  address: Address;
  regions: GetRegionsResponse | undefined;
};

export const EditAddressPopup = ({
  isOpen,
  setIsOpen,
  address,
  regions,
}: AddAddressPopupProps) => {
  const t = useTranslations("profile.my_addresses.edit_address_popup");
  const [updateAddress] = useUpdateAddressMutation();

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
      await updateAddress(fetchData).unwrap();
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

  const optionsRegions = regions?.data?.map((elem) => ({
    ...elem,
    id: String(elem.id),
  }));

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3" as="h3">
          {t("title")}
        </Typography>

        <div className={s.inputsContainer}>
          <div className={s.inputContainer}>
            <Typography variant="body_5">{t("region_label")}</Typography>
            <ControlledSelect
              control={control}
              name="regionId"
              options={optionsRegions}
            />
          </div>
          <div className={s.inputContainer}>
            <Typography variant="body_5">{t("address_label")}</Typography>
            <ControlledTextField control={control} name="address" />
          </div>
          <div className={s.inputContainer}>
            <Typography variant="body_5">{t("details_label")}</Typography>
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
          {t("save_button")}
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
