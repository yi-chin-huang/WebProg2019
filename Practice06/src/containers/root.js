import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom'
class Root extends Component {
    render() 
    {
      return (
        <BrowserRouter>
          <div>
              <Header/>
              <Main/> 
              <Footer/>
          </div>
        </BrowserRouter>
      
      )
    }

}

export default Root;