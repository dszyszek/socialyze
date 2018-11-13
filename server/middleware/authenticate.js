const {User} = require('../models/User');


const authenticate = (req, res, next) => {

    let token = req.header('x-auth');

    User.findByToken(token).then(usr => {

        //console.log(usr, 'usr in findByToken');
        if (!usr) {
            res.status(404).json({msg: 'No such user'});
        }

        req.user = usr;
        req.token = token;
        next();

    }).catch(e => res.status(400).json({error: 'No token provided'}));


    return Promise.resolve();
};


module.exports = {
    authenticate
}