const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

var jwt = require("jsonwebtoken");


exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Direction inexistante." });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      if (req.body.password == user.password) {
        var passwordIsValid = true;
        res.status(200).send({
          id: user.id,
          username: user.username,
          accessToken: token
        });
      }

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mauvais mot de passe"
        });
      }

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.user = (req, res) => {

  User.findAll({ attributes: ['username'] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur s'est produite lors de la récupération des utilisateurs."
      });
    });
};

exports.create = (req, res) => {

  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur s'est produite lors de la création du projet."
      });
    });
};

exports.admin = (req, res) => {

  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur s'est produite lors de la récupération des utilisateurs."
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le user a été supprimé avec succès"
        });
      } else {
        res.send({
          message: `Suppresion impossible avec l'id=${id}.Elément manquant.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Suppresion impossible avec l'id=" + id
      });
    });
};

// User.create({
//   username: "Admin",
//   password: "123456"
// });