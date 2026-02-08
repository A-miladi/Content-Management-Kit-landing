import { IconProps } from '@/types';

const Separator: React.FC<IconProps> = ({ size = 2, color }) => {
  return (
    <svg
      width={size}
      height="16"
      viewBox="0 0 2 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.999878 1V15" stroke={color} strokeLinecap="round" />
    </svg>
  );
};

export default Separator;
