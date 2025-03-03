import { Button } from "@/components/ui/button";
import { Typography, Variant } from "@/components/ui/typography";
import { TextFieldFile } from "@/components/ui/text-field-file";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ControlledSelect } from "@/components/ui/controlled-select";
import { ControlledRadio } from "@/components/ui/controlled-radio";
import { ControlledTextField } from "@/components/ui/controlled-textfiled";
import { ControlledTextArea } from "@/components/ui/controlled-text-area";
import { ControlledCheckbox } from "@/components/ui/controlled-checkbox";
import {
  useCreatePartnerExistUserMutation,
  useCreatePartnerMutation,
} from "@/api/partners/partners.api";
import { masterClubFormScheme } from "./model/master-club-form-scheme";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useGetUserSettingQuery } from "@/api/user/user.api";
import { useTranslations } from "next-intl";
import { ProfessionsArgs } from "@/api/professions/professions.types";
import { SpheresArgs } from "@/api/spheres/spheres.types";
import s from "./MastersClubForm.module.scss";

export const MastersClubForm = ({
  professions,
  spheres,
}: {
  professions: { data: ProfessionsArgs[] };
  spheres: { data: SpheresArgs[] };
}) => {
  const t = useTranslations("cooperation.vacancies.masters_club.form");
  const [file, setFile] = useState<File | null>(null);
  const [createPartner] = useCreatePartnerMutation();
  const [createPartnerExistUser] = useCreatePartnerExistUserMutation();
  const token = useSelector((state: RootState) => state.auth.token);
  const { data: user } = useGetUserSettingQuery(undefined, {
    skip: !token,
  });

  const options = [
    {
      id: "individual",
      name: t("activity_type.options.individual"),
    },
    {
      id: "entity",
      name: t("activity_type.options.entity"),
    },
  ];

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
        {t("title")}
        <br />
        {t("title_description")}
      </Typography>
      <div className={s.form}>
        <div className={s.flexContainer}>
          <div className={s.elem}>
            <Typography variant="h4" as="h4" isRequired={true}>
              {t("profession.label")}
            </Typography>
            <ControlledSelect
              control={control}
              name="profession"
              options={professions?.data}
              defaultValue={professions?.data[0].name}
              className={s.professionSelect}
            />
          </div>
          <div className={s.elem}>
            <Typography variant="h4" as="h4">
              {t("activity_type.label")}
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
            {t("contacts.label")}
          </Typography>
          <div className={s.inputsWrapper}>
            {memberType === "entity" && (
              <>
                <div className={s.inputContainer}>
                  <Typography variant="body_5">
                    {t("contacts.fields.tin")}
                  </Typography>
                  <ControlledTextField
                    control={control}
                    name="tin"
                    placeholder={t("contacts.fields.tin")}
                    className={s.input}
                  />
                </div>
                <div className={s.inputContainer}>
                  <Typography variant="body_5">
                    {t("contacts.fields.company")}
                  </Typography>
                  <ControlledTextField
                    control={control}
                    name="company"
                    placeholder={t("contacts.fields.company")}
                    className={s.input}
                  />
                </div>
              </>
            )}
            <div className={s.inputContainer}>
              <Typography variant="body_5">
                {t("contacts.fields.first_name")}
              </Typography>
              <ControlledTextField
                disabled={!!token && !!user}
                control={control}
                name="firstName"
                placeholder={t("contacts.fields.first_name")}
                className={s.input}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">
                {t("contacts.fields.last_name")}
              </Typography>
              <ControlledTextField
                disabled={!!token && !!user}
                control={control}
                name="lastName"
                placeholder={t("contacts.fields.last_name")}
                className={s.input}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">
                {t("contacts.fields.phone")}
              </Typography>
              <ControlledTextField
                disabled={!!token && !!user}
                control={control}
                name="phone"
                placeholder="(+374) 12 34 56 78"
                className={s.input}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">
                {t("contacts.fields.email")}
              </Typography>
              <ControlledTextField
                disabled={!!token && !!user}
                control={control}
                name="email"
                placeholder={t("contacts.fields.email")}
                className={s.input}
              />
            </div>
            <div className={s.inputContainer}>
              <Typography variant="body_5">
                {t("contacts.fields.sphere")}
              </Typography>
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
                  <Typography variant="body_5">
                    {t("contacts.fields.password")}
                  </Typography>
                  <ControlledTextField
                    control={control}
                    name="password"
                    placeholder=""
                    variant="password"
                    className={s.input}
                  />
                </div>
                <div className={s.inputContainer}>
                  <Typography variant="body_5">
                    {t("contacts.fields.password_confirmation")}
                  </Typography>
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
            {t("about")}
          </Typography>
          <ControlledTextArea
            control={control}
            name="about"
            className={s.about}
          />
        </div>
        <div className={s.elem}>
          <Typography variant="h4" as="h4">
            {t("file")}
          </Typography>
          <TextFieldFile setSelectedImage={setFile} />
        </div>
        <div className={s.elem}>
          <div className={s.checkboxContainer}>
            <ControlledCheckbox
              control={control}
              name="confirmation"
              label={t("confirmation")}
              labelText={Variant.body_6}
            />
          </div>
          <div className={s.buttonsContainer}>
            <Button onClick={formHandler}>{t("button_submit")}</Button>
            <Button variant={"secondary"} onClick={reset}>
              {t("button_reset")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
