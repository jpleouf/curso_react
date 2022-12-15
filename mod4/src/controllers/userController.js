module.exports={
    getUser(req, res) {
        return res.status(200).send(
            {
                name:'Jean-Pierre',
                lastname:'Verspieren',
                age:44
            }
        );
    },
    createUser(req, res) {
        return res.status(200).send(
            req.body
            /*{
                message:'User creado'
            }*/
        );
    },
    deleteUser(req, res) {
    }           
}