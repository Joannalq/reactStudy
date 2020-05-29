
import * as ActionTypes from './ActionTypes';

export const Promotions=(state={
    isLoading:true,
    errMess:null,
    promotions: []
}, action)=>{
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading:false, errMess:null, promotions:action.payload};
            
        case ActionTypes.PROMOS_LOADING:
            //return the current state, create a new object from the original state and then
            //make change for the object and return this object
            return {...state, isLoading:true, errMess:null, promotions:[]};

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading:false, errMess:action.payload, promotions:[]};

        default:
            return state;
    }
}