import { configureStore } from '@reduxjs/toolkit';
import buildingsReducer from './ducks/Buildings'
export const store = configureStore({
    reducer: {
        buildings:buildingsReducer
    }
});