// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require('cors');
// const app = express()
// const db = require("./app/models");


// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// db.sequelize.sync()


// require('./app/routes/auth.routes')(app);

// require("./app/routes/tableau.routes")(app);


// app.listen(3000, () => {
//   console.log("Server is running on port 3000.");
// });


const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const db = require('./app/models');
const path = require('path');
const app = express();

var distDir = __dirname + "/dist/";
app.use(express.static(__dirname + '/public'));
app.use(express.static(distDir));

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));



db.sequelize.sync()


require('./app/routes/auth.routes')(app);

require("./app/routes/tableau.routes")(app);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js,Express, and Postgres API' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });


