var path = require('path')
var people = require('../app/data/friends')
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

  app.post("/api/friends", function (req, res, compfunct) {

    people.push(req.body);
    value1 = req.body.values;
    friendCount = 0;
    matches = 0;
    var compatFriend = [];
    var scores1 = []


    for (i = people.length - 1; i > 0; i--) {
      var diffVal = 0
      if (value1[0] == people[i].looking) {
        compatFriend.push(people[i])
      }
     
    }
    for (i = 0; i < compatFriend.length; i++) {
      var diffVal = 0;
      for (x = 0; x < value1.length; x ++) {
        diffVal += (Math.abs(parseInt(compatFriend[i].scores[x] - parseInt(value1[x]))))
      }
      scores1.push(diffVal)

    }

    for(var i = 0; i < scores1.length; i ++){
      if(scores1[i] <= 3){
        matches = i
        return matches
      }

    }
    var match = compatFriend[matches]
    res.json(match)
   // people.push(req.body)
  })




}