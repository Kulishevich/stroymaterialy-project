import { Ref, SVGProps, forwardRef, memo } from "react";

const FilterIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="34"
    height="34"
    ref={ref}
    {...props}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="1" width="32" height="32" rx="16" stroke="currentColor" />
    <path
      d="M22.8333 9.5H11.1667C10.2462 9.5 9.5 10.2462 9.5 11.1667V12.143C9.5 12.585 9.67559 13.0089 9.98816 13.3215L14.8452 18.1785C15.1577 18.4911 15.3333 18.915 15.3333 19.357V23.6667V23.9047C15.3333 24.4319 15.9707 24.6959 16.3435 24.3232L17 23.6667L18.1785 22.4882C18.4911 22.1756 18.6667 21.7517 18.6667 21.3097V19.357C18.6667 18.915 18.8423 18.4911 19.1548 18.1785L24.0118 13.3215C24.3244 13.0089 24.5 12.585 24.5 12.143V11.1667C24.5 10.2462 23.7538 9.5 22.8333 9.5Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(FilterIcon);
const Memo = memo(ForwardRef);

export default Memo;
