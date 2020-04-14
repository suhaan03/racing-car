class Game{

    constructor(){}


    getstate(){
        var d=database.ref('gs')
        d.on("value",function(data){
            gamestate=data.val()
        })
    }

    update(s){
        database.ref('/').update({gs:s})
    }
start(){
    if(gamestate==0){
        player=new Player()
        player.getCount()
        form=new Form()
        form.display()
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        cars=[car1,car2,car3,car4]
        car1.addImage("c1",img1)
        car2.addImage("c2",img2)
        car3.addImage("c3",img3)
        car4.addImage("c4",img4)
        car1.rotation=90
        car3.rotation=90
        car4.rotation=-90
        car1.scale=0.2
        car2.scale=0.25
        car3.scale=0.5
        



        
    }
}

play(){
    form.greeting.hide()
    textSize(30)
    text("gamestart",120,100)
    Player.getplayerinfo()
    player.getCarsatend()
    if(allplayers!==undefined){
      background(190,72,43)
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index=0
       var x,y
        for(var plr in allplayers){
          x=allplayers[plr].xd
            y=displayHeight-allplayers[plr].d
        cars[index].x = x
    cars[index].y = y
if(index+1==player.index){
    fill("red")
    ellipse(x,y,80,80)
    camera.position.x=displayWidth/2
    camera.position.y=cars[index].y
} 
index=index+1    
 }
    }

    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance+=50
        player.update()
    }
    if(keyIsDown(LEFT_ARROW)&&player.index!==null){
        player.xdistance-=50
        player.update()
    }
    if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
        player.xdistance+=50
        player.update()
    }
if(player.distance>3840&&gamestate==1){
    game.update(2)
    player.rank+=1
    Player.updateCarsatend(player.rank)
//gamestate=2
}
    drawSprites();
}

end(){
    console.log("Game over")
    console.log(player.rank)
}
}