import {Component} from "react";
import '../css/ValidationSample.css';


class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    };
    handleChange = e => {
        this.setState({
            password: e.target.value
        });
    };
    enterPress= e=>{
        if(e.key === 'Enter') this.handleClick();
    }
    handleClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '1234'
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={ref => this.input = ref}
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    onKeyDown={this.enterPress}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleClick}>검증하기</button>
            </div>
        );
    }
}


export default ValidationSample;