import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
      return (
        <footer className = "todo-app__footer" id = "footer">
          <div className = "todo-app__total" id = "activeCount"> 0 Active </div>
            <ul className = "todo-app__view-buttons" id = "view-state">
                <button id = "state_all"> All</button>
                <button id = "state_active"> Active </button>
                <button id = "state_completed"> Completed </button>
            </ul>
          <div className = "todo-app__clean" id = "clear-completed" onclick = "clearCompleted()"> <button> Clear Completed </button> </div>
        </footer>
      );
    }
  }
  export default Footer;