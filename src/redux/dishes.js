import * as ActionTypes from './ActionTypes';

export const Dishes=(state={
        isLoading:true,
        errMess:null,
        dishes: []
    }, action)=>{
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading:false, errMess:null, dishes:action.payload};
            
        case ActionTypes.DISHES_LOADING:
            //return the current state, create a new object from the original state and then
            //make change for the object and return this object
            return {...state, isLoading:true, errMess:null, dishes:[]};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading:false, errMess:action.payload, dishes:[]};

        default:
            return state;
    }
}