import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    // recomposes the global state for the application
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        //both thunk and logger will be available for our application
        applyMiddleware(thunk, logger)
    );
    return store;
}