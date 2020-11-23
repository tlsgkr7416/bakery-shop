const { Router } = require('express');
const ctrl = require('./checkout.ctrl');
const router = Router();

router.get('/', ctrl.get_complete);

module.exports = router;