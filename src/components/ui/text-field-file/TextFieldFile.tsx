import { ChangeEvent, ComponentPropsWithoutRef, useRef } from "react";

import s from "./Textfield.module.scss";
import { Button } from "../button/Button";
import { Typography } from "../typography";
import { UploadIcon } from "@/assets/icons";
import { showToast } from "../toast";

type Props = {
  setSelectedImage: (image: File) => void;
} & ComponentPropsWithoutRef<"input">;

export const TextFieldFile = ({ setSelectedImage, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const selectFileHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];

    if (file) {
      if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
        showToast({
          message: "Можно загружать только PNG, JPG или JPEG файлы.",
          variant: "error",
        });
        return;
      }

      setSelectedImage(file);
    }
  };

  return (
    <div>
      <Button className={s.btn} onClick={selectFileHandler} variant={"primary"}>
        <UploadIcon />
        <Typography variant={"body_3"}>Выбрать файл</Typography>
      </Button>
      <input
        accept={"image/png,image/jpg, image/jpeg"}
        className={s.input}
        onChange={uploadHandler}
        ref={inputRef}
        type={"file"}
        {...rest}
      />
    </div>
  );
};
