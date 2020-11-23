const { Router } = require('express');
const ctrl = require('./cart.ctrl');
const router = Router();

router.post('/', ctrl.post_cart);
router.get('/', ctrl.get_cart);

module.exports = router;