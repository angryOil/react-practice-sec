import TodoItem from "./TodoItem";
import './../styles/TodoList.scss';
import React, {useCallback} from "react";
import {List} from "react-virtualized";


const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return (
                <TodoItem todo={todo}
                          key={key}
                          onRemove={onRemove}
                          onToggle={onToggle}
                          style={style}/>
            );
        },[onToggle,onRemove,todos]
    );
    return (
        <List className='TodoList'
              width={512}
              height={513}
              rowCount={todos.length}
              rowHeight={57}
              rowRenderer={rowRenderer}
              list={todos}
              style={{outline:'none'}}/>
    );
};

export default React.memo(TodoList);