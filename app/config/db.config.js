module.exports = {
  
// dev
    HOST: "ec2-34-241-90-235.eu-west-1.compute.amazonaws.com",
    USER: "uedxiamllnnoph",
    PASSWORD: "90608e0cbf0503a9c2d3a88caecce3666fd5d57956987259f2c036e6f07916df",
    DB: "d9mv795rjb4dmu",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

// // prod
//     HOST: "ec2-52-209-171-51.eu-west-1.compute.amazonaws.com",
//     USER: "lmgwokhihrakkg",
//     PASSWORD: "6ae5d15b4d1845a56901f3db49cfb933e3768efe0d20947d3fb5c3e84869cf76",
//     DB: "de6gsk2p6gqq73",
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },

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