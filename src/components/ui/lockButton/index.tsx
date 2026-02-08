import Button from '@/components/ui/Button';
import { cn } from '@/utils';
import { FC } from 'react';
import Premium from '../Icons/Premium';
import { PageUrls } from '@/constants/PageUrls';
import { useRouter } from 'next/navigation';

interface ILockButtonProps {
	className?: string;
}
const LockButton: FC<ILockButtonProps> = ({ className }) => {
	const router = useRouter();
	return (
		<div
			className={cn(
				'absolute flex h-7 w-[55%] items-center justify-between gap-1 border-none md:h-10 md:w-[30%]',
				className
			)}
		>
			<div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-primary-500 py-1 shadow-md shadow-[rgba(1,1,1,0.3)] backdrop-blur-[3px] transition-all duration-300 hover:p-0 max-md:pl-1">
				<Button
					onClick={() => router.push(PageUrls.plans)}
					className="hoverText flex h-full w-[45%] items-center justify-center gap-2 rounded-none p-0 transition-all duration-200 hover:bg-neutral-950"
				>
					<Premium color="#e7e7e7" size={22} className="pb-1 max-md:h-4" />
					<p className="text-2xs md:text-xs">خرید اشتراک</p>
				</Button>
				<Button
					onClick={() => router.push(PageUrls.plans)}
					className="hoverText flex h-full w-[55%] items-center justify-center rounded-none border-l border-neutral-200 p-0 transition-all duration-200 hover:bg-neutral-950"
				>
					<p className="text-xs">خرید : ۲۵،۰۰۰ تومان</p>
				</Button>
			</div>
		</div>
	);
};

export default LockButton;
