// import { cn } from '@/utils';
// import { FC } from 'react';
// import Dropdown from '../DropDown';

// interface IFontBoxProps {
// 	label?: string;
// 	className?: string;
// }
// type FontOption = { label: string; value: 'iranSans' | 'morabba' | 'nastaliq' };
// const FontBox: FC<IFontBoxProps> = ({ label, className }) => {
// 	// const { fontFamily, setFontFamily } = useFontStore();

// 	// const fontOptions: FontOption[] = [
// 	// 	{ label: 'ایران سنس', value: 'iranSans' },
// 	// 	{ label: 'مربع', value: 'morabba' },
// 	// ];

// 	// const font = fontOptions.some((option) => option.value === fontFamily)
// 	// 	? `font-${fontFamily}`
// 	// 	: 'font-iranSans';

// 	// const handleFontChange = (value: 'iranSans' | 'morabba' | 'nastaliq') => {
// 	// 	setFontFamily(value);
// 	// };
// 	return (
// 		<main
// 			className={cn(
// 				'flex w-full flex-col items-center justify-center gap-3 border-b border-neutral-900 py-4',
// 				className
// 			)}
// 			dir="rtl"
// 		>
// 			<section className="flex h-1/2 w-full flex-col items-center justify-between gap-2">
// 				<p className="w-full font-light text-neutral-200">{label}</p>
// 				<div className="flex w-full justify-between gap-2 md:flex-col">
// 					<Dropdown
// 						className="h-10 w-full border border-neutral-400 bg-transparent"
// 						reverse="flex-row-reverse px-1"
// 						parent="flex flex-row-reverse justify-between items-center"
// 						optionClassName="top-9"
// 						options={fontOptions}
// 						defaultValue="iranSans"
// 						onChange={(value: string) =>
// 							handleFontChange(value as 'iranSans' | 'morabba' | 'nastaliq')
// 						}
// 						fontFamily={font}
// 					/>
// 					<Dropdown
// 						className="h-10 w-full border border-neutral-400 bg-transparent"
// 						reverse="flex-row-reverse px-1"
// 						parent="flex flex-row-reverse justify-between items-center"
// 						optionClassName="top-9"
// 						options={fontOptions}
// 						defaultValue="iranSans"
// 						onChange={(value: string) =>
// 							handleFontChange(value as 'iranSans' | 'morabba' | 'nastaliq')
// 						}
// 						fontFamily={font}
// 					/>
// 				</div>
// 			</section>
// 		</main>
// 	);
// };

// export default FontBox;
