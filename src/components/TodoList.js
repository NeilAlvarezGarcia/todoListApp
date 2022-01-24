import React from 'react';
import { useSelector } from 'react-redux';
import { removeTodos, selectTodoList } from '../features/todoSlice';
import Button from './Button';
import Message from './Message';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todoList = useSelector(selectTodoList);

    return (
        <div className="listTodo_container">
        {
            todoList.length > 0 ? (
                <>
                    {
                        todoList.map(todo => (
                            <TodoItem key={todo.id} todo={todo}/>
                        ))
                    }
                    <Button text='Remove tasks done.' look='button_add' type='button' action={() => removeTodos()}/>
                </>
            )
           
            : (
                <Message message="There's nothing to show up yet."/>
            )
        }
        </div>
    );
};

export default TodoList;
