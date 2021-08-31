module.exports = app => {

  const upload = require("../middleware/upload");
  const uploadController = require("../controllers/upload.controller");


  app.post("/upload", upload.single("file"), uploadController.uploadFiles);

};