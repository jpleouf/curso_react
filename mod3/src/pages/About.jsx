import Navegator from '../components/Navigator';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSaveUserLogged} from '../redux/actions';
import { useSelect} from '@mui/base';
import { Button, TextField } from "@mui/material";
import {CREATE_USER} from '../redux/type';
import {setCreateUserLogged} from '../redux/actions';

const About = () => {

const nombreDelUsuario=useSelector((state) => state.user_logged);
const [userData, setUserData]=useState({});
const [nombre, setNombre]=useState('');
const [apellido, setApellido]=useState('');
const [edad, setEdad]=useState('');

const dispatch=useDispatch();
const [name, setName]=useState('');
const [lastname, setLastname]=useState('');
const [age, setAge]=useState(0);

const [data, setUserdata]=useState({});

const informations=useSelector((state) => state.informations);

useEffect(() => {
    fetch('http://localhost:3001/api/users')
    .then((response) => {
        return response.json();
    })
        .then((data) => {
            setUserData(data);
        })
},[]);

const sendData = () => {
    console.log(name);
    console.log(lastname);
    console.log(age);

    const data = {
        name: nombre,
        lastname:apellido,
        age:edad
    };

    const body={name,lastname,age};
    
    fetch('http://localhost:3001/api/client/add', {
      method: 'POST', 
      body: JSON.stringify(body), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => { return res.json();})
    .catch(error => console.error('Error:', error))
    .then((response)=>{
        setUserData(response.data);
        //dispatch(setCreateUserLogged(data));
        console.log(data);
    })

}



return (
    <div>
        <Navegator></Navegator>
        <h2>About Page</h2>
        <em>{informations}</em>
        <h4>{JSON.stringify(userData)}</h4>
        <br></br>
        <br></br>
        <center>
        <div>
            <TextField variant="outlined" label="Nombre" type="text" id="name" name="name" value={name} onChange={
                (event) => {
                    event.preventDefault();
                    setName(event.target.value);
                }
                }></TextField>
            <TextField variant="outlined" label="Apellido" type="text" id="lastname" name="lastname" value={lastname} onChange={
                (event) => {
                    event.preventDefault();
                    setLastname(event.target.value);
                }
                }></TextField>

                
            <TextField variant="outlined" label="Edad" type="number" id="age" name="age" value={age} onChange={
                (event) => {
                    event.preventDefault();
                    setAge(event.target.value);
                }
                }></TextField>
        </div>
        <br></br>
        <div>
                
                <Button variant="contained" onClick={
                (event) => {
                    sendData();
                }
                }>SendData</Button>
        </div>

        </center>

    </div>
);
};


export default About;
