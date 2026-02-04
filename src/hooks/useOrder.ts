import { useState } from "react"

import type { MenuItem, OrderItem } from "../types"


export default function useOrder(){
const [order, SetOrder]=useState<OrderItem[]>([])

const addItem=(item:MenuItem)=>{
   
const newItem={...item,quantity:1}
    SetOrder([...order,newItem])

}
    
    return{
        addItem
    }
}