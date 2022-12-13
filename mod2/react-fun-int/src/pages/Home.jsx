import { useEffect } from "react";
import { useState } from "react";


const Fila = ({title,brand,category,thumbnail}) => {
       
    return (
        <>
        <td>{title}</td>
        <td>{brand}</td>
        <td>{category}</td>
        <td><img width="50px" height="50px" src={thumbnail}></img></td>
        </>
);
};



export default Fila;
