import { Ref, SVGProps, forwardRef, memo } from "react";

const DollarOutlinedIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="37"
    height="36"
    ref={ref}
    {...props}
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.125 33C26.4092 33 33.125 26.2842 33.125 18C33.125 9.71572 26.4092 3 18.125 3C9.84072 3 3.125 9.71572 3.125 18C3.125 26.2842 9.84072 33 18.125 33ZM19.25 9C19.25 8.37868 18.7463 7.875 18.125 7.875C17.5037 7.875 17 8.37868 17 9V9.47509C14.5544 9.913 12.5 11.7504 12.5 14.25C12.5 17.1258 15.2192 19.125 18.125 19.125C20.1897 19.125 21.5 20.4835 21.5 21.75C21.5 23.0164 20.1897 24.375 18.125 24.375C16.0602 24.375 14.75 23.0164 14.75 21.75C14.75 21.1287 14.2463 20.625 13.625 20.625C13.0037 20.625 12.5 21.1287 12.5 21.75C12.5 24.2496 14.5544 26.0869 17 26.5249V27C17 27.6213 17.5037 28.125 18.125 28.125C18.7463 28.125 19.25 27.6213 19.25 27V26.5249C21.6956 26.0869 23.75 24.2496 23.75 21.75C23.75 18.8742 21.0308 16.875 18.125 16.875C16.0602 16.875 14.75 15.5164 14.75 14.25C14.75 12.9836 16.0602 11.625 18.125 11.625C20.1897 11.625 21.5 12.9836 21.5 14.25C21.5 14.8713 22.0037 15.375 22.625 15.375C23.2463 15.375 23.75 14.8713 23.75 14.25C23.75 11.7504 21.6956 9.913 19.25 9.47509V9Z"
      fill="#EB5C20"
    />
  </svg>
);
const ForwardRef = forwardRef(DollarOutlinedIcon);
const Memo = memo(ForwardRef);

export default Memo;