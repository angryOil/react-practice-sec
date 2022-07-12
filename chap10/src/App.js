import logo from './logo.svg';
import './App.css';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {useCallback, useRef, useState} from "react";

const initLastId = 2500;

function createBulkTodos() {
    const arr = [];
    for (let i = 1; i <= 2500; i++) {
        arr.push({
            id: i,
            text: `할일 ${i}`,
            checked: i / 2 === 0
        });
    }
    return arr;
}

const App = () => {
    const [todos, setTodos] = useState(createBulkTodos);

    const nextId = useRef(2501);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                check: false
            };
            setTodos(todos => todos.concat(todo));
            nextId.current += 1;
        }, []
    );
    const onRemove = useCallback(
        id => {
            setTodos(todos=>todos.filter(todo=>todo.id!==id));
        }, []
    );
    const onToggle = useCallback(
        id => {
            setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
        }, []
    );
    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            </TodoTemplate>
        </div>
    )
}

export default App;
