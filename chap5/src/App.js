import logo from './logo.svg';
import './App.css';
import ValidationSample from "./js/ValidationSample";
import ScrollBox from "./js/ScrollBox";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ValidationSample/>
                <ScrollBox ref={ref => this.scrollBox = ref} />
                <button onClick={() => this.scrollBox.scrollTopToBottom()}>
                    맨밑으로
                </button>
                <button onClick={() => this.scrollBox.scrollBottomToTop()}>
                    맨위로
                </button>
            </div>
        );
    }

}

export default App;
