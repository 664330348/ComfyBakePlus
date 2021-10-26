import {useSelector, useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {selectShoppingCartContains,selectShoppingCartTotal,ItemRemove} from './ShoppingCartSlice';
import {selectShop,ShopItemDecreses} from '../shop/ShopSlice';
import {OrdersAdded} from '../orders/OrdersSlice';
import ShoppingCartItem from '../../components/ShoppingCartItem';

function ShoppingCart() {
    const dispatch = useDispatch()
    const CartItems = useSelector(selectShoppingCartContains)
    const CartItemstotal = useSelector(selectShoppingCartTotal)
    const HomeItems = useSelector(selectShop)

    const eachItems = CartItems.map(item =>(
        <ShoppingCartItem key = {item.id}
            id = {item.id}
            name  = {item.name}
            img = {item.img}
            price = {item.price}
            amount = {item.amount}
        />
    )) 

    const Checkout =()=>{
        let ID= nanoid();
        let date_ = new Date().toLocaleDateString();
        let time_ = new Date().toLocaleTimeString();
        date_ = date_ + " " + time_;
       
        CartItems.map(item=>{
            const product = HomeItems.find(item_ => item_.id === item.id);
            if (product && product.left>=item.amount){
                dispatch(ItemRemove({id:item.id, price:item.price, amount:item.amount}));
                dispatch(ShopItemDecreses({id:item.id, amount:item.amount}));
                dispatch(OrdersAdded({id:ID, date:date_, 
                    item_:{id:item.id, name:item.name, img:item.img, price:item.price, amount:item.amount}}))
            }
            return 0;
        })
    }   

    return (
        <div>
            <div>
                {eachItems}
            </div>
            <div className="CheckoutBox"> 
                Payment Amount: $ {CartItemstotal} 
                <button onClick={Checkout}> Checkout </button>
            </div>
        </div>
    );
}
  
export default ShoppingCart;