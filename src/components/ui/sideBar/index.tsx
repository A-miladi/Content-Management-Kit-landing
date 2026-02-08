import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/utils';
import { FC, useRef, useState } from 'react';
import Button from '../Button';
import BurgerMenu from '../Icons/BurgerMenu';
import Close from '../Icons/Close';

interface sideBar {
	children?: React.ReactNode;
	className?: string;
}

const SideBar: FC<sideBar> = ({ children, className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement>(null!);
	useOutsideClick(sidebarRef, () => setIsOpen(false));

	return (
		<>
			<Button className="md:hidden" onClick={() => setIsOpen(true)}>
				<BurgerMenu color="#e7e7e7" size={32} />
			</Button>
			<div
				ref={sidebarRef}
				className={cn(
					`fixed right-0 top-0 flex h-screen flex-col bg-state-100 transition-transform duration-300 items-start py-3 z-10 w-1/2 md:hidden ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					}`,
					className
				)}
			>
				<Button className="pr-3 mb-2" onClick={() => setIsOpen(false)}>
					<Close color="#e7e7e7" size={25} />
				</Button>
				{children}
			</div>
		</>
	);
};

export default SideBar;
