import { IconProps } from "@/types";

const Product: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4190_10488)">
        <path
          d="M7.49935 18.8332H12.4993C16.666 18.8332 18.3327 17.1665 18.3327 12.9998V7.99984C18.3327 3.83317 16.666 2.1665 12.4993 2.1665H7.49935C3.33268 2.1665 1.66602 3.83317 1.66602 7.99984V12.9998C1.66602 17.1665 3.33268 18.8332 7.49935 18.8332Z"
          stroke="#0C0C0C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.125 8H6.875"
          stroke="#0C0C0C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.125 13H6.875"
          stroke="#0C0C0C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4190_10488">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Product;
