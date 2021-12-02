import {createStore, combineReducers} from 'redux';
import { profileReducer } from '../reducers/userReducer';

const comreducer = combineReducers({
    profileReducer,
    
})

export const store = createStore(comreducer);
