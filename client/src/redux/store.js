import { createStore, combineReducers } from "redux";
import  reducer1 from './reducers/reducer1';
import  reducer2 from './reducers/reducer2';

const reducer = combineReducers({
    reducer1,
    reducer2
});

const store = createStore(reducer);

export default store;