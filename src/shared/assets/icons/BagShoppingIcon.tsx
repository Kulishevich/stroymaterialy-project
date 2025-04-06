import { Ref, SVGProps, forwardRef, memo } from "react";

const BagShoppingIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="28"
    height="28"
    ref={ref}
    {...props}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4993 12.8333V7C10.4993 5.06701 12.0663 3.5 13.9993 3.5C15.9324 3.5 17.4993 5.06701 17.4993 7V12.7952M12.1327 24.5H15.866C18.4796 24.5 19.7864 24.5 20.7847 23.9913C21.6627 23.5439 22.3766 22.83 22.824 21.952C23.3327 20.9537 23.3327 19.6469 23.3327 17.0333V14.2333C23.3327 12.9265 23.3327 12.2731 23.0783 11.774C22.8547 11.335 22.4977 10.978 22.0587 10.7543C21.5596 10.5 20.9061 10.5 19.5993 10.5H8.39935C7.09257 10.5 6.43916 10.5 5.94004 10.7543C5.50099 10.978 5.14403 11.335 4.92034 11.774C4.66602 12.2731 4.66602 12.9265 4.66602 14.2333V17.0333C4.66602 19.6469 4.66602 20.9537 5.17465 21.952C5.62206 22.83 6.33597 23.5439 7.21406 23.9913C8.21231 24.5 9.5191 24.5 12.1327 24.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(BagShoppingIcon);
const Memo = memo(ForwardRef);

export default Memo;
