module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      direction: {
        type: Sequelize.STRING
      },
      mdp: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };