var path = require('path')
var people = require('../app/friends')
module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(people);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    

    people.push(req.body);
    value1 = req.body.values;
    preference = parseInt(req.body.pref)
    friendCount = 0;
    matches = [];
    match = []
    var compatFriend = [];
    var scores1 = []

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
   // console.log(compatFriend)
    
    for (i = 0; i < compatFriend.length; i++) {
      var diffVal = 0;
      for (x = 1; x < value1.length; x ++) {
        diffVal += (Math.abs(parseInt(compatFriend[i].scores[x]) - parseInt(value1[x])))
       // console.log(compatFriend[i].scores[x])
      //  console.log(diffVal)
        
        
      }
      scores1.push(diffVal)

    }
    console.log(scores1)
    for(var i = 0; i < scores1.length; i ++){
      if(scores1[i] <= 10){
        matches.push(i)
       // return matches
        }
  }
    for(var i = 0; i < matches.length; i ++){
      match.push(compatFriend[matches[i]])
    }
    
    
   console.log(match)
    res.json(match)
   

   // return match
   // people.push(req.body)
  
})}