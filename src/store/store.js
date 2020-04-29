import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import phoneReducer from "./phones/reducer/phoneReducer"

export default createStore(phoneReducer,applyMiddleware(thunk));
