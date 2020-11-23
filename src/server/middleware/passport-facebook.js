const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;  //strategey 없애보기
const models = require('../models');
const dotenv = require('dotenv');

dotenv.config();

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use('facebook', new FacebookStrategy({
    clientID: process.env.FACEBOOK_APPID,
    clientSecret: process.env.FACEBOOK_SECRETCODE,
    callbackURL: `${process.env.SITE_DOMAIN}/auth/facebook/callback`,
    profileFields: ['id', 'displayName', 'email'],
}, async(accessToken, refreshToken, profile, done) => {
    
    try{
        const id = `fb_${profile.id}`;
        const exist = await models.Users.count({
            where: {
                id,
            }
        });
        
        let user;
        if (!exist) {
            user = await models.Users.create({
                id,
                name: profile.displayName,
                password: 'facebook',
            });
            
            await user.createCart({});
        } else {
            user = await models.Users.findOne({
                where: {
                    id,
                }
            });
        }
        return done(null, user);
    }catch(error) {
        console.log(error);
    }
}
));

module.exports = passport;
