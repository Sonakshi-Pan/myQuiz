class Contestant{
    constructor(){
        this.name = null
        this.index = null
        this.answer = 0
    }
      getCount(){
        var contestantCountRef = database.ref("contestantCount")
        contestantCountRef.on("value",(data)=>{
            contestantCount = data.val()
            
        })
    }
    update(){
        var contestantIndex="contestants/contestant"+this.index;
        database.ref(contestantIndex).set({
            name:this.name,
          answer:this.answer
        })
    }
    updateCount(count){
      
        database.ref("/").update({
           contestantCount:count
        })
    }
    static getPlayerInfo(){
        var contestantInfoRef = database.ref("contestants")
        contestantInfoRef.on("value",(data)=>{
            allContestant = data.val()
            
        })
    }

   
}