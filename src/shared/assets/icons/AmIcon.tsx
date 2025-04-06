import { Ref, SVGProps, forwardRef, memo } from "react";

const AmIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    ref={ref}
    {...props}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_405_737)">
      <path
        d="M14 7.5C14 6.64375 13.846 5.82352 13.5646 5.06523L7 4.76086L0.435395 5.0652C0.154027 5.82352 0 6.64375 0 7.5C0 8.35624 0.154027 9.17647 0.435395 9.93477L7 10.2391L13.5646 9.93479C13.846 9.17647 14 8.35624 14 7.5Z"
        fill="#0052B4"
      />
      <path
        d="M6.99991 14.5C10.0097 14.5 12.5755 12.6004 13.5645 9.93475H0.435303C1.42435 12.6004 3.99015 14.5 6.99991 14.5Z"
        fill="#FF9811"
      />
      <path
        d="M0.435303 5.06523H13.5645C12.5755 2.39963 10.0097 0.5 6.99991 0.5C3.99015 0.5 1.42435 2.39963 0.435303 5.06523Z"
        fill="#D80027"
      />
    </g>
    <defs>
      <clipPath id="clip0_405_737">
        <rect
          width="26"
          height="26"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(AmIcon);
const Memo = memo(ForwardRef);

export default Memo;
