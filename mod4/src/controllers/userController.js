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
    },
    deleteUser(req, res) {
    }           
}