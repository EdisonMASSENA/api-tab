module.exports = (sequelize, Sequelize) => {

  const Tableau = sequelize.define("tableau", {
    chef: {
      type: Sequelize.STRING
    },
    direction: {
      type: Sequelize.STRING
    },
    priorite: {
      type: Sequelize.STRING
    },
    projet: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    mois: {
      type: Sequelize.STRING
    },
    annee: {
      type: Sequelize.STRING
    },
    etat: {
      type: Sequelize.STRING
    },
    tendance: {
      type: Sequelize.STRING
    },
    accompli: {
      type: Sequelize.STRING
    },
    attention: {
      type: Sequelize.STRING
    },
    encours: {
      type: Sequelize.STRING
    }},
  {
    timestamps: false
  });

  return Tableau;
};
