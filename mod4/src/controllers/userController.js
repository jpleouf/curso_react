const dataFake=[
    {
        name:'Jean-Pierre',
        lastname:'Verspieren',
        age:44

    },
    {
        name:'kylian',
        lastname:'Mbape',
        age:22

    }
]

module.exports={
    getUser(req, res) {
        return res.status(200).send(dataFake
            /*{
                name:'Jean-Pierre',
                lastname:'Verspieren',
                age:44
            }*/
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
        return res.status(200).send(
            //req.body
            {
                message:'User suprimido'
            }
            );
        },
    getClients(){
        return res.status(200).send(dataFake);

    }           
}