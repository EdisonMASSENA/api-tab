const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Op = db.Sequelize.Op;

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
  // const username = req.query.username;
  // var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

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