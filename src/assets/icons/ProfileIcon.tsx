import { Ref, SVGProps, forwardRef, memo } from "react";

const ProfileIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="26"
    height="26"
    ref={ref}
    {...props}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 23C5 18.9192 8.58173 15.6111 13 15.6111C17.4183 15.6111 21 18.9192 21 23M17.5714 8.22222C17.5714 10.5541 15.5247 12.4444 13 12.4444C10.4753 12.4444 8.42857 10.5541 8.42857 8.22222C8.42857 5.89035 10.4753 4 13 4C15.5247 4 17.5714 5.89035 17.5714 8.22222Z"
      stroke="#212531"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(ProfileIcon);
const Memo = memo(ForwardRef);

export default Memo;
