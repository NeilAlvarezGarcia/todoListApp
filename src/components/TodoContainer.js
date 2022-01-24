import React from 'react';

function TodoContainer({children}) {
    return ( 
        <div className='todo_container'>
            {children}
        </div>
    );
}

export default TodoContainer;
