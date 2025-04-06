import React from "react";
import Lottie from "lottie-react";

import animationData from "@/shared/assets/animation/phone-animation.json";
import s from "./PhoneAnimationClient.module.scss";

type PhoneAnimationClientProps = {
  onClick: () => void;
};

const PhoneAnimationClient = ({ onClick }: PhoneAnimationClientProps) => {
  return (
    <div className={s.container} onClick={onClick}>
      <Lottie animationData={animationData} loop={true} className={s.phone} />
    </div>
  );
};

export default PhoneAnimationClient;
