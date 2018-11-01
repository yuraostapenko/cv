import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import showMenu from './showMenuReducers';
import scrolled from './scrolledReducer';
import coords from './coordsReducer';
import lang from './langReducer';


const rootReducer = combineReducers({
    showMenu,
    scrolled,
    coords,
    lang,
    form: formReducer,
 });
 
 export default rootReducer;