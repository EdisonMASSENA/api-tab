module.exports = {
  
// dev
    HOST: "ec2-54-74-95-84.eu-west-1.compute.amazonaws.com",
    USER: "omsxhxsedvkbek",
    PASSWORD: "598d0da047b5702a1d62f090422bb3635213b35a3e2e8543c37928b622086020",
    DB: "dddm229af8d5cr",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

// prod
    // HOST: "ec2-52-209-171-51.eu-west-1.compute.amazonaws.com",
    // USER: "lmgwokhihrakkg",
    // PASSWORD: "6ae5d15b4d1845a56901f3db49cfb933e3768efe0d20947d3fb5c3e84869cf76",
    // DB: "de6gsk2p6gqq73",
    // dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // },

    // HOST: "localhost",
    // USER: "root",
    // PASSWORD: "root",
    // DB: "tabprojet",
    // dialect: "mysql",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // },

  };