import React, { useEffect, useState } from "react";
import s from "./ProfilePersonalData.module.scss";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import { EditPasswordPopup } from "../edit-password-popup";
import {
  useChangeSettingMutation,
  useDeleteUserMutation,
  useGetUserSettingQuery,
} from "@/api/user/user.api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { profileSettingScheme } from "./model/profile-setting-scheme";

export const ProfilePersonalData = () => {
  const [isEditPassword, setIsEditPassword] = useState<boolean>(false);
  const { data } = useGetUserSettingQuery();
  const [changeSetting] = useChangeSettingMutation();
  const [deleteUser] = useDeleteUserMutation();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(profileSettingScheme()),
  });

  useEffect(() => {
    if (data) {
      reset({
        name: data?.data.firstName || "",
        surname: data?.data.lastName || "",
        phone: data?.data.phone || "",
        email: data?.data.email || "",
      });
    }
  }, [data, reset]);

  const formHandler = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = await changeSetting(data).unwrap();
      console.log(res);
    } catch (err: unknown) {
      console.error(err);
    }
  });

  const handleDeleteUser = async () => {
    try {
      await deleteUser().unwrap();
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Персональные данные
      </Typography>
      <form className={s.inputsContainer}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Имя</Typography>
          <ControlledTextField
            control={control}
            name="name"
            placeholder="Имя"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Фамилия</Typography>
          <ControlledTextField
            control={control}
            name="surname"
            placeholder="Фамилия"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Телефон</Typography>
          <ControlledTextField
            control={control}
            name="phone"
            placeholder="(+374) 12 34 56 78"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">Эл. адрес</Typography>
          <ControlledTextField
            control={control}
            name="email"
            placeholder="Эл. адрес"
          />
        </div>
      </form>
      <Typography
        variant="button"
        as="button"
        className={s.button}
        onClick={formHandler}
      >
        Редактировать
      </Typography>
      <div className={s.inputContainer}>
        <Typography variant="body_5">Пароль</Typography>
        <TextField placeholder="Пароль" variant="password" />
      </div>
      <Typography
        variant="button"
        as="button"
        className={s.button}
        onClick={() => setIsEditPassword(true)}
      >
        Редактировать
      </Typography>
      <Button
        variant="secondary"
        className={s.deleteButton}
        onClick={handleDeleteUser}
      >
        Удалить страницу
      </Button>
      <EditPasswordPopup
        isOpen={isEditPassword}
        setIsOpen={setIsEditPassword}
      />
    </div>
  );
};
