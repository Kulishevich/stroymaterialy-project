import { Ref, SVGProps, forwardRef, memo } from "react";

const ClockIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    ref={ref}
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 9.33333V16L19.3333 18M28 16C28 22.6275 22.6275 28 16 28C9.37259 28 4 22.6275 4 16C4 9.37259 9.37259 4 16 4C22.6275 4 28 9.37259 28 16Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(ClockIcon);
const Memo = memo(ForwardRef);

export default Memo;
