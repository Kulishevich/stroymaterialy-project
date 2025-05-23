import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/shared/ui/button";
import { CloseIcon } from "@/shared/assets/icons";
import { Typography } from "@/shared/ui/typography";
import { useChangePasswordMutation } from "@/api/user/user.api";
import { useForm, useWatch } from "react-hook-form";
import { ControlledTextField } from "@/shared/ui/controlled-textfiled";
import { editPasswordScheme } from "./model/edit-password-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import s from "./EditPasswordPopup.module.scss";
import { validation } from "@/shared/validation/validation.errors";
import { showToast } from "@/shared/ui/toast";
import { useTranslations } from "next-intl";

type EditPasswordPopupProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditPasswordPopup = ({
  isOpen,
  setIsOpen,
}: EditPasswordPopupProps) => {
  const t = useTranslations("profile.profile_personal_data.edit_password");
  const [changePassword] = useChangePasswordMutation();

  const { control, handleSubmit, reset, setError } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(editPasswordScheme()),
  });

  const password = useWatch({ control, name: "newPassword" });
  const confirmPassword = useWatch({
    control,
    name: "newPasswordConfirmation",
  });

  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setError("newPasswordConfirmation", {
        message: validation.passwordsMatch,
      });
    } else {
      setError("newPasswordConfirmation", { message: "" });
    }
  }, [password, confirmPassword, setError]);

  const formHandler = handleSubmit(async (data) => {
    try {
      await changePassword(data).unwrap();
      showToast({ message: t("success_message"), variant: "success" });
      reset();
      setIsOpen(false);
    } catch (err: unknown) {
      console.error(err);
      showToast({ message: t("error_message"), variant: "error" });
    }
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <form onSubmit={formHandler}>
          <Typography variant="h3" as="h3">
            {t("title")}
          </Typography>
          <div className={s.inputsContainer}>
            <div className={s.inputContainer}>
              <Typography variant="body_5">{t("current_password")}</Typography>
              <ControlledTextField
                control={control}
                name="password"
                variant="password"
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">{t("new_password")}</Typography>
              <ControlledTextField
                control={control}
                name="newPassword"
                variant="password"
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">
                {t("confirm_new_password")}
              </Typography>
              <ControlledTextField
                control={control}
                name="newPasswordConfirmation"
                variant="password"
              />
            </div>
          </div>
          <Button fullWidth={true} className={s.buttonSubmit} type="submit">
            {t("save_button")}
          </Button>
        </form>
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
