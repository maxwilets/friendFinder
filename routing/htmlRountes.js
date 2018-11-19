  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  module.exports = (app) => {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/suvrvey.html"));
  });

 
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};