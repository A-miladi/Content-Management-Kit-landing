import { FC } from 'react';

interface IItemsBox {
  className?: string;
  label?: string;
}

const ItemsBox: FC<IItemsBox> = ({ label }) => {
  // const [addItem, setAddItem] = useState<any[]>([]);
  // console.log(addItem)
  // const handleAddItem = () => {
  //   setAddItem([...addItem, addItem.length + 1]);
  // };
  // const handleRemoveItem = (index: number) => {
  //   setAddItem(addItem.filter((_, idx: number) => idx !== index));
  // };

  // const handleAddItem = (newItem: IAddItemBox) => {
  //   setAddItem((prevItems) => [...prevItems, newItem]);
  // };
  // const handleRemoveItem = (index: number) => {
  //   setAddItem(addItem.filter((_, idx: number) => idx !== index));
  // };
  // console.log(itemData, "ITEM DATA");
  return (
    <section className=" w-full flex flex-col items-center justify-center gap-2 py-2 border-b border-neutral-700">
      <div className=" w-full flex flex-col gap-2 " dir="rtl">
        <p className=" text-neutral-200 font-light">{label}</p>
        {/* 
        {itemData.map((i: IAddItemBox, idx: number) => (
          <AddItem
            key={idx}
            idx={idx + 1}
            onRemoveItem={() => {}}
            updateItemData={setItemData}
          />
        ))} */}
      </div>
    </section>
  );
};

export default ItemsBox;
