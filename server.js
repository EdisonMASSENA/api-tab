const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express()


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// function initial() {
//   User.create({
//     direction: "DSI",
//     mdp: 123456
//   });
 
//   User.create({
//     direction: "DJ",
//     mdp: 123456
//   });
  
// }

require("./app/routes/tableau.routes")(app);


app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
