import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MyWork, Bar, Contact} from './App';
import * as serviceWorker from './serviceWorker';

class Work 
{
    constructor(filePath, description, className) 
    {
      this.filePath = filePath;
      this.description = description;
      this.className = className;
    }
};

let w1 = new Work('images/cover.png','NTUIM Camp notebook', 'portfolio-wrapper1');
let w2 = new Work('images/impossible website.png','NTUIM Camp website','portfolio-wrapper2');
let w3 = new Work('images/prolog.png','Prolog website ','portfolio-wrapper2');
let w4 = new Work('images/傳單.png','IM camp flyer','portfolio-wrapper1');
let w5 = new Work('images/營服白.png ','Prolog website','portfolio-wrapper1');
let w6 = new Work('images/營服.png','IM camp T-shirt (white)','portfolio-wrapper1');
let w7 = new Work('images/路跑.png','IM camp T-shirt (blue) ','portfolio-wrapper1');
let w8 = new Work('images/chimeiclothes.png','NTUCOS T-shirt ','portfolio-wrapper1');
let w9 = new Work('images/painting1.jpg','Painting in Chimei photo 1','portfolio-wrapper1');
let w10 = new Work('images/painting2.jpg','Painting in Chimei photo 2','portfolio-wrapper1');
let w11 = new Work('images/painting3.jpg','Painting in Chimei photo 3','portfolio-wrapper1');
let w12 = new Work('images/painting4.jpg','Painting in Chimei photo 4','portfolio-wrapper1');


let workList = [w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12];
ReactDOM.render(<MyWork workList = {workList} />, 
                 document.getElementById('works'));

let barList = ['All', 'IMcamp', 'Web', 'Logo', 'Paintings', 'Others'];

ReactDOM.render(<Bar choices = {barList} />, 
                 document.getElementById('bar'));

class ContactInfo
{
    constructor(icon, link, text) 
    {
        this.icon = icon;
        this.link = link;
        this.text = text;
    }
};

let fb = new ContactInfo("fab fa-facebook-square","https://www.facebook.com/yichin0226", "黃意芹");
let ig = new ContactInfo("fab fa-instagram","https://www.instagram.com/celery_26/", "celery_26");
let mail = new ContactInfo("far fa-envelope","b05705001@ntu.edu.tw","b05705001@ntu.edu.tw");

let contactList = [ ig, mail];

ReactDOM.render(<Contact info = {contactList} />, 
    document.getElementById('contact'));

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
