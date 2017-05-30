var leftarrow; 
var rightarrow;
var door;
var milk; 
var left; 
var middle; 
var right; 
var insideprison;
var dooropen; 
var prison; 
var passcode;
var showarrow;
var mirrorok;
var downarrow;
var sidebar;
var showkey;
var keypickedup;
var inprisonroom;
var keyinhand;
var coverup;
var milktopview;
var brushpickedup;
var brushx;
var brushy;
var brushlocation;
var showbrush;
var brushinhand;
var seenscissors;
var cutx;
var cuty;
var cutlocation;
var nextviewcount;
var lock;
var showcut;
var scissorinhand;
var showmilk;
var back2;

function preload()
{
  rightarrow = loadImage('https://dl.dropboxusercontent.com/s/0cewepqb8rqmdrf/006739-3d-transparent-glass-icon-arrows-arrow-thick-right.png');

  leftarrow = loadImage('https://dl.dropboxusercontent.com/s/axy9jfr3tfcgq4w/006738-3d-transparent-glass-icon-arrows-arrow-thick-left.png?dl=0');

  dooropen = loadImage('https://dl.dropboxusercontent.com/s/zjtrwtzoplh11dy/opened%20door.png?dl=0')
  
  door = loadImage('https://dl.dropboxusercontent.com/s/euc05nx4hgbjjl7/milkkkk.png?dl=0');

  milk = loadImage('https://dl.dropboxusercontent.com/s/iu1h4vnt83qq15g/milk%20closeup%20photoshop.png?dl=0');
                   
  left = loadImage('https://dl.dropboxusercontent.com/s/9m7lgq83itqbj6o/milk%20photoshop%20perspective.png?dl=0');

  middle = loadImage('https://dl.dropboxusercontent.com/s/62kflej4u288et8/middle.png?dl=0');

  right = loadImage('https://dl.dropboxusercontent.com/s/86rctdicjfdlrdx/right.png?dl=0');
  
  prison = loadImage('https://dl.dropboxusercontent.com/s/tvst6fz51n5vlrx/prison.png?dl=0');

  insideprison = loadImage('https://dl.dropboxusercontent.com/s/zg1m54ic65xbv29/insideprison.png?dl=0');

  keya = loadImage('https://dl.dropboxusercontent.com/s/8miwttjwtjnz1s0/Key-PNG-Photos.png?dl=0')

  brusha = loadImage('https://dl.dropboxusercontent.com/s/5b388xuz9z6xumk/5517f3c8facf7ff407aaa7752c00e8a5-paintbrush-tool-by-vexels.png?dl=0')

  downarrow = loadImage('https://dl.dropboxusercontent.com/s/x9u5wwt7uwrz172/006739-3d-transparent-glass-icon-arrows-arrow-thick-right.png?dl=0')

  milktopview = loadImage('https://dl.dropboxusercontent.com/s/yyycm627840ylpb/milktopview.png?dl=0')

  coverup = loadImage('https://dl.dropboxusercontent.com/s/wnawz2lw3sbhyqa/coverup.png?dl=0')

  scissors = loadImage('https://dl.dropboxusercontent.com/s/p7n8yirmsm3tbb6/PNGPIX-COM-Scissors-PNG-Transparent-Image-1-1.png?dl=0')

  notez = loadImage('https://dl.dropboxusercontent.com/s/pgll31s6vh4lomx/10151236.png?dl=0')

}


function setup()
{
  createCanvas(800,600); 
  fill(255)
  nextviewcount = 0;
  //prisonroom();
  lock = false;
  passcode = "";
  showarrow = true;
  mirrorok = 0;
  showkey = true;
  keypickedup = false;
  inprisonroom = false;
  keyinhand = false;
  brushpickedup = false;
  brushlocation = 1;
  brushpickedup = false;
  showbrush = true
  seenscissors = false; 
  brushinhand = false;
  cutlocation = 1;
  showmilk = false;
  scissorinhand = false;
  notelocation = 0;
  back2 = 1;
}

function draw()
{
  background(255);
  noFill();
  stroke(0);
  rect(0,0,799,599);

  nextview();

  if (mouseX > 0 && mouseX < 100 && mouseY > 500 && mouseY < 600 && mouseIsPressed == true && lock == false)
  {
    nextviewcount = nextviewcount - 1;
    lock = true;
  }

  if (mouseX > 700 && mouseX < 800 && mouseY > 500 && mouseY < 600 && mouseIsPressed == true && lock == false)
  {
    nextviewcount = nextviewcount + 1;
    lock = true;
  }

  if (nextviewcount > 5)
  {
    nextviewcount = 0; 
  }

  if (nextviewcount < 0)
  {
    nextviewcount = 5;
  }
  if (showarrow == true) {
  image(rightarrow,700,500,100,100);
  image(leftarrow,0,500,100,100);
  }

  fill(255,0,0);

  text(mouseX,110,10);
  text(mouseY,110,20);

  sidebar();

}

function nextview()
{
  if(nextviewcount == 0)
  {
   canvas1();
  }
  else if(nextviewcount == 1)
  {
    canvas2();
  }
  else if(nextviewcount == 2)
  {
    canvas3();
  }
  else if(nextviewcount == 3)
  { 
    canvas4();
  }
  else if(nextviewcount == 4)
  {
    canvas5();
  }
  else if(nextviewcount == 5)
  {
    canvas6();
  }
}


function canvas1(){
  image(door,0,0,800,600);
  fill(255)
  text(passcode,180,180);
  if(mouseX > 175 && mouseX < 175+15 && mouseY > 195 && mouseY < 195+15 && mouseIsPressed && lock == false)
  {
    passcode = passcode + "1"
    lock = true;
  }
   if(mouseX > 175+15 && mouseX < 175+30 && mouseY > 195 && mouseY < 195+15 && mouseIsPressed && lock == false)
  {
    passcode = passcode + "2"
    lock = true;
  }
   if(mouseX > 175+30 && mouseX < 175+55 && mouseY > 195 && mouseY < 195+15 && mouseIsPressed && lock == false)
  {
    passcode = passcode + "3"
    lock = true;
  }
    if(mouseX > 175 && mouseX < 175+15 && mouseY > 195+15 && mouseY < 195+30 && mouseIsPressed && lock == false)
  {
    passcode = passcode + "4"
    lock = true;
  }
   if(mouseX > 175+15 && mouseX < 175+30 && mouseY > 195+15 && mouseY < 195+30 && mouseIsPressed && lock == false)
  {
    passcode = passcode + "5"
    lock = true;
  }
   if(mouseX > 175+30 && mouseX < 175+55 && mouseY > 195+15 && mouseY < 195+30 && mouseIsPressed && lock == false)
  {
    passcode = passcode + "6"
    lock = true;
  } 
  if(mouseX > 175 && mouseX < 175+15 && mouseY > 195+30 && mouseY < 195+55 && mouseIsPressed && lock == false)
  {
    passcode = passcode + "7"
    lock = true;
  }
   if(mouseX > 175+15 && mouseX < 175+30 && mouseY > 195+30 && mouseY < 195+55 && mouseIsPressed && lock == false)
  {
    passcode = passcode + "8"
    lock = true;
  }
   if(mouseX > 175+30 && mouseX < 175+55 && mouseY > 195+30 && mouseY < 195+55 && mouseIsPressed && lock == false)
  {
    passcode = passcode + "9"
    lock = true;
  }
   if(mouseX > 155 && mouseX < 170 && mouseY > 170 && mouseY < 185 && mouseIsPressed && lock == false)
  {
    passcode = ""
    lock = true;
  }

  if (passcode == "4396")
  {
    canvas7()
  }
}

function canvas2(){
  image(milk,0,0,800,600);
  if(mouseX > 0 && mouseX < 210 && mouseY > 90 && mouseY < 300 && mouseIsPressed == true && cutlocation == 3 && lock == false){
    scissorinhand = true

  }

  if(scissorinhand == true){
    image(scissors,mouseX-35,mouseY-30,90,70);
    showcut=false;
  }

  if(mouseX > 440 && mouseX < 520 && mouseY > 270 && mouseY < 310 && mouseIsPressed == true  && lock == false){
    showmilk = true;
  }
  if (showmilk == true){
  showarrow = false
  showcut = true;
  image(milktopview,0,0,800,600);
  image(notez,330,230,70,50)
  if (mouseX > 330 && mouseX < 410 && mouseY > 230 && mouseY < 280 && mouseIsPressed == true )
  
{
  notelocation = 1
}
  image(downarrow,400,500,100,100);
  if (mouseX > 400 && mouseX < 500 && mouseY > 500 && mouseY < 600 && mouseIsPressed == true && lock == false && notelocation == 1)
  {
    
    back2 = 2
  }

}

if (back2 == 2){
  showarrow = true
  image(milk,0,0,800,600);
}
}



function canvas3(){
  image(left,0,0,800,600);
  if(showkey == true && keypickedup == false){
    image(keya,330,300,35,17)
  }
  //if (mouseX > 340 && mouseX < 360 && mouseY > 290 && mouseY < 310){
      //cursor(HAND);
    //}
  if(mouseX > 340 && mouseX < 360 && mouseY > 290 && mouseY < 310 && mouseIsPressed == true){
      showkey = false;

    }
  fill(0);
  rect(330.6,300,26,20)
  }

function canvas4(){
   image(middle,0,0,800,600);
   if(mouseX > 0 && mouseX < 90 && mouseY > 10 && mouseY < 100 && mouseIsPressed == true){
      showkey = true; 
    }
     if(showkey == true && keypickedup == true){
    image(keya,mouseX,mouseY,35,17);
    keyinhand = true

  }
    if (mouseX > 350 && mouseX < 410 && mouseY > 295 && mouseY < 315 && mouseIsPressed == true && keypickedup == true && keyinhand == true){
      inprisonroom = true
      keyinhand = false

    }
    if (inprisonroom == true){
      prisonroom();
      showkey = false; 
    }
    
  }

function canvas5(){
   image(right,0,0,800,600);
  
   if (mouseX > 0 && mouseX < 90 && mouseY > 110 && mouseY < 200 ){
      showbrush = false;
      brushpickedup = true;
   }
   if (brushpickedup == true){
    image(brusha,mouseX,mouseY,80,80)
   }

    if(mouseX > 360 && mouseX < 510 && mouseY > 50 && mouseY < 310 && mouseIsPressed == true && brushpickedup == true){
      mirrorok = 1
      cursor(HAND);
    }

    if (mirrorok == 1){
      mirrorlight()
    }
    
  }

function canvas6(){
   image(prison,0,0,800,600);
  }

function canvas7(){
  image(dooropenz,0,0,800,600);
  showarrow = false;
  }

function prisonroom(){
  image(insideprison,0,0,800,600);
  showarrow = false;
  image(downarrow,400,500,100,100);
  if (mouseX > 370 && mouseX < 410 && mouseY > 385 && mouseY < 425 && mouseIsPressed == true && lock == false)
  {
    brushlocation = 2
  }
     if (brushlocation == 1)
  {
    brushx = 370;
    brushy = 385;
    image(brusha,brushx,brushy,40,40);
  }
  else if (brushlocation == 2)
  {
    image(brusha,brushx,brushy,40,40);

    brushx = brushx - 2;
    brushy = brushx + 4;

    if (brushx < 10 || brushy < 125)
    {
      brushx = 10;
      brushy = 125;
      brushlocation = 3;
    }
  }
  else if(brushlocation == 3)
  {
    brushx = 10;
    brushy = 110;
    image(brusha,brushx,brushy,80,80);
    showbrush=true;

  }

  image(coverup,370,407,38,15)
   if (mouseX > 400 && mouseX < 500 && mouseY > 500 && mouseY < 600 && mouseIsPressed == true && lock == false)
  {
    inprisonroom = false;
    showarrow = true;
  }  
  }

function mirrorlight(){
  background(255)
  showarrow = false;
  fill(0)
  //ellipse(mouseX,mouseY,50,50);
  image(brusha,mouseX-30,mouseY-10,50,50)
  image(downarrow,400,500,100,100);

  if (mouseX > 400 && mouseX < 500 && mouseY > 500 && mouseY < 600 && mouseIsPressed == true && lock == false)
  {
    mirrorok = 0
    showarrow = true;
    brushpickedup = false;
    showbrush = true;
  }  

  if(mouseX > 400 && mouseX < 500 && mouseY > 350 && mouseY < 425 && brushpickedup == true && cutlocation == 1 ){
    image(scissors,400,350,100,75)
    seenscissors=true
  }
  if(mouseX > 400 && mouseX < 500 && mouseY > 350 && mouseY < 425 && brushpickedup == true && mouseIsPressed == true && seenscissors==true){
    cutlocation = 2
  }
  if (cutlocation == 1)
  {
    cutx = 400;
    cuty = 350;
    //image(scissors,cutx,cuty,100,75);
  }
  else if (cutlocation == 2)
  {
    image(scissors,cutx,cuty,100,75);

    cutx = cutx - 3;
    cuty = cutx + 3;

    if (cutx < 0 || cuty < 210)
    {
      cutx = 0;
      cuty = 210;
      cutlocation = 3;
      showcut=true;
    }
  }
  else if(cutlocation == 3)
  {
    cutx = 0;
    cuty = 110;
    image(scissors,cutx,cuty,90,70);
    

  }

}


function sidebar()
{
  fill(255,255,255);
  rect(0,10,90,90);
  rect(0,110,90,90);
  rect(0,210,90,90);
  rect(0,310,90,90);
  rect(0,410,90,90);

  if (showkey == false)
  {
    image(keya,10,50,70,35)
    keypickedup = true
  }
  if(brushlocation == 3 && showbrush == true)
  {
    brushx = 10;
    brushy = 125;
    image(brusha,brushx,brushy,80,80);

  }

  if (cutlocation == 3 && showcut == true){
      cutx = 0;
    cuty = 210;
    image(scissors,cutx,cuty,90,70);

  

  }

if (notelocation == 1){
  image(notez,0, 320, 90, 63)
}

if (mouseX > 0 && mouseX < 100 && mouseY > 320 && mouseY < 390  ){
  image (notez,0, 0, 600, 420)
}
 

  
}

function mouseReleased()
{
  if (lock)
  {
    lock = false; 
  }


}











