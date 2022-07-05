import {useReducer, useState} from "react";


function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default: //아무것도 안할때
            return state;
    }
}


const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}입니다</b>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
            </p>
        </div>
    );
};

export default ReducerCounter;