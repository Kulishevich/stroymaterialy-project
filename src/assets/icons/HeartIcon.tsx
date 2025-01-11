import { Ref, SVGProps, forwardRef, memo } from "react";

const HeartIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.3167 4.66797C22.015 4.66797 24.5 8.14464 24.5 11.388C24.5 17.9563 14.1867 23.3346 14 23.3346C13.8133 23.3346 3.5 17.9563 3.5 11.388C3.5 8.14464 5.985 4.66797 9.68333 4.66797C11.8067 4.66797 13.195 5.72964 14 6.66297C14.805 5.72964 16.1933 4.66797 18.3167 4.66797Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const ForwardRef = forwardRef(HeartIcon);
const Memo = memo(ForwardRef);

export default Memo;
