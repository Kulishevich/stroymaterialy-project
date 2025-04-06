import { Ref, SVGProps, forwardRef, memo } from "react";

const FacebookOutlinedIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="24"
    height="24"
    ref={ref}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="12" fill="#1877F2" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.9113 19.2008V12.7208H14.8787L15.2 9.84078H12.9113V8.43805C12.9113 7.69645 12.9303 6.96078 13.9666 6.96078H15.0162V4.90168C15.0162 4.87072 14.1146 4.80078 13.2025 4.80078C11.2976 4.80078 10.1048 5.99396 10.1048 8.18492V9.84078H8V12.7208H10.1048V19.2008H12.9113Z"
      fill="white"
    />
  </svg>
);
const ForwardRef = forwardRef(FacebookOutlinedIcon);
const Memo = memo(ForwardRef);

export default Memo;
