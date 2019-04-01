import React, { Component } from 'react';


class Footer extends Component{
    render(){
        return(
            <footer className="todo-app__footer" id="todo-footer">
                <div className="todo-app__total">
                    <p id="num_left">0 left</p>
                </div>
                <ul className="todo-app__view-buttons">
                    <button id="all" >All</button>
                    <button id="active">Active</button>
                    <button id="completed">Completed</button>
                </ul>
                <div className="todo-app__clean">
                    <button id="clear_complete">Clear completed</button>
                </div>
            </footer>
        )
    }
}

export default Footer;

