const express =  require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const db = require('./models');

class App {

    constructor() {
       this.app = express();       
       this.dbConnection();
       this.setSession();
       this.setMiddleWare();
       this.setRouting();
    }

    dbConnection() {
        db.sequelize.authenticate()
        .then(() =>{
            console.log('connection successfully');
           return db.sequelize.sync();
           //return db.sequelize.drop();
        })
        .then(() => {
            console.log('DB Sync complete');
        })
        .catch(err => {
            console.log('db error', err);
        });
    }

    setMiddleWare() {
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false}));
    }

    setSession() {
        this.app.use(session({
            secret: 'bakery',
            resave: false,
            saveUninitialized: true,
            cookie: {
                maxAge: 2000 * 60 * 60
            }
        }));
    }

    setRouting() {
        this.app.use(require('./controllers'))
    }
}

module.exports = new App().app;
