import { IconProps } from "@/types";

const Media: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49935 18.8332H12.4993C16.666 18.8332 18.3327 17.1665 18.3327 12.9998V7.99984C18.3327 3.83317 16.666 2.1665 12.4993 2.1665H7.49935C3.33268 2.1665 1.66602 3.83317 1.66602 7.99984V12.9998C1.66602 17.1665 3.33268 18.8332 7.49935 18.8332Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.58398 10.5002V9.2669C7.58398 7.67524 8.70898 7.03357 10.084 7.82524L11.1507 8.4419L12.2173 9.05857C13.5923 9.85024 13.5923 11.1502 12.2173 11.9419L11.1507 12.5586L10.084 13.1752C8.70898 13.9669 7.58398 13.3169 7.58398 11.7336V10.5002Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Media;
