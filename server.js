const express = require("express");
const cors = require("cors");


const db = require('./app/models');
const app = express();
var distDir = __dirname + "/dist/";

global.__basedir = __dirname;

app.use(express.static(__dirname + '/public'));
app.use(express.static(distDir));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


require('./app/routes/auth.routes')(app);
require('./app/routes/upload.routes')(app);
require("./app/routes/tableau.routes")(app);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


