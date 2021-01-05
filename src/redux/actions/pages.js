export const ADD_PAGE_DATA = "ADD_PAGE_DATA";
export const SET_PAGE_DATA = "SET_PAGE_DATA";

export const setPagesData = (data) => ({
    type: SET_PAGE_DATA,
    payload: data
});

export const addPageData = (data) => ({
    type: ADD_PAGE_DATA,
    payload: data
});

export const loadPages = (dispatck) => {
    return (dispatch)=>{
        try {
            const serializedState = localStorage.getItem('pages');

            if (serializedState === null) {
                return [];
            } else {
                const data = JSON.parse(serializedState);

                return [...data].map((item)=>{
                    dispatch(addPageData(item));
                })
            }
        } catch (err) {
            return undefined;
        }
    }
}; 