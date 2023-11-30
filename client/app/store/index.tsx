import {applyMiddleware, compose } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import appReducers from './reducers'; 



export const ReduxStore = () => { 
 

    const store = configureStore({
        reducer: appReducers
    }
    );
    return store;
}
