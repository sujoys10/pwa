import { CHANGE_SEARCH_FIELD,
    GET_ROBOTS_PENDING,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_FAILED    
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({ type: GET_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({ type: GET_ROBOTS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: GET_ROBOTS_FAILED, payload: err }));
} 