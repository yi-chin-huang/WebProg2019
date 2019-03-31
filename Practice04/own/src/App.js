import React, { Component } from 'react';
import './App.css';
import Header from './containers/header';
import Main from './containers/main';
import Footer from './containers/footer';

class Input extends React.Component {
  render() {
    return (
      <input className = "todo-app__input" placeholder="What needs to be done?" id = "todo-input" ></input>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className = "todo-app__list" id = "todo-list"></ul>
    );
  }
}



class Root extends React.Component {
  render() {
    return (
      <div className = "todo-app__root">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}


export default Root;
