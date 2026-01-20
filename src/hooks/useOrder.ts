import { useState } from "react"

import type { OrderItem } from "../types"


export default function useOrder(){
const [order, SetOrder]=useState<OrderItem[]>([])    
    
    return{

    }
}