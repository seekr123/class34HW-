var dog,dogIMG,happydogIMG;
var database,foodS;

function preload()
{
  dogIMG=loadImage('images/dogImg.png');
  happydogIMG=loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250, 250, 10,10);
  dog.addImage(dogIMG);
  dog.scale=0.2;
  
  
  database=firebase.database();
  var foodstock=database.ref('Food');
  foodstock.on('value',readStock);


}


function draw() {  

  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogIMG);
  }

  drawSprites();
  fill (138,46,98);
  stroke (4);
  text ('food left : '+foodS,100,200)
  textSize (14);
  text('Tip: press the up arrow to feed Rex',20,30)
  //add styles here

}

function readStock(data){
  foodS=data.val();
  console.log(foodS)
}
function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }

  database.ref('/').set({
    Food:x
  })
  
}



