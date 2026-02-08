import { IconProps } from '@/types';

const Order: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.64172 6.2002L10 10.4585L17.3084 6.22517"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0001 18.0085V10.4502"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.27501 2.06675L3.82502 4.54177C2.81668 5.10011 1.9917 6.50009 1.9917 7.65009V12.3584C1.9917 13.5084 2.81668 14.9084 3.82502 15.4668L8.27501 17.9418C9.22501 18.4668 10.7833 18.4668 11.7333 17.9418L16.1834 15.4668C17.1917 14.9084 18.0167 13.5084 18.0167 12.3584V7.65009C18.0167 6.50009 17.1917 5.10011 16.1834 4.54177L11.7333 2.06675C10.775 1.53341 9.22501 1.53341 8.27501 2.06675Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1667 11.0334V7.98345L6.25836 3.41675"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Order;
