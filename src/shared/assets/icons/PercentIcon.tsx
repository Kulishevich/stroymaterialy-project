import { Ref, SVGProps, forwardRef, memo } from "react";

const PercentIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="22"
    height="22"
    ref={ref}
    {...props}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.1996 4.40039L4.13867 18.4613"
      stroke="#EB5C20"
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <path
      d="M5.13411 8.3776C6.14664 8.3776 6.96745 7.55679 6.96745 6.54427C6.96745 5.53175 6.14664 4.71094 5.13411 4.71094C4.12159 4.71094 3.30078 5.53175 3.30078 6.54427C3.30078 7.55679 4.12159 8.3776 5.13411 8.3776Z"
      stroke="#EB5C20"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.1341 17.5436C17.1466 17.5436 17.9674 16.7228 17.9674 15.7103C17.9674 14.6978 17.1466 13.877 16.1341 13.877C15.1216 13.877 14.3008 14.6978 14.3008 15.7103C14.3008 16.7228 15.1216 17.5436 16.1341 17.5436Z"
      stroke="#EB5C20"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(PercentIcon);
const Memo = memo(ForwardRef);

export default Memo;
