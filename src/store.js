import { configureStore } from '@reduxjs/toolkit'

import ShopReducer from './pages/shop/ShopSlice';

export default configureStore({
  reducer: {
      shop: ShopReducer,
  }
})