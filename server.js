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
  id_number: "John",
  name: "John",
  time: 1700,
  phoneNumber: 4,
}, {
  id_number: "Randy",
  name: "Randy",
  time: 1730,
  phoneNumber: 6,
}, {
  id_number: "Megan",
  name: "Megan",
  time: 1800,
  phoneNumber: 2,
}, {
  id_number: "Tara",
  name: "Tara",
  time: 1830,
  phoneNumber: 8,
}, {
  id_number: "Tessa",
  name: "Tessa",
  time: 1900,
  phoneNumber: 3,
}];


//routing that sends user to AJAX
app.get("/", function(req,res)
  {
    res.sendFile(path.join(__dirname, "home.html"))
  });

  app.get("/tables", function(req, res) {

    res.sendfile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendfile(path.join(__dirname, "reserve.html"))

  });

  //json search
app.get("/api/:reservations?", function(req,res)
  {
    var party = req.params.reservations;
    if (party)
      {
        console.log(party);

        for (var i =0; i < reservations[i].length; i++)
        {
          if (party === reservations[i].routeName)
          {
            return res.json(reservations[i]);
          }
        }
        return res.json(false);
      }
      return res.json(reservations);

  });

//server Listening
app.listen(PORT, function ()
  {
      console.log("hi");
  })
