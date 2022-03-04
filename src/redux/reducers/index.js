import { combineReducers } from "redux";
import auth from './auth'
import counter from './counter'

const rootReducers = combineReducers({
    auth,
    counter
})

export default rootReducers