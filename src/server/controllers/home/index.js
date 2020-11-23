const { Router } = require('express');
const ctrl = require('./home.ctrl');
const router = Router();

router.get('/', ctrl.get_user);

router.get('/products', ctrl.get_products);

module.exports = router;
