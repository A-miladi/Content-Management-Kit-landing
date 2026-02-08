import { IconProps } from '@/types';

const Arrow: React.FC<IconProps> = ({
	size = 17,
	className,
	rotate = false,
}) => {
	return (
		<svg
			width={size}
			height={size}
			className={`${className} transition-transform duration-300 ${
				rotate ? 'rotate-180' : 'rotate-0'
			}`}
			viewBox="0 0 27 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.95163 23.8334H16.5045C21.9652 23.8334 24.1495 21.6667 24.1495 16.2501V9.75008C24.1495 4.33341 21.9652 2.16675 16.5045 2.16675H9.95163C4.49092 2.16675 2.30664 4.33341 2.30664 9.75008V16.2501C2.30664 21.6667 4.49092 23.8334 9.95163 23.8334Z"
				stroke="#E7E7E7"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.37207 11.5266L13.2273 15.3399L17.0826 11.5266"
				stroke="#E7E7E7"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Arrow;
