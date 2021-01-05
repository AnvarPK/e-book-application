import { ADD_PAGE_DATA } from '../actions/pages'
import { SET_PAGE_DATA } from '../actions/pages'

const initialPageData = []

export default (state = initialPageData, action) => {
    switch (action.type) {

        case SET_PAGE_DATA:
            return [
                ...action.payload
            ]
            break;


        case ADD_PAGE_DATA:
            try {

                const data = [...state, action.payload]
                const serializedState = JSON.stringify(data);
                localStorage.setItem('pages', serializedState);
                return [...state, action.payload];
            } catch {
            }

            break;

        default:
            return state;
            break;
    }
}