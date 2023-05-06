import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basketReducer';
import productsReducer from './productsReducer';

const store = configureStore({
    reducer:{
        basket: basketReducer,
        products: productsReducer
    }
});

export default store;