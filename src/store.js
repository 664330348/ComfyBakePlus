import { configureStore } from '@reduxjs/toolkit'

import ShopReducer from './pages/shop/ShopSlice';
import ShoppingCartReducer from './pages/cart/ShoppingCartSlice';

export default configureStore({
  reducer: {
      shop: ShopReducer,
      shoppingCart: ShoppingCartReducer,
  }
})/*  */