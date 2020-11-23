const crypto = require('crypto');
const mysalt = 'sinbakery'

module.exports = (password) => {
    return crypto.createHash('sha512').update(password + mysalt).digest('base64');
};