import { Button } from "@/components/ui/button";
import { Typography, Variant } from "@/components/ui/typography";
import { TextFieldFile } from "@/components/ui/text-field-file";
import { useEffect, useState } from "react";
import { useGetProfessionQuery } from "@/api/professions/professions.api";
import { useGetSpheresQuery } from "@/api/spheres/spheres.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { ControlledRadio } from "@/components/ui/controlled-radio";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { ControlledTextArea } from "@/components/ui/controlled-text-area";
import { ControlledCheckbox } from "@/components/ui/controlled-checkbox";
import {
  useCreatePartnerExistUserMutation,
  // useCreatePartnerFileMutation,
  useCreatePartnerMutation,
} from "@/api/partners/partners.api";
import { masterClubFormScheme } from "./model/master-club-form-scheme";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useGetUserSettingQuery } from "@/api/user/user.api";
import s from "./MastersClubForm.module.scss";

const options = [
  {
    id: "individual",
    name: "Физическое лицо",
  },
  {
    id: "entity",
    name: "Юридическое лицо",
  },
];

export const MastersClubForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [createPartner] = useCreatePartnerMutation();
  const [createPartnerExistUser] = useCreatePartnerExistUserMutation();
  // const [createPartnerFile] = useCreatePartnerFileMutation();
  const token = useSelector((state: RootState) => state.auth.token);
  const { data: user } = useGetUserSettingQuery();
  console.log(user);
  const { data: professions } = useGetProfessionQuery();
  const { data: spheres } = useGetSpheresQuery();

  console.log(professions);
  console.log(spheres);

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirmation: "",
      profession: "",
      sphere: "",
      about: "",
      tin: "",
      company: "",
      confirmation: false,
      memberType: options[0].id,
    },
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: zodResolver(masterClubFormScheme(!!token)),
  });

  const memberType = watch("memberType");

  useEffect(() => {
    if (professions && spheres) {
      const defaultValues = {
        profession: professions.data[0].id,
        sphere: spheres.data[0].id,
      };

      if (user && token) {
        Object.assign(defaultValues, {
          firstName: user.data.firstName,
          lastName: user.data.lastName,
          email: user.data.email,
          phone: user.data.phone,
        });
      }

      reset(defaultValues);
    }
  }, [professions, spheres, user?.data, token, reset, user]);

  const formHandler = handleSubmit(async (data) => {
    const isEntity = data.memberType === "entity";

    const fetchData = {
      profession: data.profession,
      sphere: data.sphere,
      about: data.about,
      ...(!token && {
        email: data.email,
        phone: data.phone,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
        fullName: `${data.firstName} ${data.lastName}`,
      }),
      ...(isEntity && {
        company: data.company,
        tin: data.tin,
      }),
    };

    const formData = new FormData();
    Object.entries(fetchData).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    if (file) {
      formData.append("certificate", file);
    }

    if (!!token && !!user) {
      try {
        const res = await createPartnerExistUser(formData).unwrap();
        console.log(res);
      } catch (err: unknown) {
        console.error(err);
      }
    } else {
      try {
        const res = await createPartner(formData).unwrap();
        localStorage.setItem("accessToken", res.data.token.trim());
      } catch (err: unknown) {
        console.error(err);
      }
    }
  });

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
            {!!professions && (
              <ControlledSelect
                control={control}
                name="profession"
                options={professions?.data}
                defaultValue={professions?.data[0].name}
                className={s.professionSelect}
              />
            )}
          </div>
          <div className={s.elem}>
            <Typography variant="h4" as="h4">
              2. Форма деятельности
            </Typography>
            <ControlledRadio
              control={control}
              name="memberType"
              options={options}
            />
          </div>
        </div>
        <div className={s.elem}>
          <Typography isRequired={true} variant="h4" as="h4">
            3. Контактные данные
          </Typography>
          <div className={s.inputsWrapper}>
            {memberType === "entity" && (
              <>
                <div className={s.inputContainer}>
                  <Typography variant="body_5">ИНН</Typography>
                  <ControlledTextField
                    control={control}
                    name="tin"
                    placeholder="ИНН"
                    className={s.input}
                  />
                </div>
                <div className={s.inputContainer}>
                  <Typography variant="body_5">Компания</Typography>
                  <ControlledTextField
                    control={control}
                    name="company"
                    placeholder="Компания"
                    className={s.input}
                  />
                </div>
              </>
            )}
            <div className={s.inputContainer}>
              <Typography variant="body_5">Имя</Typography>
              <ControlledTextField
                disabled={!!token && !!user}
                control={control}
                name="firstName"
                placeholder="Имя"
                className={s.input}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Фамилия</Typography>
              <ControlledTextField
                disabled={!!token && !!user}
                control={control}
                name="lastName"
                placeholder="Фамилия"
                className={s.input}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Телефон</Typography>
              <ControlledTextField
                disabled={!!token && !!user}
                control={control}
                name="phone"
                placeholder="(+374) 12 34 56 78"
                className={s.input}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Электронный адрес</Typography>
              <ControlledTextField
                disabled={!!token && !!user}
                control={control}
                name="email"
                placeholder="Электронный адрес"
                className={s.input}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">Область работы</Typography>
              {!!spheres && (
                <ControlledSelect
                  control={control}
                  name="sphere"
                  options={spheres?.data}
                />
              )}
            </div>
            {!token && (
              <>
                <div className={s.inputContainer}>
                  <Typography variant="body_5">Пароль</Typography>
                  <ControlledTextField
                    control={control}
                    name="password"
                    placeholder=""
                    variant="password"
                    className={s.input}
                  />
                </div>
                <div className={s.inputContainer}>
                  <Typography variant="body_5">Подтвердить пароль</Typography>
                  <ControlledTextField
                    control={control}
                    name="passwordConfirmation"
                    placeholder=""
                    variant="password"
                    className={s.input}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className={s.elem}>
          <Typography variant="h4" as="h4">
            4. О вас
          </Typography>
          <ControlledTextArea
            control={control}
            name="about"
            className={s.about}
          />
        </div>
        <div className={s.elem}>
          <Typography variant="h4" as="h4">
            5. Загрузить файл
          </Typography>
          <TextFieldFile setSelectedImage={setFile} />
        </div>
        <div className={s.elem}>
          <div className={s.checkboxContainer}>
            <ControlledCheckbox
              control={control}
              name="confirmation"
              label="Согласие на обработку персональных данных"
              labelText={Variant.body_6}
            />
          </div>
          <div className={s.buttonsContainer}>
            <Button onClick={formHandler}>Отправить</Button>
            <Button variant={"secondary"} onClick={reset}>
              Отменить
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
