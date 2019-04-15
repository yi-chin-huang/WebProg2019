import React from 'react';
import imgSrc from '../images/Naruto.jpeg'

const Home = () => {
   return(
      <div>
         <img src={imgSrc}></img>
         <div style={{border: 'solid', width: '300px'}}>
            <h3>Name: </h3>
            <h3>Age: </h3>
            <h3>Interest: </h3>
         </div>
      </div>
   )
}

export default Home;