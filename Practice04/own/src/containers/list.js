import React from 'react';
import Item from '../components/item';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
      }
    
    render() {
      return (
        <ul className = "todo-app__list" id = "todo-list">
            {this.props.list.map(
                e => e.node 
            )}
            {/* {this.props.list} */}
        </ul>
      );
    }
  }
  
export default TodoList;
