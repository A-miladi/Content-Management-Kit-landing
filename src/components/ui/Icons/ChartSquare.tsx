import { IconProps } from "@/types";

const ChartSquare: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.42589 9.7915H6.21756C5.69256 9.7915 5.26758 10.2165 5.26758 10.7415V15.0081H8.42589V9.7915V9.7915Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6346 6H9.36796C8.84296 6 8.41797 6.42501 8.41797 6.95001V15H11.5763V6.95001C11.5763 6.42501 11.1596 6 10.6346 6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7904 11.2085H11.582V15.0002H14.7404V12.1585C14.732 11.6335 14.307 11.2085 13.7904 11.2085Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49935 18.8332H12.4993C16.666 18.8332 18.3327 17.1665 18.3327 12.9998V7.99984C18.3327 3.83317 16.666 2.1665 12.4993 2.1665H7.49935C3.33268 2.1665 1.66602 3.83317 1.66602 7.99984V12.9998C1.66602 17.1665 3.33268 18.8332 7.49935 18.8332Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChartSquare;
