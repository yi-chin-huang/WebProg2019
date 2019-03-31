import React, { Component } from 'react';
import TodoList from './list';
import Input from '../components/input';
import Item from '../components/item';


// let cnt = 0;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.todoArr = [];
        this.state = {todoItems: this.todoArr, itemcnt: 0};
        this.itemNode = React.createRef();
        
    }

    addItem = content => {
        let newItem = <Item content = {content} id = {this.state.itemcnt} del = {this.deleteItem} check = {this.checkItem} ref={this.itemNode}/>
        this.todoArr.push(newItem);
        this.setState((state) => ({todoItems: this.todoArr, itemcnt: state.itemcnt + 1}));
    }

    handleInput = e => {
        if (e.key === "Enter" && e.target.value !== '') {
            this.addItem(e.target.value);
            e.target.value = '';
        }
    };
    
    deleteItem = e => {
        const id = parseInt(e.target.id);
        for (var i = this.todoArr.length - 1; i >= 0; i--) {
            if(this.todoArr[i].props.id === id)
            {
                this.todoArr.splice(i,1);
                break;
            }	
        }
        this.setState((state) => ({todoItems: this.todoArr}));
    }
    
    checkItem = e => {
        // const id = parseInt(e.target.id);
        // let item = this.todoArr.find(obj => {return obj.props.id === id});
        // let item = this.todoArr[0];
        // for (var i = this.todoArr.length - 1; i >= 0; i--) {
        //     if(this.todoArr[i].props.id === id)
        //     {
        //         item = this.todoArr[i];
        //         break;
        //     }	
        // }
        this.itemNode.current.changeStatus();
        // let text = e.target.content;
        
        // if(item.state.status == "active") 
        // {
        //     item.setState(() => ({status: "completed"}));
        //     text.style["textDecoration"] = "line-through";
        //     text.style["opacity"] = 0.5;
    
        // }
        // else
        // {
        //     item.setState(() => ({status: "active"}));
        //     text.style["textDecoration"] = "none";
        //     text.style["opacity"] = 1;
    
        // }
        // this.setState((state) => ({todoItems: this.todoArr}));        
    }

    render() {
      return (
        <section className = "todo-app__main" >
          <Input press = {this.handleInput} />
          <TodoList list = {this.state.todoItems} />
        </section>
      );
    }
}

export default Main;