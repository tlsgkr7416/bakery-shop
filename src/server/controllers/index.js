const { Router } = require('express');
const router = Router();

router.use('/home', require('./home'));
router.use('/manager', require('./manager'));
router.use('/auth', require('./auth'));
router.use('/account', require('./account'));
router.use('/cart', require('./cart'));
router.use('/checkout', require('./checkout'));
router.use('/reply', require('./reply'));

module.exports = router;

