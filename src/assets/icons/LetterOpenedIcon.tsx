import { Ref, SVGProps, forwardRef, memo } from "react";

const LetterOpenedIcon = (
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
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.8926 2.5H26.1074C28.373 2.49996 30.2246 2.49992 31.6862 2.69644C33.2142 2.90186 34.5388 3.34642 35.5962 4.4038C36.6536 5.4612 37.0982 6.78588 37.3036 8.31378C37.4046 9.06518 37.4536 9.91958 37.4776 10.8803C39.594 11.2217 41.3284 11.8938 42.7176 13.2829C44.2142 14.7796 44.8784 16.6775 45.1938 19.0223C45.5 21.3008 45.5 24.212 45.5 27.8876V28.1132C45.5 31.7888 45.5 34.7 45.1938 36.9784C44.8784 39.3232 44.2142 41.2212 42.7176 42.718C41.2208 44.2146 39.3228 44.8788 36.978 45.1942C34.6996 45.5004 31.7884 45.5004 28.1128 45.5004H19.8872C16.2117 45.5004 13.3004 45.5004 11.022 45.1942C8.67712 44.8788 6.77922 44.2146 5.28248 42.718C3.78576 41.2212 3.12152 39.3232 2.80628 36.9784C2.49994 34.7 2.49996 31.7888 2.5 28.1132V27.8876C2.49996 24.212 2.49994 21.3008 2.80628 19.0223C3.12152 16.6775 3.78576 14.7796 5.28248 13.2829C6.67152 11.8938 8.40604 11.2217 10.5225 10.8803C10.5463 9.91958 10.5954 9.06518 10.6964 8.31378C10.9019 6.78588 11.3464 5.4612 12.4038 4.4038C13.4612 3.34642 14.7859 2.90186 16.3138 2.69644C17.7755 2.49992 19.627 2.49996 21.8926 2.5ZM10.5 13.9323C9.03802 14.2258 8.1115 14.6965 7.4038 15.4042C6.55738 16.2506 6.05004 17.4099 5.77952 19.4221C5.50318 21.4774 5.5 24.1868 5.5 28.0004C5.5 31.814 5.50318 34.5234 5.77952 36.5786C6.05004 38.5908 6.55738 39.7502 7.4038 40.5966C8.25022 41.443 9.40952 41.9504 11.4217 42.2208C13.477 42.4972 16.1864 42.5004 20 42.5004H28C31.8136 42.5004 34.523 42.4972 36.5784 42.2208C38.5904 41.9504 39.7498 41.443 40.5962 40.5966C41.4426 39.7502 41.95 38.5908 42.2204 36.5786C42.4968 34.5234 42.5 31.814 42.5 28.0004C42.5 24.1868 42.4968 21.4774 42.2204 19.4221C41.95 17.4099 41.4426 16.2506 40.5962 15.4042C39.8886 14.6965 38.962 14.2258 37.5 13.9323V16.253C37.5 16.3453 37.5 16.4364 37.5002 16.5265C37.5018 18.0986 37.5032 19.3439 36.9808 20.4594C36.4582 21.5748 35.5008 22.371 34.292 23.3762C34.2228 23.4338 34.1526 23.492 34.0818 23.5512L32.5674 24.8132C30.7946 26.2904 29.3578 27.4878 28.0896 28.3034C26.7686 29.153 25.4822 29.6898 24 29.6898C22.5178 29.6898 21.2314 29.153 19.9104 28.3034C18.6422 27.4878 17.2054 26.2904 15.4327 24.8132L13.9182 23.5512C13.8474 23.492 13.7773 23.4338 13.708 23.3762C12.4992 22.371 11.5417 21.5748 11.0193 20.4594C10.4968 19.3439 10.4981 18.0986 10.4998 16.5265C10.4999 16.4364 10.5 16.3453 10.5 16.253V13.9323ZM16.7135 5.66968C15.5183 5.83038 14.9322 6.11804 14.5251 6.52512C14.118 6.9322 13.8304 7.51828 13.6697 8.71352C13.5032 9.9519 13.5 11.6006 13.5 14V16.253C13.5 18.2356 13.5331 18.7537 13.736 19.1869C13.9389 19.6201 14.3157 19.9772 15.8388 21.2464L17.2781 22.4458C19.144 24.0008 20.4394 25.0768 21.5332 25.7802C22.5918 26.4612 23.3098 26.6898 24 26.6898C24.6902 26.6898 25.4082 26.4612 26.4668 25.7802C27.5606 25.0768 28.856 24.0008 30.722 22.4458L32.1612 21.2464C33.6842 19.9772 34.061 19.6201 34.264 19.1869C34.4668 18.7537 34.5 18.2356 34.5 16.253V14C34.5 11.6006 34.4968 9.9519 34.3304 8.71352C34.1696 7.51828 33.882 6.9322 33.4748 6.52512C33.0678 6.11804 32.4818 5.83038 31.2864 5.66968C30.0482 5.50318 28.3994 5.5 26 5.5H22C19.6006 5.5 17.9519 5.50318 16.7135 5.66968ZM18.5 12C18.5 11.1716 19.1716 10.5 20 10.5H28C28.8284 10.5 29.5 11.1716 29.5 12C29.5 12.8284 28.8284 13.5 28 13.5H20C19.1716 13.5 18.5 12.8284 18.5 12ZM20.5 18C20.5 17.1716 21.1716 16.5 22 16.5H26C26.8284 16.5 27.5 17.1716 27.5 18C27.5 18.8284 26.8284 19.5 26 19.5H22C21.1716 19.5 20.5 18.8284 20.5 18Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(LetterOpenedIcon);
const Memo = memo(ForwardRef);

export default Memo;