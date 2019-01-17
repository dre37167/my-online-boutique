import { createStore, applyMiddleware, combineReducers } from 'redux';
import cartReducer from '../Features/cart/reducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cart: cartReducer
})

const store = createStore(

  rootReducer,
  (state = {}) => state,
  // applyMiddleware(thunk),
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
)

export default store
