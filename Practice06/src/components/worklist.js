import React, { Component } from 'react';
import cover from '../images/cover.png';
import impossible_website from '../images/impossible website.png';
import prolog from '../images/prolog.png';
import flyer from '../images/傳單.png';
import clothes_white from '../images/營服白.png';
import clothes_blue from '../images/營服.png'
import logo_run from '../images/路跑.png'
import clothes_run from '../images/chimeiclothes.png'
import painting1 from '../images/painting1.JPG';
import painting2 from '../images/painting2.JPG';
import painting3 from '../images/painting3.JPG';
import painting4 from '../images/painting4.jpg';

class Work extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <span title = {this.props.description} className = {this.props.className} > 
                <img src= {this.props.src} alt={this.props.description}></img>
            </span> 
        )
    }

};



let w1 = <Work src = {cover} description = 'NTUIM Camp notebook'  className = 'portfolio-wrapper1'/>
let w2 = <Work src = {impossible_website} description = 'NTUIM Camp website' className = 'portfolio-wrapper2'/>
let w3 = <Work src = {flyer} description = 'IM camp flyer' className = 'portfolio-wrapper1'/>
let w4 = <Work src = {prolog} description = 'Prolog website' className = 'portfolio-wrapper2'/>
let w5 = <Work src = {logo_run} description = 'Run Chimei Logo' className = 'portfolio-wrapper1'/>
let w6 = <Work src = {clothes_white} description = 'IM camp T-shirt (white)' className = 'portfolio-wrapper1'/>
let w7 = <Work src = {clothes_blue} description = 'IM camp T-shirt (blue) ' className = 'portfolio-wrapper1'/>
let w8 = <Work src = {clothes_run} description = 'NTUCOS T-shirt ' className = 'portfolio-wrapper1'/>
let w9 = <Work src = {painting1} description = 'Painting in Chimei photo 1' className = 'portfolio-wrapper1'/>
let w10 = <Work src = {painting2} description = 'Painting in Chimei photo 2' className = 'portfolio-wrapper1'/>
let w11 = <Work src = {painting3} description = 'Painting in Chimei photo 3' className = 'portfolio-wrapper1'/>
let w12 = <Work src = {painting4} description = 'Painting in Chimei photo 4' className = 'portfolio-wrapper1'/>

let workList = [w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12];


class WorkList extends Component {

    render(){
        return(
            <div>
                {workList}
            </div>

        )
    }

};

export default WorkList;