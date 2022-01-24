import React, { useState } from 'react';
import './Form.css';
import {useDispatch} from 'react-redux';
import {saveTodo} from '../features/todoSlice';
import Button from './Button';
import {renderChild} from '../features/todoSlice'
import Message from './Message';

function Form() {
    const [input, setInput] = useState('');
    const [submited, setSubmited] = useState({
        state: false,
        message: 'something intresting',
        look: 'danger'
    });
    const dispatch = useDispatch();

    const handleChange = e => {
        setInput(e.target.value);
        setSubmited({...submited, state: false});
    }

    const addTodo = e => {
        e.preventDefault();

        if(!input) {
            setSubmited({
                state: true,
                message: 'No field can be empty',
                look: 'danger'
            })
            return;
        }

        const newTodo = {
            item: input,
            done: false,
            id: Date.now()
        }

        dispatch(saveTodo(newTodo));
        setInput('');
        setSubmited({
            state: true,
            message: 'A new task was added.',
            look: 'succeed'
        })

        setTimeout(() => {
            dispatch(renderChild('list'));
        }, 2000);
    }

    return (
        <>
            <form className='form' onSubmit={addTodo}>
                <input type="text" value={input} placeholder='Add some chore or task' onChange={handleChange}/>
                <Button  type='submit' look='button_add' text='Add'/>
            </form>
            {
                submited.state && <Message message={submited.message} look={`${submited.look}`}/>
            }
        </>
    );
}

export default Form;
