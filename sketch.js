
var rand;
var userPaddle, computerPaddle, computerScore, playerScore, gameState, ball,scoreSound, wall_hitSound, hitSound;
var touches=0;
var button2;

function setup() {
  
createCanvas(
  window.innerWidth-20,
    window.innerHeight-20
);
this.button=createButton('Start');
this.button1=createButton('Reset')
this.button2=createButton('DownButton')
this.button3=createButton('UpButton')

//create a user paddle sprite
userPaddle = createSprite(window.innerWidth-40,200,10,70);

//create a computer paddle sprite
computerPaddle = createSprite(10,200,10,70);

//create the pong ball
ball = createSprite(window.innerWidth/2,window.innerHeight/2,12,12);

computerScore = 0;
playerScore = 0;
gameState = "serve";
}

function draw() {  
  //fill the computer screen with white color
  background("white");
  edges = createEdgeSprites();
  //display Scores
  text(computerScore,window.innerWidth/2+80,20);
  text(playerScore, window.innerWidth/2-80,20);

  //rand=round(random(10,20));
  //console.log(rand);
  //draw dotted lines
  for (var i = 0; i < 6400; i+=20) {
     line(window.innerWidth/2,i,window.innerWidth/2,i+10);
  }

  
  


  //give velocity to the ball when the user presses play
  //assign random velocities later for fun
  this.button.position(displayWidth/2,displayHeight/2);
    this.button.visible=true;
    this.button1.position(displayWidth/2,displayHeight/2);
    this.button1.hide();
    this.button2.visible=0;
    this.button2.hide();
    this.button2.position(displayWidth/2,displayHeight/2);
    this.button3.visible=0;

    this.button3.hide();
    this.button3.position(displayWidth/2,displayHeight/2-50);
    this.button.mousePressed(()=>{

    ball.velocityX = 6;
    ball.velocityY = 6;
    gameState = "play";
 // }
 this.button.hide();
 
});  
  //make the userPaddle move with the mouse
  //userPaddle.y = World.mouseY;
  //if(mouseIsOver(canvas)){
    
  
  console.log(computerPaddle.y);
  //add AI to the computer paddle so that it always hits the ball
  if(touches<15){
  computerPaddle.y = ball.y;
  }
  else{
   computerPaddle.y=ball.y+50; 
  }
  if (gameState === "over") {
    text("Game Over!",window.innerWidth/2,160);
    this.button1.show();
  }

  
  this.button1.mousePressed(()=>{
    gameState = "serve";
    computerScore = 0;
    playerScore = 0;
   
 // }
 this.button1.hide();
 
});  
  //make the ball bounce off the user paddle
  if(ball.isTouching(userPaddle)){
    //hitSound.play();
    ball.x = ball.x - 5;
    ball.velocityX = -ball.velocityX;
  }
  if(gameState==="play"){
    this.button2.visible=true;
    this.button2.show();
    this.button3.visible=true;
    this.button3.show();

    this.button2.mousePressed(()=>{

    //  ball.x = ball.x+50;
      userPaddle.velocityY=8;
   // }
   
  });
  this.button3.mousePressed(()=>{

    //  ball.x = ball.x+50;
      userPaddle.velocityY=-8;
   // }
   
  });  

  }
  //make the ball bounce off the computer paddle
  if(ball.isTouching(computerPaddle)){
    //hitSound.play();
    ball.x = ball.x + 5;
    ball.velocityX = -ball.velocityX;
    touches++;
  }

  //place the ball back in the centre if it crosses the screen
  if(ball.x > window.innerWidth || ball.x < 0){
    //scoreSound.play();

  if (ball.x < 0) {
    rel();

    playerScore++;
      this.button.show();

      touches=0;  

    }
    else {
      computerScore++;
      userPaddle.y=window.innerHeight/2;
      userPaddle.velocityY=0;
      this.button.show();
//..      rel();
    touches=0;

  }

    ball.x = window.innerWidth/2;
    ball.y = window.innerHeight/2;
    ball.velocityX = 0;
    ball.velocityY = 0;
    gameState = "serve";

    if (computerScore=== 5 || playerScore === 5){
      gameState = "over";
    }
  }

  //make the ball bounce off the top and bottom walls
  if (ball.isTouching(edges[2]) || ball.isTouching(edges[3])) {
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    //wall_hitSound.play();
  }

  if (userPaddle.isTouching(edges[2]) || userPaddle.isTouching(edges[3])) {
    userPaddle.bounceOff(edges[2]);
    userPaddle.bounceOff(edges[3]);
    //wall_hitSound.play();
  }

  
  
    drawSprites();
}

function hide(){
  this.button.hide();
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
}

function show(){
  this.button.show();
  this.button1.show();
  this.button2.show();
  this.button3.show();
}

function rel(){
 console.log("si"); 
      
}