import {useRef, useCallback, useState} from "react";
import produce from "immer";

const UseImmer = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({name: '', username: ''});
    const [data, setData] = useState({
        arr: [],
        uselessValue: null
    });

    //input 함수
    const onChange = useCallback(
        e => {
            const {name, value} = e.target;
            setForm(
                produce(draft => {
                    draft[name] = value;
                })
            );
        }, [form]
    );

    // 등록
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username
            };
            setData(
                produce(draft => {
                    draft.arr.push(info);
                })
            );
            setForm({
                    name: '',
                    username: ''
                }
            );
            nextId.current += 1;
            inputRef.current.focus()
        }, [data, form.name, form.username]
    );

    //삭제
    const onRemove = useCallback(
        id => {
            setData(
                produce(draft => {
                    draft.arr.splice(draft.arr.findIndex(info => info.id === id), 1);
                })
            );
        }, [data]
    );
    const inputRef = useRef('');
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name='username' placeholder='아이디' value={form.username} ref={inputRef} onChange={onChange}/>
                <input name='name' placeholder='이름' value={form.name} onChange={onChange}/>
                <button type='submit'>등록</button>
            </form>
            <div>
                <ul>
                    {data.arr.map(info => (
                        <li key={info.id} onDoubleClick={() => onRemove(info.id)}>
                            {info.username}({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default UseImmer;