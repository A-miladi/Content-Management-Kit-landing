import { IconProps } from "@/types";

const Favorite: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_926_6177)">
        <path
          d="M7.66664 12.3166L9.81664 14.2C9.91664 14.2916 10.075 14.2916 10.175 14.2L12.325 12.3166C12.8833 11.825 12.9583 10.9916 12.4916 10.4083C12.025 9.82498 11.175 9.71665 10.5833 10.1666L9.99997 10.6166L9.40831 10.175C8.80831 9.72498 7.96664 9.83331 7.49998 10.4166C7.03331 10.9916 7.10831 11.8333 7.66664 12.3166Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3334 9.16675V14.1667C18.3334 17.5001 17.5 18.3334 14.1667 18.3334H5.83335C2.50002 18.3334 1.66669 17.5001 1.66669 14.1667V5.83341C1.66669 2.50008 2.50002 1.66675 5.83335 1.66675H7.08335C8.33335 1.66675 8.60835 2.03341 9.08335 2.66675L10.3334 4.33341C10.65 4.75008 10.8334 5.00008 11.6667 5.00008H14.1667C17.5 5.00008 18.3334 5.83341 18.3334 9.16675Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_926_6177">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Favorite;
