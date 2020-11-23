const models = require('../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passwordHash = require('../helpers/passwordHash');

passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    const result = user;
    result.password = '';
    done(null, result);
});

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    passReqToCallback: true,
},
async (req, id, password, done) => {
    const user = await models.Users.findOne({
        where: {
            id,
            password: passwordHash(password),
        },
    });

    if (!user) {
        return done(null, false);
    } else {
        return done(null, user.dataValues);
    }
}));


module.exports = passport;
