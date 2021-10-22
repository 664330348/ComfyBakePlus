export default function Item (props){
    const {name, img, body, ingredients, price, left} = props
    
    
    return (
        <div className="item">
            <h1>{name}</h1>
            <img src={img} alt={name}/>
            <p className="item_body">{body}</p>
            <div className="item_price"> $ {price} </div>
            <div className="item_left"> {left} left</div>
            <p className="ingredients">{ingredients}</p>
        </div>
    )
}