const models = require('../../models');

exports.post_membership = async (req, res) => {
    try {
        const user = await models.Users.create(req.body);
        await user.createCart();
        res.status(201).redirect('/');
    } catch(error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({warn: '이메일 에러'});
        }

        res.status(500).json({error});
    }

}

exports.get_fail = (req, res) => {
    res.send('<script>alert("로그인 실패");location.href="/";</script>');
}

exports.post_login = (req, res) => res.redirect('/home');
