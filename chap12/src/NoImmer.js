import {useCallback, useRef, useState} from "react";


const NoImmer =() =>{
    const nextId = useRef(1);
    const [form, setForm] = useState({name: '', username: ''});
    const [data, setData] = useState({
        arr: [],
        uselessValue: null
    });

    // input 수정함수
    const onChange = useCallback(
        e => {
            const {name, value} = e.target;
            setForm({
                ...form,
                [name]: [value]
            });
        }, [form]
    );

    //form 등록 함수
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username
            };
            setData({
                ...data,
                arr: data.arr.concat(info)
            });
            setForm({
                name: '',
                username: ''
            });
            nextId.current += 1;
            inputRef.current.focus();
        }, [data, form.name, form.username]
    );

    //삭제 함수
    const onRemove = useCallback(
        id => {
            setData({
                ...data,
                arr: data.arr.filter(info => info.id !== id)
            })
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


export default NoImmer;