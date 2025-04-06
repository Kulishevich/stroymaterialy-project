import { Ref, SVGProps, forwardRef, memo } from "react";

const ArrowDownIcon = (
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
      d="M3.33294 7.83029C2.88902 8.26519 2.88902 8.97027 3.33294 9.40528L8.89392 14.8484C9.78191 15.7175 11.2207 15.7172 12.1082 14.8476L17.6671 9.40127C18.111 8.96626 18.111 8.26118 17.6671 7.82617C17.2232 7.39128 16.5034 7.39128 16.0596 7.82617L11.3017 12.4878C10.8578 12.9227 10.1382 12.9227 9.69416 12.4878L4.94047 7.83029C4.49657 7.39528 3.77684 7.39528 3.33294 7.83029Z"
      stroke="currentColor"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowDownIcon);
const Memo = memo(ForwardRef);

export default Memo;
