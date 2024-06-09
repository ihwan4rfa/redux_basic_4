import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
