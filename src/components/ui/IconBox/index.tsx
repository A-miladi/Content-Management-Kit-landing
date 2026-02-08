// import { FC, useState } from 'react';
// import { cn } from '@/utils';

import { FC } from 'react';

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import * as solidIcons from '@fortawesome/free-solid-svg-icons';
// // import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
// import Button from '../Button';
// import Shop from '../Icons/Shop';
// import TextInput from '../TextInput';
// import Search from '../Icons/Search';

// interface IIconBoxProps {
//   className?: string;
//   label?: string;
//   colorValue?: string;
// }

// const IconBox: FC<IIconBoxProps> = ({ className, label, colorValue }) => {
//   const [isShowBox, setIsShowBox] = useState(false);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [selectedIcon, setSelectedIcon] = useState<IconDefinition | undefined>(
//     undefined
//   );
//   const [selectedColor, setSelectedColor] = useState<string>(
//     colorValue || '#ffffff'
//   );

//   const iconList: IconDefinition[] = Object.keys(solidIcons)
//     .filter((key) => key.startsWith('fa'))
//     .map((key) => solidIcons[key as keyof typeof solidIcons] as IconDefinition)
//     .reverse();
//   iconList.shift();

//   const filteredIcons = iconList.filter((icon) => {
//     const iconName = icon.iconName?.toLowerCase() || '';
//     return iconName.includes(searchQuery.toLowerCase());
//   });

//   const handleIconSelect = (icon: IconDefinition) => {
//     setSelectedIcon(icon);
//     setIsShowBox(false);
//   };

//   return (
//     <>
//       <section className="flex w-full flex-col gap-1 border-b border-neutral-900 py-1">
//         <div
//           className={cn(
//             'relative flex h-16 w-full items-center justify-between gap-2 py-3',
//             className
//           )}
//           dir="rtl"
//         >
//           <p className="flex h-full w-[50%] items-center px-0.5 font-light text-neutral-200">
//             {label}
//           </p>

//           <div className="flex h-full w-[50%] items-center justify-between rounded-md border border-neutral-400 p-1">
//             <div className="flex h-full w-full items-center justify-center gap-1">
//               <input
//                 type="color"
//                 defaultValue="white"
//                 className="h-full w-7 rounded"
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//               />
//               <p
//                 className="flex h-full w-2/3 items-center justify-center text-2xs text-neutral-100"
//                 dir="ltr"
//               >
//                 {selectedColor || '#ffffff'}
//               </p>
//               <Button
//                 onClick={() => setIsShowBox(!isShowBox)}
//                 className="flex h-full w-6 items-center justify-center rounded p-0"
//               >
//                 {selectedIcon ? (
//                   <FontAwesomeIcon
//                     icon={selectedIcon as IconProp}
//                     color={selectedColor}
//                     style={{ fontSize: '1.2rem' }}
//                   />
//                 ) : (
//                   <Shop color="#e7e7e7" size={18} />
//                 )}
//               </Button>
//             </div>
//           </div>
//         </div>

//         {isShowBox && (
//           <div className="mb-2 flex h-44 w-full flex-col items-center justify-start rounded-md border border-neutral-400 p-2">
//             <TextInput
//               placeholder="جستجو با نام انگلیسی آیکن"
//               icon={<Search color="#e7e7e7" size={20} />}
//               className="h-9 w-full rounded-md bg-neutral-700 pr-9"
//               parent="w-full"
//               dir="rtl"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e?.target?.value)}
//             />
//             <div className="max-h-3/4 mt-2 flex w-full flex-wrap items-start justify-start overflow-y-auto">
//               {filteredIcons.length === 0 ? (
//                 <p className="w-full pr-1 text-right text-sm text-neutral-400">
//                   {' '}
//                   ... آیکنی با این نام یافت نشد
//                 </p>
//               ) : (
//                 filteredIcons.map((icon, index) => (
//                   <div
//                     key={index}
//                     className="m-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded"
//                     onClick={() => handleIconSelect(icon)}
//                   >
//                     <FontAwesomeIcon
//                       icon={icon as IconProp} // Cast to IconProp
//                       color="#e7e7e7"
//                       className="mx-2"
//                     />
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default IconBox;

interface IIconBoxProps {
	className?: string;
	label?: string;
	colorValue?: string;
}
const IconBox: FC<IIconBoxProps> = ({ className, label, colorValue }) => {
	return <div style={{ backgroundColor: colorValue }} className={className}>{label}</div>;
};
export default IconBox;
