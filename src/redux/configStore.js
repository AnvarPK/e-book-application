import { createStore, applyMiddleware, combineReducers } from 'redux';
import Pages from './reducers/pages';
import thunk from 'redux-thunk';

const configStore = () => {
    const store = createStore(
        combineReducers({
            pages: Pages
        }), applyMiddleware(thunk));
    return store;
};


export default configStore;