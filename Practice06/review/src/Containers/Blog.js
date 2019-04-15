import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import All_Foods from './All_Foods';
import Publication from '.././Components/Publication';
import Food from '../Components/Food';
import Home from '../Components/Home';

class Blog extends Component {
   render() {
      return (
         <div>
            <button>
               <NavLink to="/home">Home</NavLink>
            </button>
            <button>
               <NavLink to="/publication">My publication</NavLink>
            </button>
            <button>
               <NavLink to="/foods">My Favorite food</NavLink>
            </button>
            <hr />

            <Switch>
               <Route exact path="/" component={ Home }/>
               <Route path="/publication" component={ Publication }/>
               <Route exact path="/foods" component={ All_Foods }/>
               <Route path="/foods/:species?" component={ Food }/>
               <Redirect from="/home" to="/"/>
            </Switch>
         </div>
      );
   }
}

export default Blog;