import { Ref, SVGProps, forwardRef, memo } from "react";

const SuccessIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="48"
    height="48"
    ref={ref}
    {...props}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_163_13742)">
      <path
        d="M40.9702 7.02975C31.5972 -2.34328 16.4007 -2.34328 7.02966 7.02994C-2.34328 16.4029 -2.34328 31.5993 7.03003 40.9703C16.4007 50.3433 31.5972 50.3433 40.9702 40.9702C50.3433 31.5993 50.3433 16.4029 40.9702 7.02975ZM38.142 38.1416C30.3309 45.9527 17.6674 45.9527 9.85847 38.142C2.04741 30.3327 2.04741 17.6692 9.85828 9.85828C17.6674 2.04731 30.3309 2.04731 38.1418 9.85828C45.9527 17.6693 45.9527 30.3327 38.142 38.1416Z"
        fill="currentColor"
      />
      <path
        d="M34.5857 14.5858L22 27.1715L15.4142 20.5858C14.6332 19.8047 13.3668 19.8047 12.5858 20.5858C11.8047 21.3668 11.8047 22.6332 12.5858 23.4142L20.5857 31.4142C21.3668 32.1952 22.6331 32.1952 23.4142 31.4142L37.4142 17.4142C38.1952 16.6332 38.1952 15.3668 37.4142 14.5858C36.6331 13.8047 35.3667 13.8047 34.5857 14.5858Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_163_13742">
        <rect width="48" height="48" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SuccessIcon);
const Memo = memo(ForwardRef);

export default Memo;
