import { Ref, SVGProps, forwardRef, memo } from "react";

const TruckOutlinedIcon = (
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
    <g clip-path="url(#clip0_243_48745)">
      <path
        d="M35.5731 16.9481L32.2825 13.6575C31.6075 12.9825 30.6906 12.6056 29.7344 12.6056H27.625V7.20002C27.625 6.2044 26.8206 5.40002 25.825 5.40002H2.425C1.42937 5.40002 0.625 6.2044 0.625 7.20002V26.1C0.625 28.5863 2.63875 30.6 5.125 30.6C6.60437 30.6 7.90375 29.8744 8.725 28.7775C9.54625 29.88 10.8456 30.6 12.325 30.6C14.8112 30.6 16.825 28.5863 16.825 26.1C16.825 25.7906 16.7912 25.4925 16.735 25.2H25.915C25.8531 25.4925 25.825 25.7906 25.825 26.1C25.825 28.5863 27.8387 30.6 30.325 30.6C32.8112 30.6 34.825 28.5863 34.825 26.1C34.825 25.7906 34.7913 25.4925 34.735 25.2H35.725C36.22 25.2 36.625 24.795 36.625 24.3V19.4907C36.625 18.5344 36.2481 17.6231 35.5731 16.9481ZM5.125 27.9C4.135 27.9 3.325 27.09 3.325 26.1C3.325 25.11 4.135 24.3 5.125 24.3C6.115 24.3 6.925 25.11 6.925 26.1C6.925 27.09 6.115 27.9 5.125 27.9ZM12.325 27.9C11.335 27.9 10.525 27.09 10.525 26.1C10.525 25.11 11.335 24.3 12.325 24.3C13.315 24.3 14.125 25.11 14.125 26.1C14.125 27.09 13.315 27.9 12.325 27.9ZM27.625 15.3H29.7344C29.9762 15.3 30.2012 15.3956 30.37 15.5644L32.8056 18H27.625V15.3ZM30.325 27.9C29.335 27.9 28.525 27.09 28.525 26.1C28.525 25.11 29.335 24.3 30.325 24.3C31.315 24.3 32.125 25.11 32.125 26.1C32.125 27.09 31.315 27.9 30.325 27.9Z"
        fill="#EB5C20"
      />
    </g>
    <defs>
      <clipPath id="clip0_243_48745">
        <rect
          width="36"
          height="36"
          fill="white"
          transform="translate(0.625)"
        />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(TruckOutlinedIcon);
const Memo = memo(ForwardRef);

export default Memo;