const { Router } = require('express');
const router = Router();
const passport_facebook = require('../../middleware/passport-facebook');
const passport_kakao = require('../../middleware/passport-kakao');

router.get('/facebook', passport_facebook.authenticate('facebook'));

router.get('/facebook/callback',
    passport_facebook.authenticate('facebook',
          {
              successRedirect: 'http://localhost:3000/home',
              //failureRedirect: 'account/fail',
          }
      )
);

router.get('/kakao', passport_kakao.authenticate('kakao'));

router.get('/kakao/callback',
    passport_kakao.authenticate('kakao',{
          successRedirect: 'http://localhost:3000/home',
          //failureRedirect: 'account/fail',
      })
);

module.exports = router;
