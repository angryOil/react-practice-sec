import {MdAdd} from "react-icons/md";
import './../styles/TodoInsert.scss';
import {useCallback, useState} from "react";

const TodoInsert = ({onInsert}) => {

    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            //새로고침 방지
            e.preventDefault();
        }, [onInsert, value]
    );
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할일을 입력해 주세요'
                   value={value}
                   onChange={onChange}
            />
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    );
};


export default TodoInsert;
