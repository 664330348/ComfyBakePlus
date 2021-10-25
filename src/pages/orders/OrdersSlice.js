import { createSlice } from '@reduxjs/toolkit'
import img001 from '../../images/img001.png';
import img002 from '../../images/img002.png';


const initialState = [
    {id:"2323",date: "10/24", total: 37.92, contains: [{id:"1" , name:"Maple Sugar Scrolls", img:img002, price:5.99, amount:3},
                                {id:"2" , name:"Mini Cherry Bakewell Tarts", img:img001, price:3.99, amount:5}]},
]


const Orders = createSlice({
    name: 'Orders',
    initialState,
    reducers: {
    }
})

export const selectOrders = (state) => state.orders

export default Orders.reducer