//dependencies

var express = require("express");
var  bodyParser = require("body-parser");
var path = require("path");

// express yo self

var app = express();
var PORT = process.env.PORT || 3000;

//express app to handle the data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api"}));

// Current Reservations (DATA)
var reservations = [{
  routeName: "John",
  name: "John",
  time: 1700,
  numberInParty: 4,
  specialOccasion: "birthday"
}, {
  routeName: "Randy",
  name: "Randy",
  time: 1730,
  numberInParty: 6,
  specialOccasion: "none"
}, {
  routeName: "Megan",
  name: "Megan",
  time: 1800,
  numberInParty: 2,
  specialOccasion: "anniversary"
}, {
  routeName: "Tara",
  name: "Tara",
  time: 1830,
  numberInParty: 8,
  specialOccasion: "none"
}, {
  routeName: "Tessa",
  name: "Tessa",
  time: 1900,
  numberInParty: 3,
  specialOccasion: "birthday"
}];


//routing that sends user to AJAX
app.get("/", function(req,res)
  {
    res.sendFile(path.join(__dirname, "home.html"))
  });

  app.get("/tables", function(req, res) {
    res.sendfile(path.join(__dirname, "tables.html"))
  });

  app.get("/reserve", function(req, res) {
    res.sendfile(path,join(__dirname, "reserve.html"))
  });

  //json search
app.get("/api/:reservations?", function(req,res)
  {
    var party = req.params.reservations;
    if (party)
      {
        console.log(party);
      }
  })


//server Listening
app.listen(PORT, function ()
  {
      console.log("hi");
  })
