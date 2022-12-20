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
        getClients(req, res){
            const DATABASE=req.app.get('DATABASE');
            
            DATABASE.collection('client').find({}).toArray((error, result) => {
                if (error){
                    res.status(200).send({'error:':error});
                }
                else{
                    res.status(200).send({'message:':result});
                    result.forEach((val)=>{
                        console.log(val);
                    });
                    }
            });
    
    },           
    getClient(req, res){
        const DATABASE=req.app.get('DATABASE');
        const body=req.body;
        const nameValue=req.params.name;

        DATABASE.collection('client').find({name: nameValue}).toArray((error, result) => {
            
            if (error){
                res.status(200).send({'error:':error});
            }
            else{
                res.status(200).send({'message:':result});
                result.forEach((val)=>{
                    console.log(val);
                });
                }
        });

},
addClient(req, res){
    const DATABASE=req.app.get('DATABASE');
    const body={"name": "Saul", "lastname":"better_call","age":50};
    
    
    DATABASE.collection('client').insertOne(req.body, (error, result) => {
        if (error){
            res.status(500).send({'Error':error});
        }
        else{
            res.status(201).send({'Message':'CLiente agregado con exito', data: result});
            }
})
    },
    updateClient(req, res){
        const DATABASE=req.app.get('DATABASE');
        const body={"name": "Saul", "lastname":"better_____call","age":55};
        const query={name:body.name};
        const dataset={$set:body};
    
        DATABASE.collection('client').updateOne(query, dataset, (error, result) => {
            if (error){
                res.status(500).send({'Error':error});
            }
            else{
                res.status(201).send({'Message':'CLiente modificado con exito', data: result});
                }
        })
        },
    deleteClient(req, res){
        const DATABASE=req.app.get('DATABASE');
        const body={"name": "Saul", "lastname":"better_____call","age":55};
        const query={name:body.name};
    
        DATABASE.collection('client').deleteOne(query, (error, result) => {
            if (error){
                res.status(500).send({'Error':error});
            }
            else{
                res.status(201).send({'Message':'CLiente eliminado con exito', data: result});
                }
        })
    
    }
        
}