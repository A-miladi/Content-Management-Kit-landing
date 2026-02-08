import { IconProps } from "@/types";

const UserTopBar: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1265 9.13944C10.0503 9.13182 9.95885 9.13182 9.87502 9.13944C8.06136 9.07849 6.62109 7.59278 6.62109 5.76421C6.62109 3.89754 8.12994 2.38135 10.0046 2.38135C11.8716 2.38135 13.388 3.89754 13.388 5.76421C13.3804 7.59278 11.9402 9.07849 10.1265 9.13944Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.31475 11.951C4.4706 13.1853 4.4706 15.1967 6.31475 16.4234C8.41037 17.8253 11.8472 17.8253 13.9428 16.4234C15.787 15.1891 15.787 13.1777 13.9428 11.951C11.8548 10.5567 8.41799 10.5567 6.31475 11.951Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserTopBar;
