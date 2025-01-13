import { ChangeEvent, ComponentPropsWithoutRef, useRef } from "react";

import s from "./Textfield.module.scss";
import { Button } from "../button/Button";
import { Typography } from "../typography";
import { UploadIcon } from "@/assets/icons";
type Props = {
  setSelectedImage: (image: File) => void;
} & ComponentPropsWithoutRef<"input">;

export const TextFieldFile = ({ setSelectedImage, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const selectFileHandler = () => {
    // inputRef && inputRef.current?.click();
  };
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

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
