import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/root.js';
import App from './App.js';
import * as serviceWorker from './serviceWorker';


// let barList = ['All', 'IMcamp', 'Web', 'Logo', 'Paintings', 'Others'];

// ReactDOM.render(<Bar choices = {barList} />, 
//                  document.getElementById('bar'));

// class ContactInfo
// {
//     constructor(icon, link, text) 
//     {
//         this.icon = icon;
//         this.link = link;
//         this.text = text;
//     }
// };

// let fb = new ContactInfo("fab fa-facebook-square","https://www.facebook.com/yichin0226", "黃意芹");
// let ig = new ContactInfo("fab fa-instagram","https://www.instagram.com/celery_26/", "celery_26");
// let mail = new ContactInfo("far fa-envelope","b05705001@ntu.edu.tw","b05705001@ntu.edu.tw");

// let contactList = [ ig, mail];

// ReactDOM.render(<Contact info = {contactList} />, 
//     document.getElementById('contact'));


ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();

// Database
// id |            name            |     classname      |          img           | classification 
// ----+----------------------------+--------------------+------------------------+----------------
// 1 | IM camp notebook           | portfolio-wrapper1 | cover.png              | IMcamp
// 2 | IM camp website            | portfolio-wrapper2 | impossible website.png | Web
// 3 | IM camp flyer              | portfolio-wrapper1 | 傳單.png               | IMcamp
// 4 | Prolog website             | portfolio-wrapper2 | prolog.png             | Web
// 5 | IM camp T-shirt (white)    | portfolio-wrapper1 | 營服白.png             | IMcmap
// 6 | IM camp T-shirt (blue)     | portfolio-wrapper1 | 營服.png               | IMcmap
// 7 | Run Chimei logo            | portfolio-wrapper1 | 路跑.png               | Logo
// 8 | NTUCOS T-shirt             | portfolio-wrapper1 | chimeiclothes.png      | Logo
// 9 | Painting in Chimei photo 1 | portfolio-wrapper1 | painting1.jpg          | Paintings
// 10 | Painting in Chimei photo 2 | portfolio-wrapper1 | painting2.jpg          | Paintings
// 11 | Painting in Chimei photo 3 | portfolio-wrapper1 | painting3.jpg          | Paintings
// 12 | Painting in Chimei photo 4 | portfolio-wrapper1 | painting4.jpg          | Paintings
