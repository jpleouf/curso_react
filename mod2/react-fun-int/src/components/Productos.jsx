import { useEffect } from "react";
import { useState } from "react";


const Productos = () => {
    const [productos,setProductos]=useState([]);

       
    useEffect(()=>{
        /*fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => console.log(json));*/

        fetch('https://dummyjson.com/products')
        .then(response => { return response.json()})
        .then((data) => {console.log(data);setProductos(data.products);});

    }, []);

    console.log('Loaded!');

    return (
    <div>
        <h1>Mostrando Productos</h1>

        <table>
            <thead>
            <tr>
                <th>titulo</th>
                <th>brand</th>
                <th>category</th>
                <th>thumbnail</th>
            </tr>
            </thead>
            <tbody>
                {productos.map((producto) => {return (
                <tr key={producto.id}>
                <td>{producto.title}</td>
                <td>{producto.brand}</td>
                <td>{producto.category}</td>
                <td><img width="50px" height="50px" src={producto.thumbnail}></img></td>
                </tr>
                );
                }
                )}

            </tbody>
        </table>
    </div>
    );
}



export default Productos;
