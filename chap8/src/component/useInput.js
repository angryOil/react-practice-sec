import {useReducer} from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInput(init) {
    const [state, dispatch] = useReducer(reducer, init);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];
};