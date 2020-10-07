// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

//New Server
const app = express();
const PORT =  process.env.PORT || 3001;

var tables= [];
var waitList = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});

// Routes
// =============================================================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});
  
app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//Displays all characters
app.get("/api/tables", (req, res) => {
  return res.json(tables);
});

//Displays all characters
app.get("/api/waitlist", (req, res) => {
  return res.json(waitList);
});

// Basic route that sends the user first to the AJAX Page
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "view.html"));
// });

// app.get("/add", (req, res) => {
//   res.sendFile(path.join(__dirname, "add.html"));
// });

// Displays all characters
// app.get("/api/characters", (req, res) => {
//   return res.json(characters);
// });

// // Displays a single character, or returns false
// app.get("/api/characters/:character", (req, res) => {
//   const chosen = req.params.character;

//   console.log(chosen);

//   for (let i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
// app.post("/api/characters", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  // const newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });





