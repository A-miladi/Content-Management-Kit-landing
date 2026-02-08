import { IconProps } from "@/types";

const Pages: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3327 8.83317V12.9998C18.3327 17.1665 16.666 18.8332 12.4993 18.8332H7.49935C3.33268 18.8332 1.66602 17.1665 1.66602 12.9998V7.99984C1.66602 3.83317 3.33268 2.1665 7.49935 2.1665H11.666"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3327 8.83317H14.9993C12.4993 8.83317 11.666 7.99984 11.666 5.49984V2.1665L18.3327 8.83317Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83398 11.3335H10.834"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83398 14.6665H9.16732"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Pages;
