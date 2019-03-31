import React from 'react';
import x from '../img/x.png';
class Item extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {status: "active"};
        // this.status = "active";
    }
    
    changeStatus = () => {
        // let text = this.getElementsByTagName('H1')[0];
        let text = this.refs.itemContent;
        console.log(this.innerHTML);
        if(this.state.status == "active") 
        {
            this.setState(() => ({status: "completed"}));
            text.style["textDecoration"] = "line-through";
            text.style["opacity"] = 0.5;

        }
        else
        {
            this.setState(() => ({status: "active"}));
            text.style["textDecoration"] = "none";
            text.style["opacity"] = 1;

        }
   }


    render() {

        return (
            <li class = "todo-app__item">
                <div class = "todo-app__checkbox">
                    <input id = {this.props.id} type = "checkbox" onClick = {this.props.check}></input>
                    <label for = {this.props.id}></label>
                </div>
                <h1 class = "todo-app__item-detail" ref = "itemContent">{this.props.content}</h1>
                <img src = {x} class = "todo-app__item-x" onClick = {this.props.del} id = {this.props.id}/>
            </li>      
        );

    }
}

export default Item;