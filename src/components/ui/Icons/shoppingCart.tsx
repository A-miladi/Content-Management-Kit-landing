import { IconProps } from "@/types";

const ShoppingCart: React.FC<IconProps> = ({ size = 28, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 3.25L3.83 3.61L4.793 15.083C4.87 16.02 5.653 16.739 6.593 16.736H17.502C18.399 16.738 19.16 16.078 19.287 15.19L20.236 8.632C20.342 7.899 19.833 7.219 19.101 7.113C19.037 7.104 4.164 7.099 4.164 7.099"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.125 10.7969H15.898"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.15337 20.2031C6.45437 20.2031 6.69737 20.4471 6.69737 20.7471C6.69737 21.0481 6.45437 21.2921 6.15337 21.2921C5.85237 21.2921 5.60938 21.0481 5.60938 20.7471C5.60938 20.4471 5.85237 20.2031 6.15337 20.2031Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4346 20.2031C17.7356 20.2031 17.9796 20.4471 17.9796 20.7471C17.9796 21.0481 17.7356 21.2921 17.4346 21.2921C17.1336 21.2921 16.8906 21.0481 16.8906 20.7471C16.8906 20.4471 17.1336 20.2031 17.4346 20.2031Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShoppingCart;
