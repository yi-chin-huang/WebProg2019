import React, { Component } from 'react';
import TodoList from './list';
import Input from '../components/input';
import Item from '../components/item';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.todoArr = [];
        this.idCnt = 0;
        this.state = {todoItems: this.todoArr};
        this.itemNode = React.createRef();
        
    }

    addItem = content => {
        let newItemNode  = <Item content = {content} id = {this.idCnt} 
        del = {this.deleteItem} check = {this.checkItem} 
        checked = {false} ref={this.itemNode}/>
        let newItem = {node: newItemNode, isCompleted: false};
        this.todoArr.push(newItem);
        this.idCnt += 1;
        this.setState((state) => ({todoItems: this.todoArr}));
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
            if(this.todoArr[i].node.props.id === id)
            {
                this.todoArr.splice(i,1);
                break;
            }	
        }
        this.setState((state) => ({todoItems: this.todoArr}));
    }
    
    checkItem = e => {
        const id = parseInt(e.target.id);
        let todoItem = this.todoArr[0];
        let itemId = 0;
        for (var i = 0; i <= this.todoArr.length - 1; i++) {
            if(this.todoArr[i].node.props.id === id)
            {
                todoItem = this.todoArr[i];
                itemId = i;
                break;
            }	
        }
        console.log(itemId);
        const styleComp = {textDecoration: "line-through", opacity: 0.5};
        const styleActive = {textDecoration: "none", opacity: 1};
        if(todoItem.isCompleted) 
        {        
            let newItemNode  = <Item content = {todoItem.node.props.content} id = {todoItem.node.props.id} 
                                del = {this.deleteItem} check = {this.checkItem}
                                checked = {false} style = {styleActive}/>
            let newItem = {node: newItemNode, isCompleted: false};
            this.todoArr[itemId] = newItem;
            this.setState((state) => ({todoItems: this.todoArr}));
        }
        else{
            let newItemNode  = <Item content = {todoItem.node.props.content} id = {todoItem.node.props.id} 
                                del = {this.deleteItem} check = {this.checkItem}
                                checked = {true} style = {styleComp}/>
            let newItem = {node: newItemNode, isCompleted: true};
            this.todoArr[itemId] = newItem;
            this.setState((state) => ({todoItems: this.todoArr}));            
        }

        // let item = todoItem.node;
        // // let text = item.getElementsByTagName('H1')[0];
        
        // if(todoItem.isCompleted) 
        // {
        //     todoItem.isCompleted = false;
        //     text.style["textDecoration"] = "none";
        //     text.style["opacity"] = 1;              
    
        // }
        // else
        // {
        //     todoItem.isCompleted = true;
        //     text.style["textDecoration"] = "line-through";
        //     text.style["opacity"] = 0.5;
    
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
