import { Ref, SVGProps, forwardRef, memo } from "react";

const LogoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="59"
    height="47"
    ref={ref}
    {...props}
    viewBox="0 0 59 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M58.0691 21.5464C58.0691 29.7397 58.0691 37.933 58.0691 46.1263C44.0778 46.1263 30.0866 46.1263 16.0953 46.1263L16.0953 36.3152C21.8077 36.3152 27.52 36.3152 33.2331 36.3152V31.3581H29.7573L29.7573 21.5464C39.1941 21.5464 48.6323 21.5464 58.0691 21.5464ZM10.2313 46.0503L10.2313 17.5118L0 17.5118C9.7934 11.8967 19.5895 6.28709 29.3802 0.667969L57.0266 16.5167H52.16L29.3857 3.46057L9.11026 15.0848L12.6755 15.0848L12.6755 46.0503H10.2313ZM30.8886 43.6993V38.7422H18.5396V43.6993H30.8886ZM55.6248 38.7422C53.1252 38.7422 50.6256 38.7422 48.1261 38.7422V43.6993H55.6248V38.7422ZM45.6818 38.7422L33.3328 38.7422V43.6993L45.6818 43.6993V38.7422ZM48.0263 36.3152V31.3581C43.9098 31.3581 39.7939 31.3581 35.6773 31.3581V36.3152C39.7939 36.3152 43.9098 36.3152 48.0263 36.3152ZM55.6248 31.3581L50.4706 31.3581V36.3152H55.6248V31.3581ZM45.1353 23.9734V28.9311C48.6323 28.9311 52.1278 28.9311 55.6248 28.9311V23.9734L45.1353 23.9734ZM42.691 23.9734L32.2015 23.9734V28.9311L42.691 28.9311V23.9734Z"
      fill="#EB5C20"
    />
  </svg>
);
const ForwardRef = forwardRef(LogoIcon);
const Memo = memo(ForwardRef);

export default Memo;