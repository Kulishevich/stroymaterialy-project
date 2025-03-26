import React, { useState } from "react";
import s from "./PurchaseMethod.module.scss";
import { Typography } from "@/components/ui/typography";
import { RhombIcon } from "@/assets/icons";
import { ControlledRadioCards } from "@/components/ui/controlled-radio-cards/ControlledRadioCards";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { Control } from "react-hook-form";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { PaymentFormValues } from "../payment-page";
import { Address } from "@/api/addresses/address.types";
import { OptionsValue } from "@/components/ui/select";
import { OrderTypes } from "@/api/orders/orders.types";
import { AddNewAddress } from "../add-new-address";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Paths } from "@/shared/enums";
import { Region } from "@/api/regions/regions.types";

type PurchaseMethodProps = {
  addressList: Address[] | [];
  setAddressList: (value: Address[]) => void;
  controlForm: Control<PaymentFormValues>;
  deliveryTimeOptions: OptionsValue[];
  deliveryDataOptions: OptionsValue[];
  orderTypes: OrderTypes[];
  orderTypeId: string;
  user: boolean;
  regions: Region[];
};

export const PurchaseMethod = ({
  orderTypeId,
  addressList,
  setAddressList,
  controlForm,
  deliveryTimeOptions,
  deliveryDataOptions,
  orderTypes,
  user,
  regions,
}: PurchaseMethodProps) => {
  const t = useTranslations("payment.purchase_method");
  const isMobile = useIsMobile("tablet");
  const [isAddAddress, setIsAddAddress] = useState(false);

  const orderTypesOptions = orderTypes.map((orderType, index) => {
    return {
      ...orderType,
      id: String(orderTypes[index].id),
      value: orderTypes[index].name,
      title: <Typography variant="body_7">{orderType.name}</Typography>,
      content: (
        <>
          <Typography variant="body_6">{orderType.description}</Typography>
          <Typography variant="body_5">{orderType.price}</Typography>
        </>
      ),
    };
  });

  const radioOptions =
    !!addressList?.length &&
    addressList.map((address) => {
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
          {t("title")}
        </Typography>
      </div>
      {isAddAddress ? (
        <AddNewAddress
          setIsAddAddress={setIsAddAddress}
          setAddressList={setAddressList}
          user={user}
          regions={regions}
        />
      ) : (
        <div className={s.selectedAdress}>
          <Typography variant="h4" as="h4">
            {t("address")}
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
            {t("add_address_button")}
          </Typography>
        </div>
      )}
      <div className={s.deliveryMethod}>
        <div className={s.deliveryTitle}>
          <Typography variant="h4" as="h4">
            {t("delivery_method.title")}
          </Typography>
          {!isMobile && (
            <Typography
              as={Link}
              href={`${Paths.deliveryAndPayment}`}
              variant="body_4"
              className={s.button}
              target="_blank"
            >
              {t("delivery_method.details_button")}
            </Typography>
          )}
        </div>
        <div className={s.cardsContainer}>
          <ControlledRadioCards
            options={orderTypesOptions}
            control={controlForm}
            name="orderType"
          />
        </div>
        {!!orderTypeId && orderTypeId !== "15" && (
          <div className={s.deliveryTimeContainer}>
            <ControlledSelect
              control={controlForm}
              name="deliveryTime"
              options={deliveryTimeOptions}
            />
            <ControlledSelect
              control={controlForm}
              name="deliveryData"
              options={deliveryDataOptions}
            />
          </div>
        )}
        {isMobile && (
          <Typography
            as={Link}
            href={`${Paths.deliveryAndPayment}`}
            variant="body_4"
            className={s.button}
            target="_blank"
          >
            {t("delivery_method.details_button")}
          </Typography>
        )}
      </div>
    </div>
  );
};
