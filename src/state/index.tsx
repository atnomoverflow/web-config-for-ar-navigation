import { configureStore } from '@reduxjs/toolkit';
import buildingsReducer from './ducks/Buildings'
import layersReducer from './ducks/Layers'

export const store = configureStore({
    reducer: {
        buildings:buildingsReducer,
        layers:layersReducer
    }
});