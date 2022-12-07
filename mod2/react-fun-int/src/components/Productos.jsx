import { useEffect } from "react";
import { useState } from "react";


const Productos = () => {
    const [productos,setproductos]=useState([]);

       
    useEffect(()=>{
        /*fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => console.log(json));*/

        fetch('https://dummyjson.com/products/1')
        .then(response => { return response.json()})
        .then((data) => {console.log(data);});

    });

    console.log('Loaded!');

    return (
    <div>
        <h1>Mostrando Productos</h1>
    </div>
    );
}



export default Productos;
