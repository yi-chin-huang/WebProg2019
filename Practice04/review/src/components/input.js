import React from 'react';


export default ({onKeyUp}) => {
    return<input type = 'text'
                className = "todo-app__input" 
                placeholder = "What needs to be done"
                onKeyUp = {onKeyUp}>
            </input>
};