import { Ref, SVGProps, forwardRef, memo } from "react";

const ArrowRightIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="36"
    height="36"
    ref={ref}
    {...props}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    style={{ transform: "scaleX(-1)" }}
  >
    <g clipPath="url(#clip0_41_1371)">
      <path
        d="M21.4336 8.56044C20.8478 7.97465 19.8982 7.97465 19.3123 8.56044L11.9812 15.8988C10.8106 17.0706 10.811 18.9693 11.9822 20.1403L19.3177 27.4759C19.9036 28.0617 20.8532 28.0617 21.4391 27.4759C22.0249 26.8902 22.0249 25.9404 21.4391 25.3546L15.1606 19.0761C14.5748 18.4903 14.5748 17.5407 15.1606 16.9548L21.4336 10.6818C22.0195 10.096 22.0195 9.14622 21.4336 8.56044Z"
        stroke="currentColor"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_41_1371">
        <rect width="36" height="36" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(ArrowRightIcon);
const Memo = memo(ForwardRef);

export default Memo;
