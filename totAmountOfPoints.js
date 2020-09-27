function points(games) {
  const calculateScore = 
                game => {
                         let ar = game.split(":")
                         if (ar[0]===ar[1]){ return 1}
                         else {return (ar[0]>ar[1]) ? 3 : 0}
                        } 
  return games.reduce( (sum, game) => sum+= calculateScore(game), 0)
  
    
  
}
