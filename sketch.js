
var dog,happyDog,database,foodS,foodStock,dogimg,happyDogimg;

function preload()
{
  dogimg=loadImage('Dog.png');
  happyDogimg=loadImage('happydog.png');
	
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250);
  dog.addImage('dog',dogimg);

  database = firebase.database();

  foodStock=database.ref('food');
    foodStock.on('value',readStock);
  
}


function draw() {  

  background(255,255,255);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogimg)
  }


  drawSprites();
  //add styles here

  textSize(30);
  
  text('Note-press UP ARROW KEY to feed the dog',50,50);
  fill('white');
  stroke(5);  


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })

}

