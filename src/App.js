import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import Form from './components/Form';
import Button from './components/Button';
import TodoList from './components/TodoList';
import { useSelector } from 'react-redux';
import { renderChild, selectChild } from './features/todoSlice';

function App() {
  const child = useSelector(selectChild);

  return (
    <div className={child ? 'inited app_container' : 'app_container'}>
      <section className='app'>
        <h1>ToDo App</h1>
        <p className='appText'>Add and track some task or chore that you might wanna get done.</p>
        <div className="buttons_container">
          <Button look='button' type='button' text='Add new' action={() => renderChild('form')}/>
          {
            child &&
            <Button look='button' type='button' text='Show List' action={() => renderChild('list')}/>
          }
        </div>
      </section>
      <TodoContainer> 
        {
          child === 'form' ? (
            <Form/>
          ) :
          (
            <TodoList/>
          )
        }         
      </TodoContainer> 
    </div>
  );
}

export default App;
