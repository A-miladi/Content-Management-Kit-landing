import { IconProps } from "@/types";

const SettingTopBar: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 8.09163V12.9C2.5 14.6666 2.5 14.6666 4.16667 15.7916L8.75 18.4416C9.44167 18.8416 10.5667 18.8416 11.25 18.4416L15.8333 15.7916C17.5 14.6666 17.5 14.6666 17.5 12.9083V8.09163C17.5 6.3333 17.5 6.3333 15.8333 5.2083L11.25 2.5583C10.5667 2.1583 9.44167 2.1583 8.75 2.5583L4.16667 5.2083C2.5 6.3333 2.5 6.3333 2.5 8.09163Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13C11.3807 13 12.5 11.8807 12.5 10.5C12.5 9.11929 11.3807 8 10 8C8.61929 8 7.5 9.11929 7.5 10.5C7.5 11.8807 8.61929 13 10 13Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingTopBar;
