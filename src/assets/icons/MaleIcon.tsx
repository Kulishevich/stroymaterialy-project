import { Ref, SVGProps, forwardRef, memo } from "react";

const MaleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.875 0C21.3603 0 23.375 2.01473 23.375 4.5C23.375 6.98527 21.3603 9 18.875 9C16.3897 9 14.375 6.98527 14.375 4.5C14.375 2.01473 16.3897 0 18.875 0ZM22.25 10.125H21.4513C19.8544 10.8593 17.9645 10.891 16.2987 10.125H15.5C13.636 10.125 12.125 11.636 12.125 13.5V23.0625C12.125 23.9945 12.8805 24.75 13.8125 24.75H14.9375V34.3125C14.9375 35.2445 15.693 36 16.625 36H21.125C22.057 36 22.8125 35.2445 22.8125 34.3125V24.75H23.9375C24.8695 24.75 25.625 23.9945 25.625 23.0625V13.5C25.625 11.636 24.114 10.125 22.25 10.125Z"
      fill="#EB5C20"
    />
  </svg>
);
const ForwardRef = forwardRef(MaleIcon);
const Memo = memo(ForwardRef);

export default Memo;
