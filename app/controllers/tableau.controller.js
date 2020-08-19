const db = require("../models");
const Tableau = db.tableau;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const tableau = {
    chef: req.body.chef,
    direction: req.body.direction,
    priorite: req.body.priorite, 
    projet: req.body.projet, 
    etat: req.body.etat, 
    tendance: req.body.tendance, 
    accompli: req.body.accompli, 
    attention: req.body.attention, 
    enCours: req.body.enCours
  };

  Tableau.create(tableau)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.findAll = (req, res) => {
    const projet = req.query.projet;
    var condition = projet ? { projet: { [Op.like]: `%${projet}%` } } : null;
  
    Tableau.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Tableau.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tableau was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tableau with id=${id}. Maybe Tableau was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tableau with id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Tableau.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tableau was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tableau with id=${id}. Maybe Tableau was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tableau with id=" + id
        });
      });
};

