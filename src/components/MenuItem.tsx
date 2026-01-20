import type {MenuItems} from "../types"

type MenuItemProps={
  item:MenuItems
}

export default function MenuItem({item} : MenuItemProps) {
  return (
    <div className="p-7">
      <button className="border-2  border-amber-100 w-full p-3 flex justify-between hover:bg-amber-700">
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
      </button>
    </div>
  )
}