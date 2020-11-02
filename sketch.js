var dog,dogImg,dog2,dog3;
var database,value;
var foods;
var feed;
var milk;
var br,death,dvac,set,garden,ingection,lazy,hall,right,left,vacc,wash;
var week = 0;
var vac;

function preload(){
dogImg = loadImage("Dog.png");
dog2 = loadImage("happydog.png");
dog3 = loadImage("cry.png");
milk = loadImage("milk.png");
br = loadImage("Bed Room.png");
death = loadImage("deadDog.png");
dvac = loadImage("dogVaccination.png");
set = loadImage("Food Stock.png");
garden = loadImage("Garden.png");
ingection = loadImage("injection.png");
lazy = loadImage("Lazy.png");
hall = loadImage("Living Room.png");
right = loadImage("running.png");
left = loadImage("runningLeft.png");
vacc = loadImage("Vaccination.jpg");
wash = loadImage("Wash Room.png");
}
	

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(1200,800);

  feed = createButton('feed dog');
  feed.position(750,90);

  for(var i=50;i<500;i=i+50){
    foods = createSprite(i,500);
    foods.addImage(milk);
    foods.scale=0.15;
  }
 
  vacc = createSprite(125,125);
  vacc.addImage(dvac);
  vacc.scale=0.5;

  dog=createSprite(750,250,20,20);
  dog.scale = 0.2;
  dog.addImage(dogImg);

  var Food = database.ref('food/value');
   Food.on("value",readStock);
}


function draw() {  
background(46,139,87);

fill("white");


if(feed.mousePressed()){
  dog.addImage(dog2);
  dog.scale = 0.2;
  
}
textSize(30);
text("week : "+week,500,500);


if(frameCount%100===0){
  week = week+1;
}

if(week>5 && week<9){
   text("time to give Vaccine to dog",250,750);
   dog.addImage(vacc);
}




  drawSprites();
  
}


//Function to read values from DB
 function readStock(data){
    food=data.val();
   }
    //Function to write values in DB
 function writeStock(x){
    if(x<=0){ 
      x=0;
     }
     else{
        x=x-1;
       } 
       database.ref('/').update({
          food:x 
        }) }