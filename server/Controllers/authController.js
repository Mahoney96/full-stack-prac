


const bcrypt = require('bcrypt');

modeul.exports = {
    getSession: (req, res) => {
        if (req.session.user){
            res.status(200).send(req.session.user)
        } else{
            res.sendStatus(200);
        }
    },
    register: (req, res) =>  {
        const db = req.app.get('db');

        const { email, password} = req.body;

        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hash.Sync{password, salt};

        db.user.register(email, hash)
            .then(res => {
            delete res[0].hash
            })
    }
}