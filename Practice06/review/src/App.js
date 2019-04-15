import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './Containers/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <Blog />         
      </BrowserRouter>
    );
  }
}

export default App;
