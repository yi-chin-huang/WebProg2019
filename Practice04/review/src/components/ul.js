import React, { Component } from 'react';

class Ul extends Component{
    render(){
        return(
            <ul className = "todo-app__list">
                {this.props.todo.filter(q => q.isDeleted === false).map(e => 
                    <li key = {e.id} className = "todo-app__item">
                        <div className = "todo-app__checkbox">
                            <input type = "checkbox" id = {e.id}></input>
                            <label htmlFor = {e.id}></label>
                        </div>
                        <h1 className = "todo-app__item-detail">{e.detail}</h1>
                        <img src = {require('./x.png')} alt = "" className = "todo-app__item-x" />
                    </li>)}
            </ul>
        )
    }
}

export default Ul;