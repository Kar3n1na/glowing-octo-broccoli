import { combineReducers, createStore } from 'redux'

import userReducer from "./redux/reducers/userReducer"

const rootReducer = combineReducers({
    user: useReducer
});

const configStore = () => {
    return createStore (
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configStore
