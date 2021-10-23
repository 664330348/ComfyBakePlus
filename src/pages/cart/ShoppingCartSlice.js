import { createSlice } from '@reduxjs/toolkit'
import img001 from '../../images/img001.png';
import img002 from '../../images/img002.png';

const initialState = [
    {id:0 , name:"Maple Sugar Scrolls", img:img002, price:5.99, amount:3},
    {id:1 , name:"Mini Cherry Bakewell Tarts", img:img001, price:3.99, amount:5}
]
//{id:0 , name:Maple Sugar Scrolls, price:$5.99, amount:9}
const ShoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        ItemAdded (state, action){
            state.push(action.payload)
        },
        ItemIncreses (state, action){
            state.find(item => item.id === action.payload).amount++;
        
        },
        ItemDecreses (state, action){
            if (state.find(item => item.id === action.payload).amount >0){
                 state.find(item => item.id === action.payload).amount--;
            }
        },
        ItemRemove (state,action){
            return state.filter((item)=>{
                return item.id !== action.payload;
            })
        }
    }
})

export const {ItemAdded, ItemIncreses, ItemDecreses, ItemRemove} = ShoppingCartSlice.actions;
export const selectShoppingCart = (state) => state.shoppingCart;

export default ShoppingCartSlice.reducer