

class Game{
  constructor() {
    this.ctx = document.getElementById('towerDefense').getContext('2d');
    this.creeps = [];
    // variables -=-=--=-
    let x = 0;
    let y = this.ctx.height / 2;
    var dx = 2;
    var dy = -2;
    
    let creepRadius = 10;
    
    
    setInterval(() => {
      this.draw();
    }, 100)
}

drawCreep() {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2); /* the ballradius letiable will make it easier to guarantee the same radius everytime */
  this.ctx.fillStyle = "red";
  this.ctx.fill();
  this.ctx.closePath();
}

draw() {
  let x = 0;
  // let y = this.ctx.height / 2;
  var dx = 2;
  this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);

  this.drawCreep()
  

  x += dx;
  }


}
