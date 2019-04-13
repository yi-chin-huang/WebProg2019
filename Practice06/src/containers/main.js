import React, { Component } from 'react';
import WorkList from '../components/worklist.js';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import chat from './chat/chat';
import comment from './comment/comment';
class Main extends Component {
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
                {/* <li className = "msgb"><span><NavLink to="/chat">Chat Room</NavLink></span></li> */}
                <li className = "msgb"><span><NavLink to="/comments">Comments</NavLink></span></li>
            </ul>
            <Switch>
              <Route exact path="/" component={WorkList} />
              {/* <WorkList/> */}
              <Route exact path="/chat" component={chat} />
              <Route exact path="/comments" component={comment} />
            </Switch>
        </div>

      )
    }

}

export default Main;