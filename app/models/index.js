const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.tableau = require("./tableau.js")(sequelize, Sequelize);
db.file = require("./file.model.js")(sequelize, Sequelize);

db.tableau.hasMany(db.file, { 
  as: "file",
  onDelete: "cascade",
  hooks: true,
});
db.file.belongsTo(db.tableau, {
  as: "tableau",
  foreignKey: "tableauId",
  onDelete: "cascade",
  hooks: true,
});

module.exports = db;



