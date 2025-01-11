import React, { useState } from "react";
import s from "./Counter.module.scss";
import clsx from "clsx";

type CounterProps = {
  vertical: boolean;
};

export const Counter = ({ vertical }: CounterProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev);
  };

  const decrement = () => {
    setCount((prev) => --prev);
  };

  return (
    <div className={clsx(s.container, !vertical && s.horizontal)}>
      <span className={s.counter}>{count}</span>
      <div className={s.buttonContainer}>
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
