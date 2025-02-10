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
import { showToast } from "@/components/ui/toast";
import { useRouter } from "next/router";
import { Paths } from "@/shared/enums";
import { useDispatch } from "react-redux";
import { logout } from "@/store/slices/auth/authSlice";
import { useTranslations } from "next-intl";

export const ProfilePersonalData = () => {
  const t = useTranslations("profile.profile_personal_data");
  const [isEditPassword, setIsEditPassword] = useState<boolean>(false);
  const { data } = useGetUserSettingQuery();
  const [changeSetting] = useChangeSettingMutation();
  const [deleteUser] = useDeleteUserMutation();
  const router = useRouter();
  const dispatch = useDispatch();

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
    const fetchData = {
      name: `${data.name} ${data.surname}`,
      email: data.email,
      phone: data.phone,
    };
    console.log(fetchData);
    try {
      const res = await changeSetting(fetchData).unwrap();
      console.log(res);
      showToast({ message: "Отредачено", variant: "success" });
    } catch (err: unknown) {
      console.error(err);
      showToast({ message: "Ошибка", variant: "error" });
    }
  });

  const handleDeleteUser = async () => {
    try {
      await deleteUser().unwrap();
      dispatch(logout());
      router.push(Paths.home);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        {t("title")}
      </Typography>
      <form className={s.inputsContainer}>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("name_label")}</Typography>
          <ControlledTextField
            control={control}
            name="name"
            placeholder={t("name_label")}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("surname_label")}</Typography>
          <ControlledTextField
            control={control}
            name="surname"
            placeholder={t("surname_label")}
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("phone_label")}</Typography>
          <ControlledTextField
            control={control}
            name="phone"
            placeholder="(+374) 12 34 56 78"
          />
        </div>
        <div className={s.inputContainer}>
          <Typography variant="body_5">{t("email_label")}</Typography>
          <ControlledTextField
            control={control}
            name="email"
            placeholder={t("email_label")}
          />
        </div>
      </form>
      <Typography
        variant="button"
        as="button"
        className={s.button}
        onClick={formHandler}
      >
        {t("edit_button")}
      </Typography>
      <div className={s.inputContainer}>
        <Typography variant="body_5">{t("password_label")}</Typography>
        <TextField
          placeholder={t("password_label")}
          variant="password"
          value={12345678}
          disabled={true}
        />
      </div>
      <Typography
        variant="button"
        as="button"
        className={s.button}
        onClick={() => setIsEditPassword(true)}
      >
        {t("edit_button")}
      </Typography>
      <Button
        variant="secondary"
        className={s.deleteButton}
        onClick={handleDeleteUser}
      >
        {t("delete_button")}
      </Button>
      <EditPasswordPopup
        isOpen={isEditPassword}
        setIsOpen={setIsEditPassword}
      />
    </div>
  );
};
