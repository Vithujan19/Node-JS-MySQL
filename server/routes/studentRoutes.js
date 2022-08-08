const express =  require('express');
const router = express.Router();
const studentController = require('../controllers/studentControllers.js');

//view details
router.get("/", studentController.view);

//add details
router.get("/adduser", studentController.adduser);
router.post("/adduser", studentController.save);

//Update details
router.get("/edituser/:id", studentController.edituser);
router.post("/edituser/:id", studentController.edit);

//delete
router.get("/deleteuser/:id", studentController.delete);

module.exports = router;