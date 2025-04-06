import { Ref, SVGProps, forwardRef, memo } from "react";

const RhombIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="48"
    height="48"
    ref={ref}
    {...props}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5858 1.41421C23.3668 0.633165 24.6332 0.633165 25.4142 1.41421L46.5858 22.5858C47.3668 23.3668 47.3668 24.6332 46.5858 25.4142L25.4142 46.5858C24.6332 47.3668 23.3668 47.3668 22.5858 46.5858L1.41421 25.4142C0.633165 24.6332 0.633165 23.3668 1.41421 22.5858L22.5858 1.41421Z"
      fill="#EB5C20"
    />
  </svg>
);
const ForwardRef = forwardRef(RhombIcon);
const Memo = memo(ForwardRef);

export default Memo;
