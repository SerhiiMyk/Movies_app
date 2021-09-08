import {SEARCH} from "../action/actionType";

let initialState = {value: {}};
const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case SEARCH:
            return {...state,value:{...action.payload}}
        default:
            return state
    }
}
export {searchReducer}