import { IconProps } from "@/types";

const BasketShopping: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.711 10.4654L15.5777 4.33203L21.711 10.4654ZM21.711 10.4654H3.31104H21.711ZM21.711 10.4654L20.324 17.4006C19.9418 19.3119 18.2636 20.6876 16.3145 20.6876H8.70757C6.75847 20.6876 5.08033 19.3119 4.69808 17.4006L3.31104 10.4654M3.31104 10.4654L9.44437 4.33203L3.31104 10.4654Z" />
      <path
        d="M21.711 10.4654L15.5777 4.33203M21.711 10.4654H3.31104M21.711 10.4654L20.324 17.4006C19.9418 19.3119 18.2636 20.6876 16.3145 20.6876H8.70757C6.75847 20.6876 5.08033 19.3119 4.69808 17.4006L3.31104 10.4654M3.31104 10.4654L9.44437 4.33203"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BasketShopping;
