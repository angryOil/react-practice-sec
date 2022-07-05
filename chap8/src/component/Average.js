import {useState , useMemo , useCallback} from "react";

const getAverage = numbers =>{
    console.log('평균 계산중');
    if(numbers.length === 0 ) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(0);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);//<컴포넌트가 처음 렌더링 될때만 함수생성
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[number,list]);   // number , list 가 변환때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))}
            </ul>
            <b>평균값:</b>{avg}
        </div>
    );
};


export default Average;