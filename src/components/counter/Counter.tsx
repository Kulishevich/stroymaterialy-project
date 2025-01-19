import React, { useState } from "react";
import s from "./Counter.module.scss";
import clsx from "clsx";

type CounterProps = {
  size?: "s" | "m" | "l";
};

export const Counter = ({ size = "l" }: CounterProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev);
  };

  const decrement = () => {
    setCount((prev) => --prev);
  };

  return (
    <div className={clsx(s.container, s[size])}>
      <span className={clsx(s.counter, s[size])}>{count}</span>
      <div className={clsx(s.buttonContainer, s[size])}>
        <button className={s[size]} onClick={decrement} disabled={count === 0}>
          -
        </button>
        <button className={s[size]} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
