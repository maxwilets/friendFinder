var path = require('path')
var people = require('../data/friends')
module.exports = function (app) {
  
  // API GET Request
  app.get("/api/friends", function (req, res) {
    res.json(people);
  });


  // API POST Request
  app.post("/api/friends", function (req, res) {
    
   
    people.push(req.body);
    value1 = req.body.values;
    preference = parseInt(req.body.pref)
    friendCount = 0;
    var matches = [];
    var match = []
    var compatFriend = [];
    var scores1 = [];

     //this sorts out the people by what they are looking for
     //if man seeking woman it will match with woman seeking man etc
     //then puts them in an array compatFriend
    for (i = 0; i < people.length; i++) {
      
      if (preference === 1 &&  (people[i].looking === 2)) {
        compatFriend.push(people[i])
      }
      else if (preference ===2 && (people[i].looking ===1)){
        compatFriend.push(people[i])
      }
      else if (preference === 4|| preference === 3 && people[i].looking === preference){
        compatFriend.push(people[i])
      }
    
    }
    //compares the scores of the users' survey with the data
    //2 loops: one goes through each friend the other goes through scores
    // ex user q1 - data q1
    //then for each person it pushes the score in an array
    for (i = 0; i < compatFriend.length; i++) {
      var diffVal = 0;
      for (x = 1; x < value1.length; x ++) {
        diffVal += (Math.abs(parseInt(compatFriend[i].scores[x]) - parseInt(value1[x])))
         
      }
      scores1.push(diffVal)

    }
    //finds chooses less than 8 if they are less than 8 
    //puts them in a matches array 
    for(var i = 0; i < scores1.length; i ++){
      if(scores1[i] <= 8){
        matches.push(i)
       
        }     
  }
  //if no matches are compatible it does the default
  if (matches.length === 0){
    matches.push(0)
  }
  //uses the matches as an idex to pull from the compatFriends array
  for(var i = 0; i < matches.length; i ++){
      match.push(compatFriend[matches[i]])
    }
  
    res.json(match)
   
})}