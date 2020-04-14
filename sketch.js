var playerCount=0
var gamestate=0
var game,form,player
var allplayers
var car1,car2,car3,car4
var cars=[]
var img1,img2,img3,img4
var track
var xpo=0



function setup(){
    createCanvas(displayWidth-20,displayHeight-100);
    database=firebase.database()
    game=new Game()
    game.getstate()
    game.start()
   
}

function draw(){
      if(playerCount==4){
          game.update(1)
      }  
     // game.getstate()
      if(gamestate==1){
          clear()
          game.play()
      }
      else
      if(gamestate==2){
          game.end()
      }

      console.log(gamestate)
    }


      function preload(){

img1=loadImage("car1.png")
img2=loadImage("car2.png")
img3=loadImage("car3.png")
img4=loadImage("car4.png")
track=loadImage("track.jpg")

      }

function updateXP(a){

database.ref('/').update({
    xp:a
})
player.xdistance=a
player.update()
}

async function retrieveXP(){
    var xpref=await database.ref('xp').once("value")
    if(xpref.exists()){
xpo=xpref.val()
    }
    xpo=xpo+200
    updateXP(xpo)
}