import { Ref, SVGProps, forwardRef, memo } from "react";

const UsersGroupIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="48"
    height="48"
    ref={ref}
    {...props}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 20C22.4183 20 26 16.4183 26 12C26 7.58172 22.4183 4 18 4C13.5817 4 10 7.58172 10 12C10 16.4183 13.5817 20 18 20Z"
      stroke="currentColor"
      stroke-width="3"
    />
    <path
      d="M25 8.6822C26.075 7.0655 27.913 6 30 6C33.3138 6 36 8.6863 36 12C36 15.3137 33.3138 18 30 18C27.913 18 26.075 16.9345 25 15.3178"
      stroke="currentColor"
      stroke-width="3"
    />
    <path
      d="M18 42C25.732 42 32 38.4183 32 34C32 29.5817 25.732 26 18 26C10.268 26 4 29.5817 4 34C4 38.4183 10.268 42 18 42Z"
      stroke="currentColor"
      stroke-width="3"
    />
    <path
      d="M36 28C39.5084 28.7694 42 30.7178 42 33C42 35.0586 39.9726 36.8458 37 37.7408"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
);
const ForwardRef = forwardRef(UsersGroupIcon);
const Memo = memo(ForwardRef);

export default Memo;
