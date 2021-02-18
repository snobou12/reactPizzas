import { createStore, compose, applyMiddleware } from 'redux'; // createStore- создание нашего хранилища
import rootReducer from './reducers';
import thunk from 'redux-thunk'; // middleware

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//middleware следка за actions
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)), // middlewareS
);
window.store = store;
export default store;
