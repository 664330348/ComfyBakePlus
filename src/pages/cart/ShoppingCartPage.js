import {useSelector} from 'react-redux';
import {selectShoppingCartContains,selectShoppingCartTotal} from './ShoppingCartSlice';
import ShoppingCartItem from '../../components/ShoppingCartItem';

function ShoppingCart() {
    const items = useSelector(selectShoppingCartContains)
    const total = useSelector(selectShoppingCartTotal)
    const eachItems = items.map(item =>(
        <ShoppingCartItem key = {item.id}
            id = {item.id}
            name  = {item.name}
            img = {item.img}
            price = {item.price}
            amount = {item.amount}
        />
    )) 
    return (
        <div>
            <div>
                {eachItems}
            </div>
            <div> 
                Payment Amount: $ {total} 
            </div>
        </div>
    );
}
  
export default ShoppingCart;