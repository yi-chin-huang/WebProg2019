import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
// import chat from '../chat/chat';
// import comment from './comment/comment';

class Bar extends Component {
    render() 
    {
      return (
        <div className = "bar">
            <ul>
                <li><span><input type="submit" value="All" name = "group"/></span></li>
                <li><span><input type="submit" value="IMcamp" name="group"/></span></li>
                <li><span><input type="submit" value="Web" name = "group"/></span></li>
                <li><span><input type="submit" value="Logo" name = "group"/></span></li>
                <li><span><input type="submit" value="Paintings" name = "group"/></span></li>
                <li><span><input type="submit" value="Others" name = "group"/></span></li>
                {/* <li class = "msgb"><span><NavLink to="/chat">Chat Room</NavLink></span></li> */}
                {/* <li class = "msgb"><span><NavLink to="/comment">Make Comments</NavLink></span></li> */}
            </ul>
            {/* <Switch> */}
                {/* <Route exact path="/chat" component={chat} /> */}
                {/* <Route path="/comment" component={comment} /> */}
            {/* </Switch> */}
        </div>
      )
    }
  
  }

export default Bar;