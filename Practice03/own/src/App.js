import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyWork extends Component {
  render() 
  {
    return (
      <div>
        {this.props.workList.map(
          e => <span title={e.description} className={e.className}> 
                  <img src= {e.filePath} alt=""></img>
                </span> 
        )}
      </div>
    
    )
  }

}

class Bar extends Component {
  render() 
  {
    return (
      <ul>
        {this.props.choices.map(
          e => <li><span>{e}</span></li>
        )}
      </ul>
    
    )
  }

}

class Contact extends Component {
  render() 
  {
    return (
      <div>
        {this.props.info.map(
          e => <div> <i className= {e.icon}></i> <a href = {e.link}> {e.text} </a></div>
        )}
      </div>
    
    )
  }

}

export {MyWork, Bar, Contact};
