import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./AddAddressPopup.module.scss";
import { Button } from "@/components/ui/button";
import { CloseIcon } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { useForm } from "react-hook-form";
import { useGetRegionsQuery } from "@/api/regions/regions.api";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { ControlledTextArea } from "@/components/ui/controlled-text-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { addAddressScheme } from "./model/add-address-scheme";
import { useCreateAddressMutation } from "@/api/addresses/address.api";
import { showToast } from "@/components/ui/toast";

type AddAddressPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddAddressPopup = ({
  isOpen,
  setIsOpen,
}: AddAddressPopupProps) => {
  const [createAddress] = useCreateAddressMutation();
  const { data: regions } = useGetRegionsQuery();
  console.log("Regions:", regions);

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
        regionId: regions.data[0].id,
      }));
    }
  }, [regions, reset]);

  const formHandler = handleSubmit(async (data) => {
    const fetchData = { ...data, regionId: Number(data.regionId) };
    try {
      const res = await createAddress(fetchData).unwrap();
      console.log("result", res);
      setIsOpen(false);
      reset();
      showToast({ message: "Адрес добавлен", variant: "success" });
    } catch (err) {
      console.error(err);
      showToast({ message: "Ошибка при добавлении адреса", variant: "error" });
    }
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Typography variant="h3" as="h3">
          Добавить адрес
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
