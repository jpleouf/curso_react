import { useState } from "react";


const Traductor = () => {
    
    const [espanol,setEspanol]=useState('Lunes');
    const [ingles,setIngles]=useState('Monday');
    const [portuges,setPortuges]=useState('Segunda-feira');
    const [idioma,setIdioma]=useState('');
    const [resultado,setResultado]=useState('');

    const onChangeInput = (event,executeFn) => {
        event.preventDefault();
        executeFn(event.target.value);
    }

    const onChangeIdioma = (event) =>
    {
        event.preventDefault();
        setIdioma(event.target.value);
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

        if (idioma=='espanol'){
            setResultado(espanol);
        }

        if (idioma=='ingles'){
            setResultado(ingles);
        }

        if (idioma=='portuges'){
            setResultado(portuges);
        }

    } 
            
    return <div>
        <h1>Traductor</h1>

        <div>

        <label>Español</label>
        <input type="text" id="espanol" name="espanol" value={espanol} onChange={(event) => {onChangeInput(event, setEspanol);}}></input>

        <label>Ingles</label>
        <input type="text" id="ingles" name="ingles" value={ingles} onChange={(event) => {onChangeInput(event, setIngles);}}></input>

        <label>Portuges</label>
        <input type="text" id="portuges" name="portuges" value={portuges} onChange={(event) => {onChangeInput(event, setPortuges);}}></input>
        </div>
        <br/>

        <div>
        <label>Selecionar el Idioma</label>
        <input type="text" id="idioma" name="idioma" value={idioma} onChange={onChangeIdioma}></input>
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

export default Traductor;
