import { Ref, SVGProps, forwardRef, memo } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    ref={ref}
    {...props}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.475 3.60637C22.0519 3.18329 21.3659 3.18329 20.9429 3.60637L13.0406 11.5086L5.13843 3.60637C4.71537 3.18329 4.02943 3.18329 3.60637 3.60637C3.18329 4.02943 3.18329 4.71537 3.60637 5.13843L11.5086 13.0407L3.60639 20.9428C3.18332 21.366 3.18332 22.0518 3.60639 22.475C4.02945 22.898 4.71539 22.898 5.13845 22.475L13.0406 14.5727L20.9429 22.475C21.3659 22.898 22.0519 22.898 22.475 22.475C22.898 22.0518 22.898 21.366 22.475 20.9429L14.5727 13.0407L22.475 5.13843C22.898 4.71537 22.898 4.02943 22.475 3.60637Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(CloseIcon);
const Memo = memo(ForwardRef);

export default Memo;
