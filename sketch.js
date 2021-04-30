var player1, player1Img;
var player2, player2Img;
var database;
var gameState = 0;
var playerCount = 0;

var form;
var game;
var player;

var players;

var background1;

var allPlayers;
var score = 0;

var weapon1;

var weapon1Img;

var weapon1group;

var weapon1flag = 0;

var hitScore = 0;

var lifeImg;
var lifeone, lifetwo, lifethree;

var p2lifeone, p2lifetwo, p2lifethree;




function preload() {
  player1Img = loadImage("cleland.png");
  player2Img = loadImage("stybak.png")
  weapon1Img = loadImage("mrwep.png");
  background1 = loadImage("fighter game.png");

  lifeImg = loadImage("fighter game life image.png")
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
weapon1 = createSprite(0, 0 , 10, 10);

  weapon1group = new Group();
  
}
function draw() {
  background(background1);
  if(playerCount === 2) {
    game.update(1);
  }
  if(gameState === 1) {
 clear();
 game.play();
  }
  if(gameState === 2) {
    game.end();
  }
  //drawSprites();
}
