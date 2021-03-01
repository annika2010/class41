class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  
  getCarsAtTheEnd(){
    database.ref('carsAtTheEnd').on("value",(data)=>{
      this.rank = data.val();
    })
  }

  //static funtions are not linked to any specific object
  //They are common to all objects created using class
  
  static updateCarsAtTheEnd(rank){

    database.ref('/').update({
      carsAtTheEnd: rank
    })

  }

}
