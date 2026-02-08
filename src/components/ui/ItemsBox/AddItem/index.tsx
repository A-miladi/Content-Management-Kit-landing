import Button from '@/components/ui/Button';
import Add from '@/components/ui/Icons/Add';
import Close from '@/components/ui/Icons/Close';
import Copy from '@/components/ui/Icons/Copy';
import TextArea from '@/components/ui/TextArea';
import TextInput from '@/components/ui/TextInput';
import { IAddItemBox } from '@/types';
import { Dispatch, FC, SetStateAction, useState } from 'react';

interface IAddItem {
	onRemoveItem?: (() => void) | undefined;
	idx: number;
	updateItemData: Dispatch<SetStateAction<IAddItemBox>>;
	itemData: IAddItemBox;
}

const AddItem: FC<IAddItem> = ({ onRemoveItem, updateItemData, idx }) => {
	const [openBox, setOpenBox] = useState(false);
	const [item, setItem] = useState<IAddItemBox>({
		title: '',
		description: '',
		link: '',
	});

	return (
		<>
			<div className=" w-full h-10 flex justify-between items-center gap-2 ">
				<div className=" w-full h-full py-1 border border-neutral-400 rounded-lg shadow-lg flex items-center justify-between">
					<Button
						onClick={() => setOpenBox(!openBox)}
						className=" p-0 px-3 w-5/6 h-full flex justify-between items-center border-l border-neutral-500 rounded-none"
					>
						<p>آیتم {idx}</p>
						<Copy color="#e7e7e7" size={18} />
					</Button>

					<Button
						onClick={idx === 1 ? () => updateItemData(item) : onRemoveItem}
						className=" w-1/6 p-0"
					>
						{idx === 1 ? (
							<Add color="#e7e7e7" size={18} />
						) : (
							<Close color="#e7e7e7" size={18} />
						)}
					</Button>
				</div>
			</div>
			{openBox && (
				<div className=" w-full bg-state-100 border border-neutral-400 py-4 px-2 rounded-lg flex flex-col gap-4">
					<TextInput
						onChange={(e) => setItem({ ...item, title: e.target.value })}
						placeholder="متن کوتاه"
						className=" w-full h-12 bg-neutral-800"
					/>
					<TextArea
						onChange={(e) => setItem({ ...item, description: e.target.value })}
						className=" w-full bg-neutral-800 border-none h-32"
						placeholder="متن بلند"
					/>
					<TextInput
						onChange={(e) => setItem({ ...item, link: e.target.value })}
						placeholder="لینک پیوند : https://..."
						className=" w-full h-12 bg-neutral-800"
					/>
				</div>
			)}
		</>
	);
};

export default AddItem;
