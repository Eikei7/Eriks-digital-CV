import combineReducers from './reducers/index.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: combineReducers,
    });

export default store;