let cvsWrapper = null;

let bgImg, baseImg, birdImgs, soundObjs, homeImg;
let bgScale, bgWidth, bgHeight;
let x_bg, x_bird, y_bird, x_real, y_real, vy, ay, triAng;
let flapcnt, tempcnt;
let mode, x_ready, y_ready;
let pipeL1, pipeL2, pipeL3, pipeU1, pipeU2, pipeU3;
const globalv = 3;
const pipeDistance = 250;
// const pipeGap = 60;
let randBg, randColor, randPipe;
let point = 0;

let randomheightL1, randomheightL2, randomheightU1, randomheightU2;


// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    // bgImg = loadImage("assets/sprites/background-day.png");

    bgImgs = ["day", "night"].map(
      time => loadImage(`assets/sprites/background-${time}.png`) );
    
    baseImg = loadImage("assets/sprites/base.png");

    birdImgs = ["blue", "red", "yellow"].map(
      color => ["upflap", "midflap", "downflap"].map(
        flap => loadImage(`assets/sprites/${color}bird-${flap}.png`)
      )
    );
     
    soundObjs = ["swoosh", "wing", "point","hit","die"].map(
      act => loadSound(`assets/audio/${act}.ogg`)   );

    homeImg = loadImage("assets/sprites/message.png");

    pipeImgs = ["green", "red"].map(
      color => ["lower", "upper"].map(
        place => loadImage(`assets/sprites/pipe-${color}-${place}.png`)
      )
    );
    
    gameOver = loadImage("assets/sprites/gameover.png");

    numImgs =  [...Array(10).keys()].map(
        point => loadImage(`assets/sprites/${point}.png`)
    );
}



function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");
    
    setBackground();
    setBird();
    setReady();
    setPipe();



    // setup code below

}

function draw() {
    // Render function (called per frame.)
    background(0);
    switch (mode) {
        case 0: // Ready
            drawBackground();
            drawReadyBird();
                 
            break;
        case 1: // Started
            drawBackground();
            push();
            drawPipe();
            drawMovingBird();
            pop();
            getStarted(); 
            checkHit(); 
            getPoints();  
            showScore();       
            break;
        case 2: // Losed
            drawBackground();
            lose();
            break;
    }

    

    
}
function keyPressed()
{
    if (keyCode === 32)
    {
        if (mode === 0)
        {
            mode = 1;
            vy = -3;
            triAng = -PI/4;
            soundObjs[1].play(); 
        }
        else if (mode === 1)
        {
            vy = -3;
            triAng = -PI/4;
            soundObjs[1].play();            
        }


    }
}

function setBackground()
{
    // background

    bgWidth = bgImgs[0].width;
    bgHeight = bgImgs[0].height;
    bsWidth = baseImg.width;
    bsHeight = baseImg.height;
    x_bg = 0;
    randBg = Math.floor(Math.random() * 10) % 2;
    point = 0;
    
}

function setReady()
{
    mode = 0;
    x_ready = width * 0.1;
    y_ready = height * 0.1;    
}


function setBird()
{
    // bird
    flapcnt = 0;
    tempcnt = 0;
    birdHeight = birdImgs[0][0].height * 1.5;
    birdWidth = birdImgs[0][0].width * 1.5;
    x_bird = width/2-birdWidth/2;
    y_bird = height/2-birdHeight/2;
    x_real = width/2-birdWidth/2;
    y_ready = height/2-birdHeight/2;
    vy = 0.7;
    ay = 9.8;
    triAng = 0;
    randColor = Math.floor(Math.random() * 100) % 3;

}
function setPipe() {
    // pipeL1 = new Pipe(width, 0.5*height, width * 0.15, height * 0.3);
    // pipeL2 = new Pipe(width + pipeDistance, 0.5*height, width * 0.15, height * 0.3);
    // pipeU1 = new Pipe(width, 0, width * 0.15, height * 0.3);
    // pipeU2 = new Pipe(width + pipeDistance, 0, width * 0.15, height * 0.3);
    randPipe = Math.floor(Math.random() * 100) % 2;
    
    randomheightL1 = Math.random() * 0.15 + 0.2;
    randomheightL2 = Math.random() * 0.1 + 0.25;
    randomheightL3 = Math.random() * 0.15 + 0.2;

    randomheightU1 = Math.random() * 0.15 + 0.2;
    randomheightU2 = Math.random() * 0.1 + 0.22;
    randomheightU3 = Math.random() * 0.1 + 0.23;

    pipeL1 = new Pipe(width, (0.8 - randomheightL1) * height, width * 0.15, height * randomheightL1);
    pipeL2 = new Pipe(width + pipeDistance, (0.8 - randomheightL2) * height, width * 0.15, height * randomheightL2);
    pipeL3 = new Pipe(width + 2 * pipeDistance, (0.8 - randomheightL3) * height, width * 0.15, height * randomheightL3);
    pipeU1 = new Pipe(width, 0, width * 0.15, height * randomheightU1);
    pipeU2 = new Pipe(width + pipeDistance, 0, width * 0.15, height * randomheightU2);   
    pipeU3 = new Pipe(width + 2 * pipeDistance, 0, width * 0.15, height * randomheightU3);   
    
}

function drawBackground()
{
    // background
    x_bg -= globalv;
    if(x_bg <  - width)
    {
        x_bg = 0;
    }
    
    image(bgImgs[randBg], x_bg, 0, width, height*0.8);
    image(bgImgs[randBg], x_bg+width, 0, width, height*0.8);

    image(baseImg, x_bg, height*0.8, width, height*0.2);
    image(baseImg, x_bg+width, height*0.8, width, height*0.2);

    image(homeImg, x_ready, y_ready, width * 0.8, height * 0.6);

    

}
function drawReadyBird()
{
    translate(x_bird,y_bird);
    tempcnt += 1;
    flapcnt = Math.floor((tempcnt)/4) % 3;
    image(birdImgs[randColor][flapcnt], 0, 0, birdWidth, birdHeight);     

}

function drawMovingBird()
{

    translate(x_bird,y_bird);
    vy += ay * 0.01;
    y_bird += vy;
    triAng += 0.01;
    rotate(triAng);
    tempcnt += 1;
    flapcnt = Math.floor((tempcnt)/4) % 3;
    image(birdImgs[randColor][flapcnt], 0, 0, birdWidth, birdHeight );        

}


function drawPipe() {

    // // ori: U: 0 - 3, L: 5 - 8
    // // pair: U: 0 ~ 2 - 3.5, L: 5 - 6 ~ 8   //L: y = 1 - (0.2h+x*h) = 0.8h - xh

    // pipeL1 = new Pipe(width, (0.8 - randomheightL1) * height, width * 0.15, height * randomheightL1);
    // pipeL2 = new Pipe(width + pipeDistance, (0.8 - randomheightL2) * height, width * 0.15, height * randomheightL2);
    // pipeU1 = new Pipe(width, 0, width * 0.15, height * randomheightU1);
    // pipeU2 = new Pipe(width + pipeDistance, 0, width * 0.15, height * randomheightU2);   
    
    // pipeL1 = new Pipe(width, 0.5*height, width * 0.15, height * 0.3);
    // pipeL2 = new Pipe(width + pipeDistance, 0.5*height, width * 0.15, height * 0.3);
    // pipeU1 = new Pipe(width, 0, width * 0.15, height * 0.3);
    // pipeU2 = new Pipe(width + pipeDistance, 0, width * 0.15, height * 0.3);
    
    image(pipeImgs[randPipe][0], pipeL1.x, pipeL1.y, pipeL1.w, pipeL1.h);
    pipeL1.move();
    pipeL1.reshow();


    image(pipeImgs[randPipe][0], pipeL2.x, pipeL2.y, pipeL2.w, pipeL2.h);
    pipeL2.move();
    pipeL2.reshow();

    image(pipeImgs[randPipe][0], pipeL3.x, pipeL3.y, pipeL3.w, pipeL3.h);
    pipeL3.move();
    pipeL3.reshow();

    image(pipeImgs[randPipe][1], pipeU1.x, pipeU1.y, pipeU1.w, pipeU1.h);
    pipeU1.move();
    pipeU1.reshow();

    image(pipeImgs[randPipe][1], pipeU2.x, pipeU2.y, pipeU2.w, pipeU2.h);
    pipeU2.move();
    pipeU2.reshow();

    image(pipeImgs[randPipe][1], pipeU3.x, pipeU3.y, pipeU3.w, pipeU3.h);
    pipeU3.move();
    pipeU3.reshow();


}
function getStarted()
{
    x_ready  = - 1000;  

}


function Pipe (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.reshow = function () {
        if(this.x < (-4.5) * this.w)
        {
            this.x = width;
        }
    }
    this.move = function () {
        this.x -= globalv;
    }

}
function checkHit()
{
    if( (x_bird+birdWidth >= pipeL1.x && x_bird <= pipeL1.x+pipeL1.w ) && ( (y_bird <= pipeU1.y + pipeU1.h)|| (y_bird+birdHeight >= pipeL1.y) ))
    {
        soundObjs[3].play();
        soundObjs[4].play();
        mode = 2;
    }

    if( (x_bird+birdWidth >= pipeL2.x && x_bird <= pipeL2.x+pipeL2.w ) && ( (y_bird <= pipeU2.y + pipeU2.h)|| (y_bird+birdHeight >= pipeL2.y) ))
    {

        soundObjs[3].play();
        soundObjs[4].play();
        mode = 2;
    }

    if( (x_bird+birdWidth >= pipeL3.x && x_bird <= pipeL3.x+pipeL3.w ) && ( (y_bird <= pipeU3.y + pipeU3.h)|| (y_bird+birdHeight >= pipeL3.y) ))
    {

        soundObjs[3].play();
        soundObjs[4].play();
        mode = 2;
    }

    if(y_bird <= 0 || y_bird >= 0.8 * height)
    {
        soundObjs[3].play();
        soundObjs[4].play();
        mode = 2;
    }    
    

}

function lose()
{
    image(gameOver, width/2 - gameOver.width/2 , height/2 - gameOver.height/2);
    showScore();
}

function getPoints()
{
    if( (x_bird >= pipeL1.x + pipeL1.w && x_bird <= pipeL1.x + pipeL1.w + 3) || (x_bird >= pipeL2.x + pipeL2.w && x_bird <= pipeL2.x + pipeL2.w + 3) )
    {
        soundObjs[2].play();
        point += 1;
    }   
}
function showScore()
{
    num1 = Math.floor(point/10);
    num2 = point%10;

    if(mode == 2)
    {
        image(numImgs[num1], width/2 - numImgs[num1].width * 1.5, height * 0.3, numImgs[num1].width *1.5, numImgs[num1].height * 1.5);
        image(numImgs[num2], width/2 , height * 0.3, numImgs[num1].width * 1.5, numImgs[num1].height * 1.5);       
    }
    else
    {
        image(numImgs[num1], width/2 - numImgs[num1].width/2, height * 0.1);
        image(numImgs[num2], width/2 + numImgs[num1].width/2, height * 0.1);     
    }

}

