module.exports = app => {
    const controller = require("../controller/upload.controller");
  
    app.post("/upload", controller.upload);

    app.get("/files", controller.getListFiles);
  
    app.get("/files/:name", controller.download);
    
  };