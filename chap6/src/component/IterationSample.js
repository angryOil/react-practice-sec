const IterationSample = () => {
    const liItems = ['봄', '가을', '겨울', '여름', '초봄', '초여름', '초가을', '초겨울'];
    const liItemList = liItems.map((item,index) => <li key={index}>{item}</li>);
    return <ul>{liItemList}</ul>
};


export default IterationSample;