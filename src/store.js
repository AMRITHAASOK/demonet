import { createStore, combineReducers, applyMiddleware } from 'redux';
import { restaurantListReducer } from './Reducers/restaurantReducers';
import thunk from 'redux-thunk';



const reducers= combineReducers({
    restaurantReducer:restaurantListReducer
})

const middleware = [thunk]

//create store


const store = createStore(reducers,applyMiddleware(...middleware));

export default store