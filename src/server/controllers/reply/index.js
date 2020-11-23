const { Router } = require('express');
const { get_products } = require('../home/home.ctrl');
const router = Router();
const ctrl = require('./reply.ctrl')

router.post('/', ctrl.post_reply);
router.get('/', ctrl.get_reply);
router.delete('/', ctrl.delete_reply);

module.exports = router;