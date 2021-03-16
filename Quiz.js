class Quiz{
    constructor(){}
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",(data)=>{
            gameState = data.val()
            
        })
    }
   
    updateState(state){
      
        database.ref("/").update({
           gameState:state
           
        })
    }
    async start(){
       
            if(gameState === 0){
                contestant = new Contestant();
                var contestantCountRef = await database.ref('contestantCount').once("value");
                if(contestantCountRef.exists()){
                    contestantCount = contestantCountRef.val();
                    contestant.getCount();
                }
                question = new Question();
                question.display();
            }
            
        }
    
        play(){
        question.hide();
        background("yellow")
        fill(0) 
        textSize(34);
        text("Result of Quiz",340,50)
        text("...............",320,65)
        Contestant.getPlayerInfo()
        if(allContestant!==undefined ){
            
            var display_Ans =230
            fill("blue")
            textSize(20);
            text("NOTE:contestant who answer correct are highlighted in green color",130,230)
                       
            for(var plr in allContestant){
                
                var correctAns = "2";
                if(correctAns === allContestant[plr].answer)
                fill("Green")
                else
                fill("red")
                display_Ans+=30
                textSize(20)
                text(allContestant[plr].name+":" +allContestant[plr].answer,120,display_Ans)
            }
        }
       
    }

}