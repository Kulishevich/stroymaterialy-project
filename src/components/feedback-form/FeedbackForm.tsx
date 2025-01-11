import s from "./FeedbackForm.module.scss";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { TextField } from "../ui/text-field";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { SocialNetworks } from "../social-networks";

export const FeedbackForm = () => {
  //   const [isChecked, setIsChecked] = useState(false);

  //   const {
  //     handleSubmit,
  //     register,
  //     formState: { errors },
  //     reset,
  //   } = useForm({
  //     defaultValues: {
  //       phone: "",
  //       comment: "",
  //     },
  //   });

  //   const handleCloseModal = () => {
  //     setIsOpen((prev) => !prev);
  //     setIsChecked(false);
  //     reset();
  //   };

  //   const handleCheckboxChange = () => {
  //     setIsChecked((prev) => !prev);
  //   };

  //   const handlePost = handleSubmit(async (data) => {
  // const message = `Поступила заявка на обратную связь. Номер телефона: ${data.phone} | Комментарий: ${data.comment}`;
  // try {
  //   await sendMessage(message);
  //   setIsChecked(false);
  //   showToast({ message: "Ваше сообщене отправлено", variant: "success" });
  //   reset();
  // } catch (e) {
  //   showToast({ message: e as string, variant: "error" });
  // }
  //   });

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Typography as="h2" variant="h2" className={s.text}>
          Связаться с нами
        </Typography>
        <Typography variant="body_2" className={s.text}>
          Для связи заполните форму обратной связи, и наш специалист позвонит
          вам в ближайшее время
        </Typography>
        <div className={s.inputsContainer}>
          <TextField isRequired={true} placeholder="Имя" />
          <TextField isRequired={true} placeholder="Телефон" />
        </div>
        <div className={s.submitContainer}>
          <Button variant={"secondary"}>Отправить</Button>
          <Checkbox label="Согласие на обработку персональных данных" />
        </div>
        <Typography variant="body_2" className={s.text}>
          или свяжитесь с нами через социальные сети
        </Typography>
        <SocialNetworks />
      </div>
      <Image
        src={"/images/image1.jpg"}
        width={440}
        height={464}
        alt="image"
        className={s.image}
      />
    </div>
  );
};
