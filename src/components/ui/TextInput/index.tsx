import { cn } from '@/utils';
import { ComponentPropsWithRef, ReactNode } from 'react';
import ToolTip from '@/components/ui/ToolTip';

interface IInputProps extends ComponentPropsWithRef<'input'> {
	error?: boolean;
	helperText?: string;
	label?: string;
	parent?: string;
	icon?: ReactNode;
	iconPosition?: 'left' | 'right';
	labelClassName?: string;
	required?: boolean;
	errorMessage?: string;
	tooltipDescription?: string;
	showTooltip?: boolean;
	tooltipClassName?: string;
	showContent?: boolean;
	setShowContent?: (value: boolean) => void;
}

function TextInput({
	error,
	parent,
	helperText,
	label,
	disabled,
	iconPosition,
	name,
	icon,
	className,
	labelClassName,
	required,
	errorMessage,
	tooltipDescription,
	showTooltip = false,
	tooltipClassName,
	showContent = false,
	setShowContent,
	dir = 'rtl',
	type = 'text',
	...rest
}: IInputProps) {
	return (
		<div className={cn('flex flex-col gap-1 w-full relative', parent)}>
			{label && (
				<div className="flex items-center">
					<label
						className={`pr-1 text-right text-sm font-medium text-black ${labelClassName}`}
						htmlFor={name}
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
			<div className="relative flex items-center justify-start">
				{icon && (
					<div
						className={cn(
							'absolute w-1/6 h-full flex items-center justify-center overflow-hidden',
							iconPosition === 'left' ? 'left-1' : 'right-1'
						)}
					>
						{icon}
					</div>
				)}
				<input
					name={name}
					type={type}
					className={cn(
						'rounded-lg bg-transparent px-2 text-xs placeholder:text-neutral-300 focus:border-primary-700 focus:outline-none focus:ring-0 text-white',
						{
							'pr-6': icon,
							'border-red-500': error || errorMessage,
							'bg-lightGray': disabled,
							'pr-2 placeholder:text-right': dir === 'rtl',
							'placeholder:text-right': dir === 'ltr',
						},
						className
					)}
					{...rest}
					dir={dir}
					required={required}
					onInput={(e) => {
						if (type === 'number') {
							const target = e.target as HTMLInputElement;
							target.value = target.value.replace(/[^0-9]/g, '');
						}
					}}
				/>
			</div>
			{errorMessage && (
				<p className=" text-xs text-red-400">
					{errorMessage}
				</p>
			)}
			{helperText && !errorMessage && (
				<span
					className={cn('pr-1 text-xs text-error-600', {
						'text-red-500': error,
					})}
				>
					{helperText}
				</span>
			)}
		</div>
	);
}

export default TextInput;
