import '../css/ScrollBox.css';
import {Component} from "react";

class ScrollBox extends Component {
    scrollTopToBottom = () =>{
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    scrollBottomToTop = () =>{
        this.box.scrollTop = 0;
    }
    render() {
        return (
            <div className='outStyle' ref={ref=>this.box = ref}>
                <div className='innerStyle'/>
            </div>
        );
    }
}


export default ScrollBox;