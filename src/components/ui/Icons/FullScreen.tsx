import { IconProps } from "@/types";

const FullScreen: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#888888" />
      <path
        d="M18.9986 9.56708L22.5754 9.56708L22.5754 13.1439"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5668 14.5758L22.5254 9.61719"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1435 22.4739L9.56671 22.4739L9.56671 18.8972"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5753 17.4652L9.6167 22.4238"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FullScreen;
