import React, { Component } from 'react';
import Input from '../components/input.js';
import Ul from '../components/ul.js';

class Section extends Component{
    render(){
        return(
            <section className = "todo-app__main">
                <Input onKeyUp = {this.props.onKeyUp} />
                <Ul todo = {this.props.todo} />
            </section>
        )
    }
}

export default Section;