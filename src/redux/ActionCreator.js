import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

// create action object
export const addComment = (dishId, rating, author, comment) =>({
    // define the type to Redux
    type: ActionTypes.ADD_COMMENT,
    payload:{
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// create as thunk
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    }, 2000)
}

//the following three only the dishes part of the state of the application
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes = (dishes)=>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});