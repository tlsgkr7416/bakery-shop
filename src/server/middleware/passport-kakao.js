const passport = require('passport');
const models = require('../models');
const dotenv = require('dotenv');
const KakaoStrategy = require('passport-kakao').Strategy;

dotenv.config();

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use('kakao', new KakaoStrategy({
    clientID: process.env.KAKAO_API_KEY,
    callbackURL: 'http://localhost:3001/auth/kakao/callback',
}, async(accessToken, refreshToken, profile, done) => {
    console.log(profile);
    try{
        const id = `kakao_${profile.id}`;
        const exist = await models.Users.count({
            where: {
                id,
            }
        });
        let user;

        if (!exist) {
            user = await models.Users.create({
                id,
                name:profile.displayName,
                passport: 'kakao',
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
    }catch (error) {
        console.log(error);
    }
}))

module.exports = passport;
