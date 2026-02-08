import { cn } from '@/utils';
import React, { FC, useState } from 'react';
import Button from '../Button';

interface IColorBoxProps {
	label?: string;
	className?: string;
	opacityClassName?: string;
	colorValue?: string;
	initialOpacityValue?: number;
	onColorChange: (color: string) => void;
	onOpacityChange?: (opacity: number) => void;
}

const ColorBox: FC<IColorBoxProps> = ({
	label,
	className,
	opacityClassName,
	initialOpacityValue = 0,
	colorValue,
	onColorChange,
	onOpacityChange,
}) => {
	const [showInput, setShowInput] = useState(false);

	const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newOpacity = Number(event.target.value);
		if (onOpacityChange) {
			onOpacityChange(newOpacity);
		}
	};

	const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newColor = event.target.value;
		onColorChange(newColor);
		if (onColorChange) {
			onColorChange(newColor);
		}
	};

	return (
		<div
			className="relative flex h-16 w-full items-center gap-2 border-b border-neutral-900 py-3"
			dir="rtl"
		>
			<div className="flex h-full w-[50%] items-center truncate px-0.5 font-light text-neutral-200">
				<p className="truncate"> {label}</p>
			</div>
			<div className="flex h-full w-[50%] items-center justify-between rounded-md border border-neutral-400 py-1">
				<Button
					onClick={() => setShowInput(!showInput)}
					className={cn(
						'h-full w-1/3 rounded-none border-l border-neutral-500 pt-0.5',
						opacityClassName
					)}
				>
					<p className="truncate">{`${initialOpacityValue * 100}%`}</p>
				</Button>
				{showInput && (
					<input
						id="small-range"
						type="range"
						dir="ltr"
						value={initialOpacityValue * 100}
						min={0}
						max={100}
						onChange={handleOpacityChange}
						className="range-sm absolute bottom-0 left-[20%] h-1.5 w-[45%] cursor-pointer appearance-none rounded bg-neutral-500"
					/>
				)}

				<div
					className={cn(
						'flex h-full w-2/3 items-center justify-between gap-1 px-1',
						className
					)}
				>
					<div
						className="flex h-full w-2/3 items-center justify-end pt-0.5 text-xs text-neutral-100"
						dir="ltr"
					>
						<p className="truncate">{colorValue}</p>
					</div>
					<input
						type="color"
						className="h-full w-7 rounded"
						value={colorValue}
						onChange={handleColorChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default ColorBox;
