var express = require('express');
var router = express.Router();
const WebController=require('../Controllers/WebController');
/* GET home page. */
router.get('/',WebController.getPicture);
//  router.get('/msclone',WebController.getPicture);
module.exports = router;
