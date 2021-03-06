import { useDispatch} from 'react-redux';
import {ItemIncreses, ItemDecreses, ItemRemove} from '../pages/cart/ShoppingCartSlice';


export default function ShoppingCartItem (props){
    const {id, name, img, price, amount} = props
    const dispatch = useDispatch();
    
    return (
        <div className="ShoppingCartItem">
            <h1>{name}</h1>
            <div className="ShoppingCartItem-ImgBox">
                <img src={img} alt={name}/>
            </div>

            <div className="ShoppingCartItem-Control">
                <p> $ {price} / each </p>
                <div>
                    <button onClick={()=>{dispatch(ItemDecreses({id:id, price:price}))}}> {"<"} </button>
                    {amount}
                    <button onClick={()=>{dispatch(ItemIncreses({id:id, price:price}))}}> {">"} </button><br/>
                </div>
                 Total: ${Math.round(price*amount *100) /100 }
                <button className="ShoppingCartItem-RemoveButton" onClick={()=>{dispatch(ItemRemove({id:id, price:price, amount:amount}))}}> Remove </button>
            </div>
        </div>
    )
}