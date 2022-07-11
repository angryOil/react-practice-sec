import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import './../styles/TodoItem.scss';




const TodoItem = ({todo, onRemove , onToggle ,style}) => {
    const {id,text,checked} = todo;
    return (
        <div className='TodoListItem-virtualized' style={style}>
            <div className='TodoItem'>
                <div className={`checkbox , ${checked ? 'checked':''}`} onClick={() => onToggle(id)}>
                    {todo.checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className='text'>{text}</div>
                </div>
                <div className='remove' onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>

    );
};


export default React.memo(TodoItem);