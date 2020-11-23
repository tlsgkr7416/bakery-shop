const express = require('express');
const passport = require('../../middleware/passport-local');
const router = express.Router();
const ctrl = require('./account.crtl');

router.post('/membership', ctrl.post_membership);

router.post('/login', passport.authenticate('local', {failureRedirect: 'account/fail'}), 
  ctrl.post_login
);

router.get('/fail', ctrl.get_fail);

module.exports = router;
