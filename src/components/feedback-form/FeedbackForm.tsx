import s from "./FeedbackForm.module.scss";
import Image from "next/image";
import { Typography, Variant } from "../ui/typography";
import { Button } from "../ui/button";
import { SocialNetworks } from "../social-networks";
import { useForm } from "react-hook-form";
import { ControlledTextField } from "../ui/controlled-textfiled";
import { ControlledCheckbox } from "../ui/controlled-checkbox";
import { feedbackFormSchemeCreator } from "./model/feedback-form-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

export const FeedbackForm = () => {
  const isMobile = useIsMobile("tablet");
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
          Связаться с нами
        </Typography>
        <Typography variant="body_2" className={s.text}>
          Для связи заполните форму обратной связи, и наш специалист позвонит
          вам в ближайшее время
        </Typography>
        <div className={s.inputsContainer}>
          <ControlledTextField
            control={control}
            name="name"
            isRequired={true}
            placeholder="Имя"
          />
          <ControlledTextField
            control={control}
            name="phone"
            isRequired={true}
            placeholder="Телефон"
          />
        </div>
        <div className={s.submitContainer}>
          <Button variant={"secondary"} type="submit" disabled={!isValid}>
            Отправить
          </Button>
          <ControlledCheckbox
            control={control}
            name="agreement"
            label="Согласие на обработку персональных данных"
            labelText={Variant.body_6}
            className={s.checkbox}
          />
        </div>
        <Typography variant="body_2" className={s.text}>
          или свяжитесь с нами через социальные сети
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
