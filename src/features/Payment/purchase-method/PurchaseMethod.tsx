import React, { useEffect, useState } from "react";
import s from "./PurchaseMethod.module.scss";
import { Typography } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { ControlledRadioCards } from "@/components/ui/controlled-radio-cards/ControlledRadioCards";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useGetRegionsQuery } from "@/api/regions/regions.api";
import { Control, useForm } from "react-hook-form";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { useCreateAddressMutation } from "@/api/addresses/address.api";
import { addAddressScheme } from "@/features/Profile/add-address-popup/model/add-address-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentFormValues } from "../payment-page";
import { Address } from "@/api/addresses/address.types";

const deliveryMethodOprions = [
  {
    id: "1",
    value: "Стандартная доставка",
    title: <Typography variant="body_7">Стандартная доставка</Typography>,
    content: (
      <>
        <Typography variant="body_6">
          до 2 дней (не распространяется на цемент и гипсокартон)
        </Typography>
        <Typography variant="body_5">Бесплатно</Typography>
      </>
    ),
  },
  {
    id: "2",
    value: "Экспресс доставка",
    title: <Typography variant="body_7">Экспресс доставка</Typography>,
    content: (
      <>
        <Typography variant="body_6">
          день в день (в течение 2-4 часов)
        </Typography>
        <Typography variant="body_5">от 2000 драм</Typography>
      </>
    ),
  },
  {
    id: "3",
    value: "Курьер Мопед",
    title: <Typography variant="body_7">Курьер Мопед (до 10 кг)</Typography>,
    content: (
      <>
        <Typography variant="body_6">
          день в день (в течение 2 часов)
        </Typography>
        <Typography variant="body_5">1500 драм</Typography>
      </>
    ),
  },
  {
    id: "4",
    value: "Айпост Доставка",
    title: (
      <Typography variant="body_7">Айпост Доставка (вес до 5 кг)</Typography>
    ),
    content: (
      <>
        <Typography variant="body_6">до 3 дней</Typography>
        <Typography variant="body_5">700 драм</Typography>
      </>
    ),
  },
];

type PurchaseMethodProps = {
  addresses: Address[];
  controlForm: Control<PaymentFormValues>;
};

export const PurchaseMethod = ({
  addresses,
  controlForm,
}: PurchaseMethodProps) => {
  const isMobile = useIsMobile("tablet");
  const [isAddAddress, setIsAddAddress] = useState(false);
  const { data: regions } = useGetRegionsQuery();
  const [createAddress] = useCreateAddressMutation();

  console.log(regions?.data);
  console.log("Адреса:", addresses);
  console.log("render");

  const radioOptions =
    !!addresses?.length &&
    addresses.map((address) => {
      return {
        id: String(address.id),
        value: address.address,
        title: "",
        content: (
          <Typography variant="body_1">
            {address.address},{address.region.name}
          </Typography>
        ),
      };
    });

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      regionId: "",
      address: "",
      details: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(addAddressScheme()),
  });

  useEffect(() => {
    if (regions?.data?.length) {
      reset(
        (prev) => ({
          ...prev,
          regionId: regions.data[0].id,
        }),
        { keepDefaultValues: true }
      );
    }
  }, [regions, reset]);

  const addNewAddressForm = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = await createAddress({
        ...data,
        regionId: Number(data.regionId),
      }).unwrap();
      console.log("add new address", res);
      reset();
      setIsAddAddress(false);
    } catch (err: unknown) {
      console.log(err);
    }
  });

  const selectedRegion = watch("regionId"); // Проверим текущее значение
  console.log(selectedRegion);

  return (
    <div className={s.payment}>
      <div className={s.title}>
        <div className={s.numCard}>
          <Typography variant="h3" as="h3">
            3
          </Typography>
          <RhombIcon />
        </div>
        <Typography variant="h3" as="h3">
          Способ покупки
        </Typography>
      </div>
      {isAddAddress ? (
        <div className={s.addAddress}>
          <Typography variant="h4" as="h4">
            Добавить адрес
          </Typography>
          <div className={s.addressFields}>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Округ</Typography>
              {regions && (
                <ControlledSelect
                  control={control}
                  key={regions?.data?.length}
                  name="regionId"
                  options={regions?.data}
                />
              )}
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
      ) : (
        <div className={s.selectedAdress}>
          <Typography variant="h4" as="h4">
            Адрес:
          </Typography>
          {radioOptions && (
            <ControlledRadioCards
              control={controlForm}
              name="addressId"
              options={radioOptions}
            />
          )}
          <Typography
            variant="button"
            as="button"
            onClick={() => setIsAddAddress(true)}
          >
            Добавить адрес
          </Typography>
        </div>
      )}
      <div className={s.deliveryMethod}>
        <div className={s.deliveryTitle}>
          <Typography variant="h4" as="h4">
            Способ доставки:
          </Typography>
          {!isMobile && (
            <Typography variant="body_4" className={s.button}>
              Подробнее о доставке
            </Typography>
          )}
        </div>
        <div className={s.cardsContainer}>
          <ControlledRadioCards
            options={deliveryMethodOprions}
            control={controlForm}
            name="orderType"
          />
        </div>
        {isMobile && (
          <Typography variant="body_4" className={s.button}>
            Подробнее о доставке
          </Typography>
        )}
      </div>
    </div>
  );
};
