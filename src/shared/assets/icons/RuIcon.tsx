import { Ref, SVGProps, forwardRef, memo } from "react";

const RuIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    ref={ref}
    {...props}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1441_4387)">
      <path
        d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
        fill="#F0F0F0"
      />
      <path
        d="M13.5646 9.43479C13.846 8.67646 14 7.85626 14 7.00002C14 6.14377 13.846 5.32357 13.5646 4.56525H0.435395C0.154027 5.32357 0 6.14377 0 7.00002C0 7.85626 0.154027 8.67646 0.435395 9.43479L7 10.0435L13.5646 9.43479Z"
        fill="#0052B4"
      />
      <path
        d="M6.99991 14C10.0097 14 12.5755 12.1004 13.5645 9.43475H0.435303C1.42435 12.1004 3.99015 14 6.99991 14Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_1441_4387">
        <rect width="26" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(RuIcon);
const Memo = memo(ForwardRef);

export default Memo;
