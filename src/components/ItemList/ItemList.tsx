import { ItemListProps } from "@/types/types";

function ItemList<T>({ items, renderItem, className }: ItemListProps<T>) {
  return (
    <div
      className={`flex justify-between flex-wrap gap-5 list-none mb-11 md:mb-[60px] ${className}`}
    >
      {items.map(renderItem)}
    </div>
  );
}

export default ItemList;
