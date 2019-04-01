import React, { Component } from 'react';
import Header from './header.js';
import Section from './section.js';
import Footer from './footer.js';
var count = 0;
class item {
    constructor(id, detail) {
        this.id = id;
        this.detail = detail;
        this.isCompleted = false;
        this.isDeleted = false;
        
    }
    beingCancel = function(){
        this.isDeleted = true;
    }
}



 
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {list: []}
        this.handleCancel = this.handleCancel.bind(this);
    }
    setNumber = item => this.setState(state => ({list : state.list.concat([item])}))
    // handleCancel = id => this.setState(state => ({list : state.list[id].isDeleted = true}))

    handleCancel = function(id){
        console.log(id);
        this.setState(state => ({list : state.list[id].isDeleted = true}))
    }

    handleInput = e => {
        if(e.keyCode === 13 && e.target.value !== '') {
            const todo = e.target.value;
            var tmp_item = new item(count, todo)
            this.setNumber(tmp_item);
            e.target.value = "";
            count++;
            console.log(this.state);
        }
    }
    render(){
        return(
            <div className = "todo-app__root">
                <Header />
                <Section onKeyUp = {this.handleInput} todo = {this.state.list}  />
                <Footer />
            </div>
        )
    }
}

export default Todo;