let defenders = {};

class Game {
  constructor() {
    this.ctx = document.getElementById('towerDefense').getContext('2d');
    this.obstacles = [];
    this.towers = []
    // this.PlayerHP = Number(document.getElementById("playerHP").innerHTML);
    this.PlayerHP = 10
    document.getElementById("playerHP").innerHTML = this.PlayerHP;
    this.PlayerMoney = 100;


    // -=-==-=-=-=-=-=FPS ENGINE HERE=-=-=-=-=-=-=-
    setInterval(() => {
      this.ctx.clearRect(0, 0, 799, 800);
      // if(this.ctx.clearRect(0,0,799,800) === true){
      //   console.log("WOW")
      // }
// -=-=-=-=-=-SPAWN 10 CREEPS PER WAVE CODE BELOW-=-=-=-=-=
      if (this.obstacles.length < 10) {
        this.spawnCreep();
      }

      
      // this.checkForTD()
      this.drawEverything();

      // this.checkForGame();
    }, 100)
  }

  checkForEndGame(){

    if(this.PlayerHP < 0){
      alert("you lose!!")
    }
    

    
  }

  spawnCreep() {
    this.towers.push(new Tower());
    let rando = Math.floor(Math.random() * 30)
    if (rando === 5) {
      this.obstacles.push(new Creep())
    }
  }
  //   if()
  // }

  drawEverything() {
    this.towers[0].draw();
   
    this.obstacles.forEach((obstacle) => {
      if(obstacle.x > 796){
        console.log(this.PlayerHP--)
        
        return true
      }
      if(obstacle.x < 796){
        obstacle.draw();
      }
      });
      
    }
  }
// tower class -=-=-=-=-=-=

class Tower {
  constructor(damage, range, rateOfFire, price) {

    

    this.damage = 15;
    this.range = 20 /* sqft? pixels? canvas units? */;
    this.rateOfFire = 1 /*shot per second */;
    this.price = 25;
    this.kills = 0;

    // tower position =-=-=-=-
    this.ctx = document.getElementById('towerDefense').getContext('2d');

    this.x = 50;
    this.y = 450;
    this.width = 40;
    this.height = 40;
    
  }

  // attack() {
  //   let creep = creep[0];
  //   if(creep.position < this.range){
  //     // the process of taking damage will be creepInRange = creep.health - this.damage -> creep.health = creepInRange
  //     let creepInRange = creep.health - this.damage;
  //     creepInRange = creep.health;
  //   }
  //   return this.damage;
  // }

  shoot(creeps) {
  let creep = creeps[0];
  let _hp = creep.hp;
  let turret = this;

  if ((creep.hp -= this.damage) <= 0 && _hp > 0) {
    this.kills++;
  }
}

  // if (turret.levels.full && Math.rand(9) === 0) {
  //   var start = game.map[0];
  //   creep.x = start.x;
  //   creep.y = start.y;
  //   creep.nextpoint = 0;
  // }

  
    draw() {
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(100, this.y, this.width, this.height);
      this.ctx.fillRect(200, 300, this.width, this.height);
      this.ctx.fillRect(300, this.y, this.width, this.height);
      this.ctx.fillRect(400, 300, this.width, this.height);
      this.ctx.fillRect(500, this.y, this.width, this.height);
      this.ctx.fillRect(600, 300, this.width, this.height);
      // this.ctx.beginPath();
      // this.ctx.arc(100, this.y, 18, 0, 2 * Math.PI);
      
      // this.ctx.arc(200,300, 18, 0, 2 * Math.PI);
      // this.ctx.arc(300,this.y, 18, 0, 2 * Math.PI);
      // this.ctx.arc(400,300, 18, 0, 2 * Math.PI);
      // this.ctx.arc(500,this.y, 18, 0, 2 * Math.PI);
      // this.ctx.arc(600,300, 18, 0, 2 * Math.PI);

      // this.ctx.fillStyle = "white"
      // this.ctx.fill();

      // this.ctx.lineCap = "round";
      // this.ctx.lineWidth = 2;
      // this.ctx.strokeStyle = "white";
      // this.ctx.beginPath();
      // this.ctx.moveTo(turret.x, turret.y);
      // this.ctx.lineTo(creep.x, creep.y);
      // this.ctx.stroke();
      // for (let i = 0; i < this.towers.length; i++) {
        // if(this.towers[i]){}
        
      // }
    }
}






// -=-=-=-=-=-=-=-=-=-=-=-=-CREEPS=-=-=-=-=-=-=-=-=-=-==-=-
class Creep {
  constructor() {
    this.ctx = document.getElementById('towerDefense').getContext('2d');
    
    this.x = 0
    this.y = 380;
    this.width = 25;
    this.height = 25;
    this.moveToEnd();
    // this.touchDown();

  }
  // touchDown(){
  //   console.log(this.width)
  //   if(this.x+this.y == this.ctx.width){
  //     console.log("hello")
  //     playerHP --
  //   }
  // }
  
  draw() {
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // THIS.X MUST STOP AT 795, SO WHEN IT STOPS, PLAYER LOSE A LIFE AND THE GAME STOPS DRAWING THAT CREEP ->
    //  HOW TO MAKE IT STOP DRAWING? WHEN IT STOPS, PLAYERMONEY += 25; 
    if(this.x > 795){
      this.x = 797
      console.log(this + "reached the final point")  
    }
  }
  
  
  moveToEnd() {
    if(this.x < 500){
    setInterval(() => {
      this.x += 6;
    }, 100)
    }
    // console.log(this.x)
    if (this.x > 500) {
      console.log("hello")
      
    }
  }
  
  
}

// =-=-=-=-=-=-=-=-=-=- player status -=-=-=-=-==


// if(playerHealth < 0){
  //   console.log("Game over")
  // }
  // let playerHealth = 10;
  // let playerMoney = 100;
  // class CreepLvl1 extends Creep{
    //   constructor(name,health,speed){
      //     super(health,speed)
      //     this.name = name;
      //   }
      
      // }
      
      
      
      // -=-=-=-=-=-=-=Canvas -=-=-=-=
      
      // let background = new Image();
      // console.log(background)
      
      // // Make sure the image is loaded first otherwise nothing will draw.
      // background.onload = function () {
        //   ctx.drawImage(background, 0, 0);
        //   background.src = "./images/Maps/dash.png";
        // }
        // PATH IN A 800X800 CANVAS ---- CREEPS SHOULD GO THROUGH IT---
        
        // class Canvas{
          //   constructor(){
            //     console.log("hello")
            //     this.ctx = document.getElementById("towerDefense").getContext("2d");
            //   }
            
            //   drawMap(){
              
              //     this.ctx.lineWidth = 20;
              //     this.ctx.strokeStyle = "#000"
              //     // this.ctx.lineHeight = 0;
              
              //     this.ctx.beginPath();
              //     this.ctx.moveTo(0, 0);
              //     this.ctx.lineTo(0, 200);
              //     this.ctx.lineTo(400, 200);
              //     this.ctx.lineTo(400, 400);
              //     this.ctx.lineTo(600, 400);
              //     this.ctx.lineTo(600, 0);
              //   }
              
              
              //   CreepMinion(width, height, color, x, y) {
                //   this.width = width;
                //   this.height = height;
                //   this.x = x;
                //   this.y = y;
                //   ctx = myGameArea.context;
                //   ctx.fillStyle = color;
                //   ctx.fillRect(this.x, this.y, this.width, this.height);
                // }
                
                //   }
                
                
                // class TowerLvl1 extends Tower {
                //   constructor(name, damage, range, rateOfFire, price) {
                //     super(damage, range, rateOfFire, price)
                //     this.name = name
                //   }
                
                // }
                // =-=-=-=-=-=-=-=-=-=-=-=-CREEP CLASS -=-=-=-=-=-=-=-=-=-=
                // class Creep{
                //   constructor(health,speed,money){
                //     this.health = health;
                //     this.speed = speed;
                //     this.money = money;
                
                //   }this.