const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express()
const db = require("./app/models");
const Role = db.role;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


db.sequelize.sync()


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

require("./app/routes/tableau.routes")(app);


app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
