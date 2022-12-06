import { useState } from "react";

const Input = () => 
{
    const [fullname,setFullname]=useState('Ingrese su nombre');

    const CambioValorDelInput = (event) => 
    {
        event.preventDefault();
        setFullname(event.target.value);


    }; 
    

    return (
    <div>
        <label>Fullname:</label>
        <input type="text" id="fullname" name="fullname" value={fullname} onChange={CambioValorDelInput}></input>{fullname}
    </div>
)};

export default Input;
