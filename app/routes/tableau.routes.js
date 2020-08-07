module.exports = app => {
    const tableau = require("../controllers/tableau.controller.js");
  
    app.post("/tableau", tableau.create);
  
    app.get("/tableau", tableau.findAll);
  
    app.put("/tableau/:tableauId", tableau.update);
  
    app.delete("/tableau/:tableauId", tableau.delete);

  };