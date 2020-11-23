const { Router } = require('express');
const router = Router();
const ctrl = require('./manager.ctrl')
const upload = require('../../middleware/multer');

router.post('/product', upload.array('picture'), ctrl.post_product);

module.exports = router;
