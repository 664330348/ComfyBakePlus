
function EachOrder(props) {
    const {date, total, contains} = props


    const eachItems = contains.map(item =>(
        <section  className="OrdersItems" key={item.id}>
            <div className="OrdersItemsLeft">
                <h6>{item.name}</h6>
                <div><img src={item.img} alt={item.name}/></div>
                <p>$ {item.price} / each </p>
            </div>
            <div className="OrdersItemsRight">
                <p>Spend: ${Math.round(item.price * item.amount *100) /100} {"=>"} {item.amount}</p>
            </div>
        </section>
    )) 

    return (
        <div className="Orders">
            <div className="OrdersTop">
                <h3>{date}</h3>
                <h4>TOTAL: ${total}</h4>
            </div>
            <div>
                {eachItems}
            </div>
        </div>
    );
}
  
export default EachOrder;