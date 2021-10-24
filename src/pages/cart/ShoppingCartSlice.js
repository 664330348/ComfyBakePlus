import { createSlice } from '@reduxjs/toolkit'

/* const initialState = [
    {id:"1" , name:"Maple Sugar Scrolls", img:img002, price:5.99, amount:3},
    {id:"2" , name:"Mini Cherry Bakewell Tarts", img:img001, price:3.99, amount:5} 
] */
const initialState = {
    Total: 0,
    Contains: []
}

const ShoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        ItemAdded (state, action){
            if (state.Contains.find(item => item.id === action.payload.id)){
                state.Contains.find(item => item.id === action.payload.id).amount++;
                state.Total += action.payload.price;
                state.Total = (Math.round(state.Total *100) /100)
            }else{
                state.Contains.push(action.payload)
                state.Total += action.payload.price;
                state.Total = (Math.round(state.Total *100) /100)
            }
        },
        ItemIncreses (state, action){
            state.Contains.find(item => item.id === action.payload.id).amount++;
                state.Total += action.payload.price;
                state.Total = (Math.round(state.Total *100) /100)
        },
        ItemDecreses (state, action){
            if (state.Contains.find(item => item.id === action.payload.id).amount >1){
                 state.Contains.find(item => item.id === action.payload.id).amount--;
                 state.Total -= action.payload.price;
                 state.Total = (Math.round(state.Total *100) /100)
            }
        },
        ItemRemove (state,action){
            state.Contains = state.Contains.filter((item)=>{
                return item.id !== action.payload.id;
            })
            state.Total -= (action.payload.price * action.payload.amount); 
            state.Total = (Math.round(state.Total *100) /100)
        }
    }
})

export const {ItemAdded, ItemIncreses, ItemDecreses, ItemRemove} = ShoppingCartSlice.actions;
export const selectShoppingCartTotal = (state) => state.shoppingCart.Total;
export const selectShoppingCartContains = (state) => state.shoppingCart.Contains;

export default ShoppingCartSlice.reducer