import * as ActionTypes from './ActionTypes';

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