const sql = require("./db.js");

const Tab = function(tableau) {
  this.chef = tableau.chef;
  this.priorite = tableau.priorite;
  this.projet = tableau.projet;
  this.etat = tableau.etat;
  this.tendance = tableau.tendance;
  this.accompli = tableau.accompli;
  this.attention = tableau.attention;
  this.enCours = tableau.enCours;
};

Tab.create = (newTab, result) => {
  sql.query("INSERT INTO tableau SET ?", newTab, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created projet: ", { id: res.insertId, ...newTab });
    result(null, { id: res.insertId, ...newTab });
  });
};


Tab.getAll = result => {
  sql.query("SELECT * FROM tableau", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tableau: ", res);
    result(null, res);
  });
};

Tab.updateById = (id, tableau, result) => {
  sql.query(
    "UPDATE tableau SET chef=?, priorite=?, projet=?, etat=?, tendance=?, accompli=?, attention=?, enCours=?  WHERE id=?",
    [id, tableau.chef, tableau.priorite, tableau.projet, tableau.etat, tableau.tendance, 
        tableau.accompli, tableau.attention, tableau.enCours],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated projet: ", { id: id, ...tableau });
      result(null, { id: id, ...tableau });
    }
  );
};

Tab.remove = (id, result) => {
  sql.query("DELETE FROM tableau WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted projet with id: ", id);
    result(null, res);
  });
};


module.exports = Tab;
