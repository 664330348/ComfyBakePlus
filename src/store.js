import { configureStore } from '@reduxjs/toolkit'

import ShopReducer from './pages/shop/ShopSlice';
import ShoppingCartReducer from './pages/cart/ShoppingCartSlice';
import OrdersReducer from './pages/orders/OrdersSlice';

export default configureStore({
  reducer: {
      shop: ShopReducer,
      shoppingCart: ShoppingCartReducer,
      orders: OrdersReducer,
  }
})