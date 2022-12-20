const userController = require('../controllers/userController');

module.exports= (app) => {
    app.get('/api', (req, res) => {
        return res.status(200).send({message: 'API V1 para testing.'});
    });
    

    //servcios para users
    app.get('/api/users',userController.getUser);
    app.post('/api/user',userController.createUser);
    app.get('/api/userc',userController.createUser);
    app.get('/api/userd',userController.deleteUser);

    //servcios para DB Client
    app.get('/api/clients',userController.getClients);

}