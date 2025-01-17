import React from "react";
import s from "./Error.module.scss";
import Image from "next/image";
import { Typography } from "../../components/ui/typography";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export const Error = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Typography variant="h1" as="h1">
          Страница не найдена
        </Typography>
        <Typography variant="body_1" as="p">
          К сожалению, страница не найдена. Возможно, она была удалена или Вы
          ввели некорректный адрес (ошибка 404).
        </Typography>
        <Button as={Link} href={"/"}>
          На главную
        </Button>
      </div>
      <div className={s.imageContainer}>
        <Image
          className={s.image1}
          src={"/images/error/error-elem1.png"}
          width={357}
          height={294}
          alt="error"
        />
        <Image
          className={s.image2}
          src={"/images/error/error-elem2.png"}
          width={560}
          height={271}
          alt="error"
        />
        <Image
          className={s.image3}
          src={"/images/error/404.png"}
          width={704}
          height={270}
          alt="error"
        />
      </div>
    </div>
  );
};
