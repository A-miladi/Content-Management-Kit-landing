import React, { FC, useRef } from 'react';
import QuestionMessage from '../Icons/QuestionMessage';
import useOutsideClick from '@/hooks/useOutsideClick';
interface IToolTipProps {
	description: string;
	className?: string;
	setShowContent: (v: boolean) => void;
	showContent: boolean;
}

const ToolTip: FC<IToolTipProps> = ({
	description,
	className,
	setShowContent,
	showContent,
}) => {
	const Ref = useRef<HTMLDivElement>(null);
	useOutsideClick(Ref as React.RefObject<HTMLElement>, () => {
		setShowContent(false);
	});
	return (
		<div className="relative">
			<div
				ref={Ref}
				onClick={() => setShowContent(true)}
				className=" rounded-lg flex items-center justify-center cursor-pointer mr-1"
			>
				<QuestionMessage size={16} color="#888888" />
			</div>

			<div className=" absolute z-50 right-1/2 top-0 mt-4">
				{showContent && (
					<div
						className={`w-44 bg-neutral-50 text-neutral-600 text-xs rounded-tl rounded-xl border p-2 ${className}`}
					>
						<p className="font-normal text-xs">{description}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ToolTip;
