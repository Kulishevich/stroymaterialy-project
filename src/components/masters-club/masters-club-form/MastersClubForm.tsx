import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Select } from "@/components/ui/select";
import { TextField } from "@/components/ui/text-field";
import { Typography } from "@/components/ui/typography";
import { TextArea } from "@/components/ui/text-area";
import { TextFieldFile } from "@/components/ui/text-field-file";
import { useState } from "react";
import { useGetProfessionQuery } from "@/api/professions/professions.api";
import { useGetSpheresQuery } from "@/api/spheres/spheres.api";
import s from "./MastersClubForm.module.scss";

const options = [
  {
    id: "1",
    name: "Физическое лицо",
  },
  {
    id: "2",
    name: "Юридическое лицо",
  },
];

export const MastersClubForm = () => {
  const [image, setImage] = useState<File | null>(null);

  console.log(image);

  const { data: profession } = useGetProfessionQuery();
  const { data: spheres } = useGetSpheresQuery();
  if (profession) console.log(profession);
  if (spheres) console.log(spheres);

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
            <Select options={profession?.data} />
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
              <TextField placeholder="Имя" className={s.input} />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Фамилия</Typography>
              <TextField placeholder="Фамилия" className={s.input} />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Телефон</Typography>
              <TextField placeholder="(+374) 12 34 56 78" className={s.input} />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Электронный адрес</Typography>
              <TextField placeholder="Электронный адрес" className={s.input} />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Область работы</Typography>
              <Select options={spheres?.data} />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Пароль</Typography>
              <TextField
                placeholder=""
                variant="password"
                className={s.input}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Подтвердить пароль</Typography>
              <TextField
                placeholder=""
                variant="password"
                className={s.input}
              />
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
