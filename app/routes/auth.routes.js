const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post("/api/auth/signin", controller.signin);

  app.get("/api/auth/user", controller.user);

  app.post("/api/auth/admin", controller.create);

  app.get("/api/auth/admin", controller.admin);

  app.delete("/api/auth/admin/:id", controller.delete);

};
