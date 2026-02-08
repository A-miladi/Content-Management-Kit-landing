import { IconProps } from "@/types";

const Gallery: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0002 58.6663H40.0002C53.3335 58.6663 58.6668 53.333 58.6668 39.9997V23.9997C58.6668 10.6663 53.3335 5.33301 40.0002 5.33301H24.0002C10.6668 5.33301 5.3335 10.6663 5.3335 23.9997V39.9997C5.3335 53.333 10.6668 58.6663 24.0002 58.6663Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9998 26.6667C26.9454 26.6667 29.3332 24.2789 29.3332 21.3333C29.3332 18.3878 26.9454 16 23.9998 16C21.0543 16 18.6665 18.3878 18.6665 21.3333C18.6665 24.2789 21.0543 26.6667 23.9998 26.6667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.12012 50.5332L20.2668 41.7065C22.3735 40.2932 25.4135 40.4532 27.3068 42.0798L28.1868 42.8532C30.2668 44.6398 33.6268 44.6398 35.7068 42.8532L46.8001 33.3332C48.8801 31.5465 52.2401 31.5465 54.3201 33.3332L58.6668 37.0665"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Gallery;
