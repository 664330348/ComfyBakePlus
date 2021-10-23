import {useSelector} from 'react-redux';
import {selectShoppingCart} from './ShoppingCartSlice';

import ShoppingCartItem from '../../components/ShoppingCartItem';

function ShoppingCart() {
    const items = useSelector(selectShoppingCart)

    const eachItems = items.map(item =>(
        <ShoppingCartItem key = {item.id}
            id = {item.id}
            name  = {item.name}
            img = {item.img}
            price = {item.price}
            amount = {item.amount}
        />
    )) 
    return (<div>{eachItems}</div>);
}
  
export default ShoppingCart;