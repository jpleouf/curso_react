import { useState } from "react";


const Calculadora = () => {
    
    const [num1,setNum1]=useState('0');
    const [num2,setNum2]=useState('0');
    const [action,setAction]=useState('suma');
    const [resultado,setResultado]=useState('');

    const onChangeNum1 = (event) =>
    {
        event.preventDefault();
        setNum1(event.target.value);
    } 
    const onChangeNum2 = (event) =>
    {
        event.preventDefault();
        setNum2(event.target.value);
    } 

    const onChangeAction = (event) =>
    {
        event.preventDefault();
        setAction(event.target.value);
    } 
            
    const onChangeRes = (event) =>
    {
        event.preventDefault();
        setResultado(event.target.value);
    } 
            
    const onClickProcesar = (event) =>
    {
        event.preventDefault();
        console.log('Procesando');

        if (action=='suma'){
            setResultado(parseInt(num1)+parseInt(num2));
        }

        
    } 
            
    return <div>
        <h1>Calculadora</h1>

        <div>

        <label>Num1</label>
        <input type="text" id="num1" name="num1" value={num1} onChange={(event) => {event.preventDefault();setNum1(event.target.value);}}></input>

        <label>Num2</label>
        <input type="text" id="num2" name="num2" value={num2} onChange={onChangeNum2}></input>
        </div>
        <br/>

        <div>
        <label>Action</label>
        <input type="text" id="action" name="action" value={action} onChange={onChangeAction}></input>
        </div>
        <br/>

        <div>
        <label>Resultado</label>
        <input type="text" id="resultado" name="resultado" value={resultado} disabled onChange={onChangeRes}></input>
        </div>

        <div>
        <button onClick={onClickProcesar}>Procesar</button>
        </div>


    </div>
}

export default Calculadora;
