import { Ref, SVGProps, forwardRef, memo } from "react";

const HeartOutlineIcon = (
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
      d="M17.0083 4.33398C20.4425 4.33398 22.75 7.56232 22.75 10.574C22.75 16.6732 13.1733 21.6673 13 21.6673C12.8267 21.6673 3.25 16.6732 3.25 10.574C3.25 7.56232 5.5575 4.33398 8.99167 4.33398C10.9633 4.33398 12.2525 5.31982 13 6.18648C13.7475 5.31982 15.0367 4.33398 17.0083 4.33398Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(HeartOutlineIcon);
const Memo = memo(ForwardRef);

export default Memo;
