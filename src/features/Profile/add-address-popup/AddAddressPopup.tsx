import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./AddAddressPopup.module.scss";
import { Button } from "@/shared/ui/button";
import { CloseIcon } from "@/shared/assets/icons";
import { Typography } from "@/shared/ui/typography";
import { useForm } from "react-hook-form";
import { ControlledSelect } from "@/shared/ui/controlled-select";
import { ControlledTextField } from "@/shared/ui/controlled-textfiled";
import { ControlledTextArea } from "@/shared/ui/controlled-text-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { addAddressScheme } from "./model/add-address-scheme";
import { useCreateAddressMutation } from "@/api/addresses/address.api";
import { showToast } from "@/shared/ui/toast";
import { useTranslations } from "next-intl";
import { GetRegionsResponse } from "@/api/regions/regions.types";

type AddAddressPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  regions: GetRegionsResponse | undefined;
};

export const AddAddressPopup = ({
  isOpen,
  setIsOpen,
  regions,
}: AddAddressPopupProps) => {
  const t = useTranslations("profile.my_addresses.add_address_popup");
  const [createAddress] = useCreateAddressMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
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
        regionId: String(regions.data[0].id),
      }));
    }
  }, [regions, reset]);

  const formHandler = handleSubmit(async (data) => {
    const fetchData = { ...data, regionId: Number(data.regionId) };
    try {
      await createAddress(fetchData).unwrap();
      setIsOpen(false);
      reset();
      showToast({ message: "Адрес добавлен", variant: "success" });
    } catch (err) {
      console.error(err);
      showToast({ message: "Ошибка при добавлении адреса", variant: "error" });
    }
  });

  const options = regions?.data.map((elem) => ({
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
              options={options}
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
          variant={"only_icon"}
          className={s.closeButton}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </Button>
      </Dialog.Content>
    </Dialog.Root>
  );
};
