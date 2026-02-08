import { IconProps } from "@/types";

const SmallScreen: React.FC<IconProps> = ({ size }) => {
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
        d="M21.1435 14.5755L17.5667 14.5755L17.5667 10.9987"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5758 9.5668L17.6172 14.5254"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9991 17.4653L14.5759 17.4653L14.5759 21.0421"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5668 22.474L14.5254 17.5154"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SmallScreen;
