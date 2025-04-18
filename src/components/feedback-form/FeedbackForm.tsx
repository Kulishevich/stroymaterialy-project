import s from "./FeedbackForm.module.scss";
import Image from "next/image";
import { Typography, Variant } from "../../shared/ui/typography";
import { Button } from "../../shared/ui/button";
import { SocialNetworks } from "../social-networks";
import { useForm } from "react-hook-form";
import { ControlledTextField } from "../../shared/ui/controlled-textfiled";
import { ControlledCheckbox } from "../../shared/ui/controlled-checkbox";
import { feedbackFormSchemeCreator } from "./model/feedback-form-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { useTranslations } from "next-intl";

export const FeedbackForm = () => {
  const isMobile = useIsMobile("tablet");
  const t = useTranslations("feedback_form");
  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      agreement: false,
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(feedbackFormSchemeCreator()),
  });

  const formHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className={s.wrapper}>
      <form className={s.container} onSubmit={formHandler}>
        <Typography as="h2" variant="h2" className={s.text}>
          {t("title")}
        </Typography>
        <Typography variant="body_2" className={s.text}>
          {t("description")}
        </Typography>
        <div className={s.inputsContainer}>
          <ControlledTextField
            control={control}
            name="name"
            isRequired={true}
            placeholder={t("name_placeholder")}
          />
          <ControlledTextField
            control={control}
            name="phone"
            isRequired={true}
            placeholder={t("phone_placeholder")}
          />
        </div>
        <div className={s.submitContainer}>
          <Button variant={"secondary"} type="submit" disabled={!isValid}>
            {t("submit_button")}
          </Button>
          <ControlledCheckbox
            control={control}
            name="agreement"
            label={t("agreement_label")}
            labelText={Variant.body_6}
            className={s.checkbox}
          />
        </div>
        <Typography variant="body_2" className={s.text}>
          {t("social_text")}
        </Typography>
        <SocialNetworks />
      </form>
      <Image
        src={"/images/image1.jpg"}
        width={!isMobile ? 440 : 336}
        height={!isMobile ? 464 : 220}
        alt="image"
        className={s.image}
      />
    </div>
  );
};
