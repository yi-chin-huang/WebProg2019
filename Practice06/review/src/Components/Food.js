import React, {Component} from 'react';
import { NavLink, Switch, Route} from "react-router-dom";
import sushiSrc from '../images/1200px-Sushi_platter.jpg';
import pizzaSrc from '../images/pizza.jpeg';
import spaghettiSrc from '../images/spaghetti.jpeg';

class Food extends Component {
   render() {
      const all_FoodSrc = {'sushi': sushiSrc, 'pizza':pizzaSrc, 'spaghetti':spaghettiSrc };
      const { species } = this.props.match.params;
      

      if (Object.keys(all_FoodSrc).find(e => (e === species)) !== undefined) {
         return(
            <div>
               <img src={all_FoodSrc[species]} width="500" height="500"></img>
               <br/>
               <NavLink to="/foods">
                  <button>back</button>
               </NavLink>
            </div>
         )
      }
      else {
         console.log('no food');
         return(
            <div>
               <h1>oops...no such food</h1>
               <NavLink to="/foods">
                  <button>back</button>
               </NavLink>
            </div>
         )
      }
   }
}

export default Food;