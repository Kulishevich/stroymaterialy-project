import { Ref, SVGProps, forwardRef, memo } from "react";

const ProfileIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="14"
    height="17"
    ref={ref}
    {...props}
    viewBox="0 0 14 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 16C1 12.7783 3.68629 10.1667 7 10.1667C10.3137 10.1667 13 12.7783 13 16M10.4286 4.33333C10.4286 6.17428 8.89351 7.66667 7 7.66667C5.10645 7.66667 3.57143 6.17428 3.57143 4.33333C3.57143 2.49238 5.10645 1 7 1C8.89351 1 10.4286 2.49238 10.4286 4.33333Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(ProfileIcon);
const Memo = memo(ForwardRef);

export default Memo;
