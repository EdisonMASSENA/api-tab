

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


