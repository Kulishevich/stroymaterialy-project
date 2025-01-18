import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Select } from "@/components/ui/select";
import { TextField } from "@/components/ui/text-field";
// import { TextFieldFile } from "@/components/ui/text-field-file";
import { Typography } from "@/components/ui/typography";
import s from "./MastersClubForm.module.scss";
import { TextArea } from "@/components/ui/text-area";
import { TextFieldFile } from "@/components/ui/text-field-file";
import { useState } from "react";

const options = [
  {
    id: "1",
    value: "Физическое лицо",
  },
  {
    id: "2",
    value: "Юридическое лицо",
  },
];

const selectOption = [
  {
    option: "Механик",
    value: "1",
  },
  {
    option: "Механик",
    value: "2",
  },
  {
    option: "Механик",
    value: "3",
  },
];

export const MastersClubForm = () => {
  const [image, setImage] = useState<File | null>(null);

  console.log(image);

  return (
    <>
      <Typography variant="body_2" className={s.title}>
        Хотите вступить в наш клуб мастеров?
        <br />
        Свяжитесь с нами по одному из контактных номеров или отправьте онлайн
        заявку ниже.
      </Typography>
      <div className={s.form}>
        <div className={s.flexContainer}>
          <div className={s.elem}>
            <Typography variant="h4" as="h4" isRequired={true}>
              1. Ваша профессия
            </Typography>
            <Select placeHolder="Механик" options={selectOption} />
          </div>
          <div className={s.elem}>
            <Typography variant="h4" as="h4">
              2. Форма деятельности
            </Typography>
            <Radio options={options} />
          </div>
        </div>
        <div className={s.elem}>
          <Typography isRequired={true} variant="h4" as="h4">
            3. Контактные данные
          </Typography>
          <div className={s.inputsWrapper}>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Имя</Typography>
              <TextField placeholder="Имя" />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Фамилия</Typography>
              <TextField placeholder="Фамилия" />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Телефон</Typography>
              <TextField placeholder="(+374) 12 34 56 78" />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Электронный адрес</Typography>
              <TextField placeholder="Электронный адрес" />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Область работы</Typography>
              <TextField placeholder="Гипсокартонные конструкции" />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Пароль</Typography>
              <TextField placeholder="" variant="password" />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Подтвердить пароль</Typography>
              <TextField placeholder="" variant="password" />
            </div>
          </div>
        </div>
        <div className={s.elem}>
          <Typography variant="h4" as="h4">
            4. О вас
          </Typography>
          <TextArea className={s.about} />
        </div>
        <div className={s.elem}>
          <Typography variant="h4" as="h4">
            5. Загрузить файл
          </Typography>
          <TextFieldFile setSelectedImage={setImage} />
        </div>
        <div className={s.elem}>
          <div className={s.checkboxContainer}>
            <Checkbox />
            <Typography variant="body_6">
              Согласие на обработку персональных данных
            </Typography>
          </div>
          <div className={s.buttonsContainer}>
            <Button>Отправить</Button>
            <Button variant={"secondary"}>Отменить</Button>
          </div>
        </div>
      </div>
    </>
  );
};
