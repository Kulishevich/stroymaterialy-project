import { Ref, SVGProps, forwardRef, memo } from "react";

const TrashIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    ref={ref}
    {...props}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.66602 7H23.3327M18.666 7L18.3503 6.05275C18.0443 5.13479 17.8912 4.67581 17.6075 4.33648C17.3569 4.03682 17.0351 3.80487 16.6716 3.66191C16.2599 3.5 15.7762 3.5 14.8085 3.5H13.1901C12.2225 3.5 11.7388 3.5 11.3271 3.66191C10.9636 3.80487 10.6418 4.03682 10.3912 4.33648C10.1074 4.67581 9.95442 5.13479 9.64843 6.05275L9.33268 7M20.9993 7V18.9C20.9993 20.8602 20.9993 21.8402 20.6178 22.589C20.2823 23.2476 19.7469 23.783 19.0883 24.1185C18.3396 24.5 17.3596 24.5 15.3993 24.5H12.5993C10.6392 24.5 9.65907 24.5 8.91038 24.1185C8.25181 23.783 7.71638 23.2476 7.38083 22.589C6.99935 21.8402 6.99935 20.8602 6.99935 18.9V7M16.3327 11.6667V19.8333M11.666 11.6667V19.8333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(TrashIcon);
const Memo = memo(ForwardRef);

export default Memo;
