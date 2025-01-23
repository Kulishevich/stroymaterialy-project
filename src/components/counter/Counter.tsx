import React from "react";
import s from "./Counter.module.scss";
import clsx from "clsx";

type CounterProps = {
  size?: "s" | "m" | "l";
  countCurrent?: number;
  increment: () => void;
  decrement: () => void;
};

export const Counter = ({
  size = "l",
  countCurrent,
  increment,
  decrement,
}: CounterProps) => {
  return (
    <div className={clsx(s.container, s[size])}>
      <span className={clsx(s.counter, s[size])}>{countCurrent}</span>
      <div className={clsx(s.buttonContainer, s[size])}>
        <button
          className={s[size]}
          onClick={decrement}
          disabled={countCurrent === 1}
        >
          -
        </button>
        <button className={s[size]} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
