import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import cartReducer from './cart';
import { combineReducers } from 'redux'; // combineRedusers-соединение редюсеров всех

const rootReducer = combineReducers({
  filters: filtersReducer, // можно и просто filters ,ток в без Reducer в импорте (благодаря es6 babel)
  pizzas: pizzasReducer,
  cart: cartReducer,
});

export default rootReducer;
