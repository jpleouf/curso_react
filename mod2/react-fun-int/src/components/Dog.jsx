import { useEffect } from "react";
import { useState } from "react";


const Dog = () => {
    const [titulo,setTitulo]=useState('Dog Component');
    const [descripcion,setDescripcion]=useState('');
    const [data, setData]=useState({});

    const onClickButton = ()=>{
        setTitulo((Math.random() + 1).toString(36).substring(7));
        setDescripcion((Math.random() + 1).toString(36).substring(7));
    }
        
    useEffect(()=>{
        /*fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => console.log(json));*/

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => { return response.json()})
        .then((data) => {console.log(data);setData(data);});

    },[titulo, descripcion]);

    return (
    <div>
        <h1 alt={descripcion}>{titulo}</h1>
        <button onClick={onClickButton}>Cambiar el titulo</button>
        <img src={data.message}></img>
    </div>
    );
}



export default Dog;
