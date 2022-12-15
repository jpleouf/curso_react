const userController = require('../controllers/userController');

module.exports= (app) => {
    app.get('/api', (req, res) => {
        return res.status(200).send({message: 'API V1 para testing.'});
    });
    

    app.get('/api/users',userController.getUser);
    app.get('/api/user',userController.createUser);
}