
var pen
var penposition


function setup() {
  database=firebase.database();
  console.log(database)

  
  pen = createSprite(200,200, 10,10)
  
  pen.shapeColor = "black";
  strokeWeight=4
  var penposition=database.ref('pen/position');
  penposition.on('value',readPosition, showError);
  
  
  

}

function draw() {
 // background(250,240,0); 
  pen.position.x=World.mouseX
  pen.position.y=World.mouseY
  console.log(pen.position.x)
 
  drawSprites();
}

function changePosition(x,y){
  database.ref('pen/position').set({
      'x':position.x+x,
      'y':position.y+y
  })
}

function readPosition (data){
  position=data.val();
  console.log(position.x);
  pen.x=position.x;
  pen.y=position.y;

}
function showError(){
  console.log("error");
}

