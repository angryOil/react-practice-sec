import {Component} from "react";


class ErrorBoundary extends Component {
    state = {
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        });
        console.log({error, errorInfo});
    }

    render() {
        if (this.state.error) return <h1>에러가 발생 하였습니다.</h1>
        return this.props.children;
    }
}

export default ErrorBoundary;