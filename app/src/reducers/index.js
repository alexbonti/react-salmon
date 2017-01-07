import { combineReducers } from 'redux'
import arrivals from './listReducer'
import current  from './currentReducer'

const EmptyRedux = (state = {}, action) => {
    /** example of a reducer
     *  
        switch (action.type) {
        case 'INC_COUNTER':{
            let newState={current:state.current+action.payload,previous:state.previous+action.payload};
            return Object.assign({},state,newState)
        }

        default:
            return state
    }
     */
    return state
}

const reducers = combineReducers({EmptyRedux,arrivals,current})

export default reducers