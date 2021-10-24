import {useSelector} from 'react-redux';
import {selectShop} from './ShopSlice';

import Item from '../../components/Item';

function Shop() {
    const items = useSelector(selectShop)

    const eachItems = items.map(item =>(
        /* <article key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name}/>
            <p>{item.body}</p>
            <p>{item.ingredients}</p>
            $ {item.price} <br/>
            {item.left} left
        </article> */
        
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