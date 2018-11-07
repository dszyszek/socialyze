const {User} = require('../models/User');


const authenticate = (req) => {

    let token = req.header('x-auth');

    User.findByToken(token).then(usr => {

        console.log(usr, 'usr in findByToken');

    }).catch(e => console.log(e));


    return Promise.resolve();
};


module.exports = {
    authenticate
}