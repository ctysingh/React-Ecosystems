import {createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {todos} from './Todos/reducers';

const reducers = {
    todos,
};

/*
  storage: defaults to local storage on the web  
  stateReconciler: tell redux persists how to reconcile intial & stored state of the application
*/
const persistConfig = {
    key:'root',
    storage,
    stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(persistReducer);