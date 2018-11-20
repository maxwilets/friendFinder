var path = require('path')

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    app.post("/api/friends", function(req, res) {
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body parsing middleware
      for (i = 0; i < frendsData.length; i ++){
          for (x = 0; x < frendsData[i].length; x ++){
            var total = frendsData[i]
            total += frendsData[i];
            var total1 = yourData[i]
            total1 += yourData[i];
            
          }
          if (total - total1 <= 3){
              friendFunction()
          }
      }
    });

    friendFunction = ()=>{}
  
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  
    app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      tableData.length = [];
      waitListData.length = [];
  
      res.json({ ok: true });
    });
  };
  