class Contestant {
    constructor(){
      this.Index = null
      this.name = null
      this.answer = null

    }
  
    getCount(){
      var playerCountRef = database.ref('contestantCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('contestantCount').update({
        contestantCount: count
      });
    }
  
    update(){
      var playerIndex = "contestantCount" + this.Index;
      database.ref(playerIndex).set({
        "name": this.name,
        "answer": this.answer
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref("contestantCount")
      playerInfoRef.on("value", (data)=>{allPlayers.data.val})
    }
  }
  