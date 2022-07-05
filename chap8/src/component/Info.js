import {useState, useEffect} from "react";


const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [visible, setVisible] = useState(false);
    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    useEffect(() => {
        console.log('랜더링 완료');
        console.log('이름:', name, '\n닉네임:', nickname);
        return () => {
            console.log('clean up');
            console.log(name);
        }
    }, [name==='joy']);

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <b>이름:</b>{name}<br/>
                <b>닉네임:</b>{nickname}
            </div>
        </div>
    );
};

export default Info;