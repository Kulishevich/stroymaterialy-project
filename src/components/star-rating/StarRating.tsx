import React, { useState } from "react";
import s from "./StarRating.module.scss";
import Rating from "react-rating";
import { StarIcon } from "@/shared/assets/icons";
import { FC } from "react";

export const StarRating: FC = () => {
  const [rating, setRating] = useState(0);

  const handleChange = (value: number) => {
    setRating(value);
    console.log(`Текущий рейтинг: ${value}`);
  };
  return (
    <div>
      {/* @ts-expect-error: Ошибка типов из-за несовместимости react-rating */}
      <Rating
        className={s.rating}
        initialRating={rating}
        emptySymbol={<StarIcon className={s.star} />}
        fullSymbol={<StarIcon className={s.active} />}
        onChange={handleChange}
      />
    </div>
  );
};
