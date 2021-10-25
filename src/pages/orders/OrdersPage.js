import {useSelector} from 'react-redux';
import {selectOrders} from './OrdersSlice';
import EachOrder from './EachOrder';

function Order() {
    const items = useSelector(selectOrders)

    const eachItems = items.map(item =>(
        <article key={item.id}>
            <EachOrder
                date={item.date}
                total={item.total}
                contains = {item.contains}
            />
        </article>
    )) 
    return (<div>{eachItems}</div>);
}
  
export default Order;