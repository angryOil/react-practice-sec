import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";


const App = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>홈으로</Link></li>
                <li><Link to='/about'>소개로</Link></li>
            </ul>
            <hr/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>

            </Routes>
        </div>
    );
};

export default App;