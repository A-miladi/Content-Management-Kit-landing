import { IconProps } from "@/types";

const Plus: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.15388 3.904H8.32188V5.264H5.15388V8.864H3.69788V5.264H0.529875V3.904H3.69788V0.575999H5.15388V3.904Z"
        fill={color}
      />
    </svg>
  );
};

export default Plus;
