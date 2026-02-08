'use client';
import { cn } from '@/utils';
import React, { useEffect, useRef, useState } from 'react';
import ArrowDown from '../Icons/ArrowDown';
import Skeleton from 'react-loading-skeleton';
import ToolTip from '@/components/ui/ToolTip';

interface DropdownOption {
	label: string;
	value: string;
}

interface DropdownProps {
	options: DropdownOption[];
	onChange: (value: string) => void;
	label?: string;
	className?: string;
	labelClassName?: string;
	placeholder?: string;
	defaultValue?: string | null;
	parent?: string;
	optionClassName?: string;
	reverse?: string;
	fontFamily?: string;
	selectedOptionClassname?: string;
	placeholderClassName?: string;
	value?: string | null;
	required?: boolean;
	errorMessage?: string;
	loading?: boolean;
	tooltipDescription?: string;
	showTooltip?: boolean;
	tooltipClassName?: string;
	showContent?: boolean;
	setShowContent?: (value: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
	options,
	onChange,
	label,
	labelClassName,
	parent,
	optionClassName,
	className,
	reverse,
	fontFamily,
	selectedOptionClassname,
	placeholderClassName,
	placeholder = 'انتخاب کنید',
	defaultValue,
	required,
	errorMessage,
	loading = false,
	tooltipDescription,
	showTooltip = false,
	tooltipClassName,
	showContent = false,
	setShowContent,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState<
		string | number | undefined
	>(undefined);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleSelect = (value: string) => {
		setSelectedValue(value);
		onChange(value);
		setIsOpen(false);
	};

	const toggleDropdown = () => {
		if (!loading) {
			setIsOpen((prev) => !prev);
		}
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (defaultValue) {
			setSelectedValue(defaultValue);
		}
	}, [defaultValue]);

	if (loading) {
		return (
			<div className={cn('w-full', parent)}>
				{label && (
					<div className="flex items-center">
						<label
							className={cn(
								'relative pr-1 block text-sm font-medium text-black',
								labelClassName
							)}
						>
							{label}
							{required && <span className="text-red-500 text-xs mr-1">*</span>}
						</label>

						{showTooltip && tooltipDescription && setShowContent && (
							<ToolTip
								description={tooltipDescription}
								setShowContent={setShowContent}
								showContent={showContent}
								className={tooltipClassName}
							/>
						)}
					</div>
				)}
				<Skeleton
					baseColor="#232323"
					highlightColor="#454545"
					className="w-full h-10 rounded-lg"
				/>
			</div>
		);
	}

	return (
		<div className={cn('w-full relative', parent)}>
			{label && (
				<div className="flex items-center ">
					<label
						className={cn(
							'relative pr-1 block text-sm font-medium text-black',
							labelClassName
						)}
					>
						{label}
						{required && <span className="text-red-500 text-xs mr-1">*</span>}
					</label>

					{showTooltip && tooltipDescription && setShowContent && (
						<div className="ml-1 py-1">
							<ToolTip
								description={tooltipDescription}
								setShowContent={setShowContent}
								showContent={showContent}
								className={tooltipClassName}
							/>
						</div>
					)}
				</div>
			)}
			<div ref={dropdownRef}>
				<div
					className={cn(
						'relative flex w-full cursor-pointer items-center justify-center rounded-md border px-1.5 py-1 focus:outline-none',
						{
							'border-red-500': errorMessage,
						},
						className
					)}
					onClick={toggleDropdown}
				>
					<div
						className={cn(
							'flex w-full items-center justify-between gap-8',
							reverse
						)}
					>
						<span
							className={cn('flex items-center gap-2', placeholderClassName)}
						>
							{selectedValue !== undefined ? (
								<p
									className={cn(
										'text-xs md:text-sm',
										selectedOptionClassname,
										placeholderClassName
									)}
								>
									{
										options.find((option) => option.value === selectedValue)
											?.label
									}
								</p>
							) : (
								<p className="text-xs md:text-sm">{placeholder}</p>
							)}
						</span>
						<ArrowDown
							color="currentColor"
							className={`h-5 w-5 transform text-gray-400 transition-transform ${
								isOpen ? 'rotate-180' : ''
							}`}
						/>
					</div>
				</div>
				{isOpen && (
					<ul
						className={cn(
							'absolute z-10 mt-7 max-h-48 w-full overflow-y-auto rounded-md border border-neutral-500 bg-neutral-800 shadow-xl',
							optionClassName
						)}
					>
						{options.length === 0 ? (
							<li className="p-2 text-gray-400 flex justify-center">
								هیچ گزینه‌ای وجود ندارد!
							</li>
						) : (
							options.map((option) => (
								<li
									key={option.value}
									className={cn(
										`cursor-pointer px-4 py-2 text-sm hover:bg-neutral-600`,
										fontFamily,
										optionClassName
									)}
									onClick={() => handleSelect(option.value)}
								>
									{option.label}
								</li>
							))
						)}
					</ul>
				)}
			</div>
			{errorMessage && (
				<p className="absolute -bottom-5 px-2 bg-white text-xs text-red-500">
					{errorMessage}
				</p>
			)}
		</div>
	);
};

export default Dropdown;
