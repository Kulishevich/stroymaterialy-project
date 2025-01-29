import { ReactNode } from "react";

import { clsx } from "clsx";
import { ToastT, Toaster, toast } from "sonner";

import styles from "./Toast.module.scss";
import { Typography } from "../typography";
import { ErrorIcon, SuccessIcon } from "@/assets/icons";

const DEFAULT_DURATION = 5000;
const DEFAULT_POSITION = "bottom-left";

type ToastType = "error" | "success";
type ToastOptions = {
  message: ReactNode;
  description?: ReactNode;
  variant?: ToastType;
} & Omit<ToastT, "id">;

const showToast = ({
  className,
  duration = DEFAULT_DURATION,
  message,
  description,
  position = DEFAULT_POSITION,
  variant = "success",
  ...props
}: ToastOptions) => {
  console.log("toast");
  toast.custom(
    () => (
      <div className={clsx(styles.rootClass, styles[variant], className)}>
        <div className={clsx(styles.contentWrapper)}>
          {variant === "success" ? <SuccessIcon /> : <ErrorIcon />}
          <div className={styles.content}>
            <Typography className={styles.message} variant={"h3"}>
              {message}
            </Typography>
            <Typography variant="body_3">{description}</Typography>
          </div>
        </div>
      </div>
    ),
    {
      duration,
      position,
      ...props,
    }
  );
};

export { Toaster, showToast };
