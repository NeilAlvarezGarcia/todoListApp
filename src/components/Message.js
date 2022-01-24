import React from 'react';

function Message({message, look}) {
  return (
    <div className={`${look} message`}>
        <p>{message}</p>
    </div>
  );
}

export default Message;
