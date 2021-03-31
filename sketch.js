//Create variables here

var dog, happyDog, database, foodS, foodStock, doggy;

function preload()
{
	//load images here
  happyDog = loadImage("images/dogimg1.png");
  doggy = loadImage("images/dogimg.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250, 250);
  dog.addImage(doggy);
  dog.scale = 0.25;
  
  
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);
  fill(255);
  text("press up arrow to feed the dog", 100, 20); 

  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(happyDog); }

  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {
  if(x<=0){ x=0; }else{ x=x-1; }
  database.ref('/').update({
    food:x
  })
}



