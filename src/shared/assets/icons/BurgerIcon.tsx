import { Ref, SVGProps, forwardRef, memo } from "react";

const BurgerIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="28"
    height="19"
    ref={ref}
    {...props}
    viewBox="0 0 28 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1.5H27" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 9.5H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 17.5H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const ForwardRef = forwardRef(BurgerIcon);
const Memo = memo(ForwardRef);

export default Memo;
