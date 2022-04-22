import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { formReducer } from './reducer';

const reducer = combineReducers({
    formInfo: formReducer,
});

// let initialState = {
//     formInfo: sessionStorage.getItem("formInfo")
//         ? JSON.parse(sessionStorage.getItem("formInfo"))
//         : { formInfo: [] }
// };

const middleware = [thunk];

const store = createStore(
    reducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;