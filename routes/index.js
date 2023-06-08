const express= require ('express');
const router = express.Router();

const homeController = require('../controllers/main_controller');

// This function will be used to route users route to users.js as all routes will come to index.js first and from here everything will be redirected
router.get('/',  homeController.home);
router.get('/sensor-data',  homeController.sensorData);
router.post('/LEDcontrol', homeController.LEDcontrol);


// Exporting this to be available/use at main index.js file 
module.exports = router;  