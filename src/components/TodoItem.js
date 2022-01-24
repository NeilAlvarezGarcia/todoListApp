import React from 'react';
import './TodoItem.css';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItem = ({todo:{item, done, id}}) => {
    const dispatch = useDispatch();
    const handleCheck = () => dispatch(setCheck(id));    

    return (
        <div className='todoItem'>
            <Checkbox  
                checked={done}
                color='primary'
                onChange={handleCheck}
                inputProps={{'aria-label': 'secondary checkboxes'}}
            />
            <p className={done ? 'todoItem--done' : ''}>{item}</p>
        </div>
    );
};

export default TodoItem;




