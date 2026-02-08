import { IconProps } from "@/types";

const SettingSquare: React.FC<IconProps> = ({ size, color }) => {
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
        d="M12.9746 15.9165V12.6665"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9746 6.7085V5.0835"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9753 11.0418C14.1719 11.0418 15.1419 10.0718 15.1419 8.87516C15.1419 7.67855 14.1719 6.7085 12.9753 6.7085C11.7786 6.7085 10.8086 7.67855 10.8086 8.87516C10.8086 10.0718 11.7786 11.0418 12.9753 11.0418Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.02539 15.9165V14.2915"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.02539 8.3335V5.0835"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.02409 14.2918C8.22071 14.2918 9.19076 13.3218 9.19076 12.1252C9.19076 10.9285 8.22071 9.9585 7.02409 9.9585C5.82747 9.9585 4.85742 10.9285 4.85742 12.1252C4.85742 13.3218 5.82747 14.2918 7.02409 14.2918Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingSquare;
