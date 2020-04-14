class Form{

    constructor(){
        this.title = createElement('h2')
        this.input=createInput("")
        this.button = createButton('Join')
        this.greeting = createElement('h3')
        this.reset=createButton('reset')


    }

    display(){

                this.title.html("Racing cars")
       this.title.position(130,0)
               this.input.position(130,160)
       this.reset.position(displayWidth-100,50)
       this.reset.mousePressed(()=>{
           game.update(0)
           player.updateCount(0)
           database.ref('players').remove()
           database.ref('/').update({
               xp:170,
               carsatend:0
           })
       })
               this.button.position(250,200)
        this.button.mousePressed(()=>{
           this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            retrieveXP()
            player.update()
            player.updateCount(playerCount)
           this.greeting.html("Welcome "+player.name)
            this.greeting.position(130,160)
        })
    }
}