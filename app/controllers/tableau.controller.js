const Tab = require("../models/tableau.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      const tableau = new Tab({
        chef: req.body.chef,
        priorite: req.body.priorite,
        projet: req.body.projet,
        etat: req.body.etat,
        tendance: req.body.tendance,
        accompli: req.body.accompli,
        attention: req.body.attention,
        enCours: req.body.enCours
      });
    
      Tab.create(tableau, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the projet."
          });
        else res.send(data);
      });
};

exports.findAll = (req, res) => {
    Tab.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving projets."
          });
        else res.send(data);
      });
};
  
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      Tab.updateById(
        req.params.tableauId,
        new Tab(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found projet with id ${req.params.tableauId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating projet with id " + req.params.tableauId
              });
            }
          } else res.send(data);
        }
      );
};

exports.delete = (req, res) => {
    Tab.remove(req.params.tableauId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found projet with id ${req.params.tableauId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete projet with id " + req.params.tableauId
            });
          }
        } else res.send({ message: `projet was deleted successfully!` });
      });
};
