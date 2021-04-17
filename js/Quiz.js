class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("yellow")
    //write code to show a heading for showing the result of Quiz
     textSize(20)
     fill("red")
     text("result of the quiz",400,200)

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants!== undefined){
      console.log("if");
      fill("blue");
      textSize(20)
      text("NOTE: CONTESTANTS WHO ANSWERED CORRECT WILL BE HIGHLIGHTED IN GREEN COLOUR ",20,230)
      var ypos=260;
      for(var plr in allContestants){
        console.log("for");
        var correctAns="2";
        if(correctAns===allContestants[plr].answer)
        fill("green")
        else
        fill ("red")
        ypos=ypos+30
        textSize(20)
        text(allContestants[plr].name+":"+allContestants[plr].answer,200,ypos)
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
