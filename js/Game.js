class Game {
    constructor () {

    }

    getState () {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data){
            gameState = data.val();
        });


  
    }
    update (state) {
        database.ref('/').update({
            gameState : state
        })

        
    }
    async start () {
      
        if(gameState === 0) {
            player = new Player ();

            var playerCountRef = await database.ref('playerCount').once("value");
    
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            
            form = new Form ()
            form.display();   
        }
       player1 = createSprite(200, 500, ) ;
       player1.addImage(player1Img);
       player1.shapeColor = "blue";

       player2 = createSprite(800,500) ;
       player2.addImage(player2Img);
       player2.scale = 1.7;
       player2.shapeColor = "red";
    lifeone = createSprite(100, 100, 10, 10);
    lifetwo = createSprite(200, 100, 10, 10);
    lifethree = createSprite(300, 100, 10, 10);

    p2lifeone = createSprite(1000, 100, 10, 10);
    p2lifetwo = createSprite(1100, 100, 10, 10);
    p2lifethree = createSprite(1200, 100, 10, 10);

       players = [player1, player2];
    }

    play () {
        form.hide();
        Player.getPlayerInfo();
        var x = 100;
        var y = 200;
        var index = 0;
        drawSprites();
      for (var plr in allPlayers )  {
          index = index + 1; 
          x = 500 - allPlayers[plr].distance
          y = 500 - allPlayers[plr].yDistance
if(index - 1 === 0) {
    players[index - 1].x = x
    fill("black");
              textSize(25);
              text(allPlayers[plr].name, x - 25, y + 60)
}
else {
    players[index - 1].x = x + 1000
    fill("black");
              textSize(25);
              text(allPlayers[plr].name, x + 925, y + 53)  
}
          
          players[index - 1].y = y
      } 
      if(keyIsDown(RIGHT_ARROW) && player.index !== null)  {
          player.distance -= 10
          player.update();
        
      }
      if(keyIsDown(LEFT_ARROW) && player.index !== null)  {
        player.distance += 10
        player.update();
    }
    if(keyIsDown(UP_ARROW) && player.index !== null)  {
        player.yDistance += 10
        player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null)  {
        player.yDistance -= 10
        player.update();
    }
    if(keyDown("4")) {
        game.hit();
    }
   
    
    if (player2.isTouching(weapon1group)) {
player2.shapeColor = "green";
player1.score = player1.score + 1;
textSize(100)
        text("Game Over", 500, 200);
console.log(player1.score);

    }
    if(hitScore > 3) {
        textSize(100)
        text("Game Over", 500, 200);
    }
    }
    hit() {
     var x1 = 500 - allPlayers.player1.distance
     var y1 = 500 - allPlayers.player1.yDistance
    if(weapon1.x > displayWidth) {
        weapon1flag = 0;
        weapon1.destroy();
        weapon1Group.destroyEach();
    }
    if(weapon1flag === 0) {
        weapon1 = createSprite(x1, y1, 20, 20);
        weapon1.addImage(weapon1Img);
        weapon1.shapeColor = "orange";
        weapon1.velocityX = 6;
        weapon1.lifetime = 500;
        weapon1group.add(weapon1);
        console.log(weapon1.x);
        weapon1flag = 1;
    }
     
     //if(weapon1.x > 100) {
       // weapon1flag = 0;
   // }
    }
}