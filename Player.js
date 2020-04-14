class Player{

    constructor(){
        this.name=null
        this.distance=0
        this.index=null
        this.xdistance=0
        this.rank=0

    }

    update(){

        var playerindex="players/player"+this.index
        database.ref(playerindex).set({n:this.name,d:this.distance,xd:this.xdistance})

    }
    static getplayerinfo(){

        var playerinfo=database.ref('players')
        playerinfo.on("value",(data)=>{
            allplayers=data.val()
        })
    }
    updateCount(c){
        database.ref('/').update({pcount:c})
    }

    getCount(){
        var  barr =database.ref('pcount')
        barr.on("value",function(data){
            playerCount=data.val()
        })
    }

    getCarsatend(){
        database.ref('carsatend').on("value",(data)=>{
            this.rank=data.val()
            
        })
    }

    static updateCarsatend(a){
        database.ref('/').update({
carsatend:a
        })
    }
}

