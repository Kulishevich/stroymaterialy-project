import { Ref, SVGProps, forwardRef, memo } from "react";

const BagOutlinedIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="37"
    height="36"
    ref={ref}
    {...props}
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.7519 9.02234C12.7517 9.01491 12.7517 9.00747 12.7517 9V7.5C12.7517 4.39339 15.2701 1.875 18.3767 1.875C21.4834 1.875 24.0017 4.39339 24.0017 7.5V9C24.0017 9.00747 24.0016 9.01491 24.0014 9.02234C25.9324 9.0803 27.1139 9.2886 28.0159 10.0372C29.2657 11.0744 29.5948 12.8301 30.2533 16.3415L31.3783 22.3414C32.3041 27.279 32.7668 29.7477 31.4173 31.3738C30.0677 33 27.556 33 22.5323 33H14.221C9.19742 33 6.68563 33 5.33606 31.3738C3.98648 29.7477 4.44938 27.279 5.37517 22.3414L6.50017 16.3415C7.15853 12.8301 7.48772 11.0744 8.73749 10.0372C9.63952 9.2886 10.821 9.0803 12.7519 9.02234ZM15.0017 7.5C15.0017 5.63604 16.5127 4.125 18.3767 4.125C20.2406 4.125 21.7517 5.63604 21.7517 7.5V9C21.7517 8.99999 21.7517 9.00001 21.7517 9C21.6388 8.99997 21.524 9 21.4073 9H15.346C15.2293 9 15.1146 9 15.0017 9.00003V7.5Z"
      fill="#EB5C20"
    />
  </svg>
);
const ForwardRef = forwardRef(BagOutlinedIcon);
const Memo = memo(ForwardRef);

export default Memo;