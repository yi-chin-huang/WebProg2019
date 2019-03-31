import React from 'react';

// class Input extends React.Component {


//     render() {
//         return (
//             <input className = "todo-app__input" placeholder="What needs to be done?" id = "todo-input" press = {handleInput} ></input>
//         );
//     }
//   }
// export default Input;

export default ({press}) => {
    return <input type="text" 
                className = "todo-app__input"
                placeholder="What needs to be done?"
                id = "todo-input"
                onKeyPress={press}>
           </input>;
}