import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class ALl_Foods extends Component {
   render() {
      const allFoods = ['pizza', 'spaghetti', 'sushi']
      const show_foods = allFoods.map(e => (
         <li>
            <NavLink to={ "/foods/" + e }> { e }</NavLink>
         </li>
      ));

      return(
      <div>
         <h3>Choose one food</h3>
         { show_foods }
      </div>
      );
   }
}

export default ALl_Foods;