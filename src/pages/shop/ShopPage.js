import {useSelector} from 'react-redux';
import {selectShop} from './ShopSlice';

import Item from '../../components/Item';

function Shop() {
    const items = useSelector(selectShop)

    const eachItems = items.map(item =>( 
        <Item key = {item.id}
        id = {item.id}
        name  = {item.name}
        img = {item.img}
        body = {item.body}
        ingredients = {item.ingredients}
        price = {item.price}
        left = {item.left}
        />
    )) 
    return (<div>{eachItems}</div>);
}
  
export default Shop;