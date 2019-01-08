import { createStore, combineReducers } from 'redux';
import cartReducer from '../Features/cart/reducer'


const rootReducer = combineReducers({
  cart: cartReducer
})

const store = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
)

export default store
