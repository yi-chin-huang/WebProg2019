import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import introHeader from '../components/introHeader';
import commentHeader from '../components/commentHeader';
class Header extends Component {
    render() 
    {
      return (
        <header>
            <div className ="title">
                <p><NavLink to = '/'>Yi Chin's Portfolio</NavLink></p>
            </div>

            <Switch>
              <Route exact path="/" component={introHeader} />
              <Route exact path="/comments" component={commentHeader} />
            </Switch>
        </header>
      
      )
    }

}

export default Header;