import { useDispatch} from 'react-redux';
import {ItemAdded} from '../pages/cart/ShoppingCartSlice';

export default function Item (props){
    const {id, name, img, body, ingredients, price, left} = props
    const dispatch = useDispatch();
    
    return (
        <div className="item">
            <h1>{name}</h1>
            <div className="item-ImgBox">
                <img src={img} alt={name}/>
            </div>
            <p className="item_body">{body}</p>
            <div className="item_price"> $ {price} </div>
            <div className="item_left"> {left} left</div>
            <p className="ingredients">{ingredients}</p>
            <button onClick={()=>{dispatch(ItemAdded({id:id, name:name, img:img, price:price, amount:1}))}}> Add to Cart </button>
        </div>
    )
}