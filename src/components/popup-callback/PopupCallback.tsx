import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./PopupCallback.module.scss";
import Image from "next/image";
// import { useForm } from "react-hook-form";
import { Typography, Variant } from "../ui/typography";
import { Button } from "../ui/button";
import { TextField } from "../ui/text-field";
import { Checkbox } from "../ui/checkbox";
import { CloseIcon } from "@/assets/icons";

type PopupCallbackProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopupCallback = ({
  isOpen = true,
  setIsOpen,
}: PopupCallbackProps) => {
  // const [isChecked, setIsChecked] = useState(false);

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

  const handleCloseModal = () => {
    setIsOpen((prev) => !prev);
    // setIsChecked(false);
    // reset();
  };

  // const handleCheckboxChange = () => {
  //   setIsChecked((prev) => !prev);
  // };

  //   const handlePost = handleSubmit(async (data) => {
  //     const message = `Поступила заявка на обратную связь. Номер телефона: ${data.phone} | Комментарий: ${data.comment}`;
  //     try {
  //       await sendMessage(message);
  //       setIsChecked(false);
  //       showToast({ message: "Ваше сообщене отправлено", variant: "success" });
  //       reset();
  //     } catch (e) {
  //       showToast({ message: e as string, variant: "error" });
  //     }
  //   });

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleCloseModal}>
      <Dialog.Overlay className={s.overlay} />
      <Dialog.Content className={s.content}>
        <Image
          src="/images/popup-callback.png"
          alt="image"
          width={502}
          height={502}
          className={s.image}
        />
        <Button
          className={s.closeIcon}
          onClick={() => setIsOpen(false)}
          variant="only_icon"
        >
          <CloseIcon />
        </Button>
        <div className={s.container}>
          <Typography variant="h2" as="h2">
            Обратный звонок
          </Typography>
          <Typography variant="body_3">
            Для связи заполните форму обратной связи, и наш специалист позвонит
            вам в ближайшее время.
          </Typography>
          <form className={s.form}>
            <div className={s.inputContainer}>
              <Typography variant="h4" isRequired={true}>
                Ваше имя
              </Typography>
              <TextField className={s.textfield} placeholder="Имя" />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="h4" isRequired={true}>
                Ваш телефон
              </Typography>
              <TextField className={s.textfield} placeholder="Телефон" />
            </div>
          </form>
          <div className={s.checkboxContainer}>
            <Checkbox
              label="Согласие на обработку персональных данных"
              labelText={Variant.body_6}
              className={s.checkbox}
            />
          </div>
          <Button>Отправить</Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
