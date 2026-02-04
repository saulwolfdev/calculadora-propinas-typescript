import type {MenuItem} from "../types"
import { button } from "./menuitem.styles"
type MenuItemProps={
  item:MenuItem,
  addItem:(item:MenuItem)=>void
}

export default function MenuItem({item,addItem} : MenuItemProps) {
  return (
    <div className="p-7">
      <button className={button}
      onClick={()=>addItem(item)}
      >
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
      </button>
    </div>
  )
}

