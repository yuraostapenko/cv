import { createStore, applyMiddleware, compose } from 'redux';
import  rootReducer from '../redusers/index';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';


export const history = createBrowserHistory()

// const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const  store = createStore(connectRouter(history)(rootReducer), compose(applyMiddleware(thunk), DevTools));


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore (connectRouter(history)(rootReducer), composeEnhancers(applyMiddleware(thunk)));



export default store;