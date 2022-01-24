import React from 'react';
import { useDispatch } from 'react-redux';

const Button = ({text, type, look, action}) => {
    const dispatch = useDispatch();
    
    return (
        <button className={look} type={type} onClick={() => action && dispatch(action())}>{text}</button>
    );
};

export default Button;
