import { Ref, SVGProps, forwardRef, memo } from "react";

const DollarIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M24 11.3333V11.1389C24 8.66895 21.9977 6.66667 19.5277 6.66667H12.6667C10.0893 6.66667 8 8.756 8 11.3333C8 13.9107 10.0893 16 12.6667 16H19.3333C21.9107 16 24 18.0893 24 20.6667C24 23.244 21.9107 25.3333 19.3333 25.3333H12.5694C10.0458 25.3333 8 23.2875 8 20.7639V20.6667M16 4V28"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(DollarIcon);
const Memo = memo(ForwardRef);

export default Memo;
