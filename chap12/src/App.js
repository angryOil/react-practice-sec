import {useRef,useCallback,useState} from "react";
import NoImmer from "./NoImmer";
import UseImmer from "./UseImmer";



const App = () =>{
    return (
        <div>
            <NoImmer/>
            <UseImmer/>
        </div>
    )

}



export default App;