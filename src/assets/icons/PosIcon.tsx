import { Ref, SVGProps, forwardRef, memo } from "react";

const PosIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="48"
    height="48"
    ref={ref}
    {...props}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_155_12167)">
      <mask
        id="mask0_155_12167"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <path
          d="M48 0L48 48L0 48L-2.09815e-06 2.09815e-06L48 0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_155_12167)">
        <path
          d="M8 8C8 9.86 7.94 9.63 8.16 9.56C10.46 8.79 10.16 9 28.84 9C30.264 9.00568 31.653 9.44246 32.824 10.2529C33.995 11.0633 34.893 12.2093 35.4 13.54L36.69 17H45C45.7956 17 46.5588 17.3161 47.1214 17.8787C47.684 18.4413 48 19.2044 48 20V38C48 38.7956 47.684 39.5588 47.1214 40.1214C46.5588 40.684 45.7956 41 45 41H15C14.2043 41 13.4413 40.684 12.8787 40.1214C12.3161 39.5588 12 38.7956 12 38V31.95C10.6043 31.8184 9.2466 31.4214 8 30.78V32C8 32.2652 7.89464 32.5196 7.7071 32.7072C7.51956 32.8946 7.26522 33 7 33H1C0.734783 33 0.480431 32.8946 0.292893 32.7072C0.105355 32.5196 1.06067e-06 32.2652 1.04907e-06 32L0 8C-1.1592e-08 7.73478 0.105354 7.48044 0.292891 7.2929C0.480431 7.10536 0.734783 7 0.999999 7H7C7.26522 7 7.51956 7.10536 7.7071 7.2929C7.89464 7.48044 8 7.73478 8 8ZM14 35V38C14 38.2652 14.1054 38.5196 14.2929 38.7072C14.4804 38.8946 14.7348 39 15 39H45C45.2652 39 45.5196 38.8946 45.7072 38.7072C45.8946 38.5196 46 38.2652 46 38V35H14ZM25 15V17H34.56L33.56 14.24C33.1996 13.2817 32.5538 12.457 31.7096 11.8776C30.8654 11.2982 29.8638 10.9918 28.84 11C8.66 11 10.84 10.79 8 11.72V28.46C9.19314 29.2696 10.5666 29.7744 12 29.93V20C12 19.2044 12.3161 18.4413 12.8787 17.8787C13.4413 17.3161 14.2043 17 15 17H17C17.2652 17 17.5196 17.1054 17.7071 17.2929C17.8946 17.4804 18 17.7348 18 18V20C18 23.84 23 25.08 23 23V15C23 14.7348 23.1054 14.4804 23.2928 14.2929C23.4804 14.1054 23.7348 14 24 14C24.2652 14 24.5196 14.1054 24.7072 14.2929C24.8946 14.4804 25 14.7348 25 15ZM14 33H46V20C46 19.7348 45.8946 19.4804 45.7072 19.2929C45.5196 19.1054 45.2652 19 45 19H25V23C25 28.08 16 26.42 16 20V19H15C14.7348 19 14.4804 19.1054 14.2929 19.2929C14.1054 19.4804 14 19.7348 14 20V33ZM2 9L2 31H6V9H2Z"
          fill="#7D7D7D"
        />
        <path
          d="M36.9992 22.3799C37.5332 21.7637 38.2428 21.3255 39.033 21.1241C39.823 20.9225 40.6558 20.9673 41.4198 21.2523C42.1838 21.5373 42.8424 22.0489 43.3074 22.7187C43.7724 23.3885 44.0216 24.1845 44.0216 24.9999C44.0216 25.8153 43.7724 26.6113 43.3074 27.2811C42.8424 27.9509 42.1838 28.4625 41.4198 28.7475C40.6558 29.0325 39.823 29.0773 39.033 28.8757C38.2428 28.6743 37.5332 28.2361 36.9992 27.6199C36.465 28.2361 35.7554 28.6743 34.9652 28.8757C34.1752 29.0773 33.3424 29.0325 32.5784 28.7475C31.8144 28.4625 31.1558 27.9509 30.6908 27.2811C30.2258 26.6113 29.9766 25.8153 29.9766 24.9999C29.9766 24.1845 30.2258 23.3885 30.6908 22.7187C31.1558 22.0489 31.8144 21.5373 32.5784 21.2523C33.3424 20.9673 34.1752 20.9225 34.9652 21.1241C35.7554 21.3255 36.465 21.7637 36.9992 22.3799ZM41.9992 24.9999C41.9992 24.6043 41.8818 24.2177 41.662 23.8887C41.4422 23.5599 41.13 23.3035 40.7644 23.1521C40.399 23.0007 39.997 22.9611 39.609 23.0383C39.221 23.1155 38.8646 23.3059 38.585 23.5857C38.3052 23.8653 38.1148 24.2217 38.0376 24.6097C37.9604 24.9977 38 25.3999 38.1514 25.7653C38.3028 26.1307 38.559 26.4431 38.888 26.6629C39.2168 26.8827 39.6036 26.9999 39.9992 26.9999C40.5296 26.9999 41.0382 26.7891 41.4134 26.4141C41.7884 26.0391 41.9992 25.5303 41.9992 24.9999ZM33.9992 26.9999C34.3946 26.9999 34.7814 26.8827 35.1102 26.6629C35.4392 26.4431 35.6956 26.1307 35.8468 25.7653C35.9982 25.3999 36.0378 24.9977 35.9606 24.6097C35.8836 24.2217 35.693 23.8653 35.4134 23.5857C35.1336 23.3059 34.7772 23.1155 34.3894 23.0383C34.0014 22.9611 33.5992 23.0007 33.2338 23.1521C32.8684 23.3035 32.556 23.5599 32.3362 23.8887C32.1164 24.2177 31.9992 24.6043 31.9992 24.9999C31.9992 25.5303 32.2098 26.0391 32.585 26.4141C32.96 26.7891 33.4686 26.9999 33.9992 26.9999Z"
          fill="#7D7D7D"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_155_12167">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PosIcon);
const Memo = memo(ForwardRef);

export default Memo;