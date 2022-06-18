import {useRef, useState} from "react";

const IterSample2 = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '팥빙수'},
        {id: 5, text: '바람'},
        {id: 6, text: '웹스톰'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(7);
    const onChange = e => setInputText(e.target.value);
    const enterPress = e =>{
        if(e.key === 'Enter') onClick();
    }
    const addInput = useRef(null);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
        addInput.current.focus();
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
    const nameList = names.map(name => <li onDoubleClick={() =>onRemove(name.id)} key={name.id}>{name.text}</li>);
    return (
        <div>
            <input ref={addInput} value={inputText} onKeyDown={enterPress} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}
            </ul>
        </div>
    );
}
export default IterSample2;
