import { useEffect } from "react";
import { useState } from "react";

const Dog = () => {
    const [titulo,setTitulo]=useState('Dog Component');
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));      

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => { return response.json()})
        .then((data) => console.log(data));

    },[titulo]);

    return (
    <div>
        <h1>{titulo}</h1>
    </div>
    );
}



export default Dog;
