import { useEffect, useState } from "react";

const dataPaises = [
    {id: 1, nombre: 'Argentina'},
    {id: 2, nombre: 'Bolivia'},
    {id: 3, nombre: 'Brazil'},
    {id: 4, nombre: 'Chile'},
    {id: 5, nombre: 'Colombia'},
];

const dataDepartamentos = [
    {id:1, idPais: 1, nombre: 'Buenos aires'},
    {id:2, idPais: 1, nombre: 'Mendoza'},
    {id:3, idPais: 2, nombre: 'Cochabamba'},
    {id:4, idPais: 3, nombre: 'Sao Pablo'},
    {id:5, idPais: 4, nombre: 'Región del Maule'},
    {id:6, idPais: 5, nombre: 'Medellín'},
    {id:7, idPais: 5, nombre: 'Cartagena'}
]

const dataProvincias = [
    {id:1,  idDepartamento: 1, nombre: 'Buenos aires Provincia A'},
    {id:2,  idDepartamento: 1, nombre: 'Buenos aires Provincia B'},
    {id:3,  idDepartamento: 2, nombre: 'Mendoza Prov AA'},
    {id:4,  idDepartamento: 2, nombre: 'Mendoza Prov BB'},
    {id:4,  idDepartamento: 3, nombre: 'Cochabamba Prov EEEE'},
    {id:5,  idDepartamento: 3, nombre: 'Cochabamba Prov FFFF'},    
    {id:6,  idDepartamento: 4, nombre: 'Sao Pablo Prov AA'},
    {id:7,  idDepartamento: 4, nombre: 'Sao Pablo Prov BB'},
    {id:8,  idDepartamento: 5, nombre: 'Región del Maule Provincia AAAAA'},
    {id:9,  idDepartamento: 5, nombre: 'Región del Maule Provincia BBBBB'},
    {id:10, idDepartamento: 6, nombre: 'Medellín Prov WWWWW'},
    {id:11, idDepartamento: 6, nombre: 'Medellín Prov ZZZZZ'},
    {id:12, idDepartamento: 7, nombre: 'Cartagena Prov WWWWW'},
    {id:13, idDepartamento: 7, nombre: 'Cartagena Prov ZZZZZ'}    
]

const SelectPaises = () => {
    const [paises, setPaises] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [provincias, setProvincias] = useState([]);
    const [actualPais, setActualPais] = useState([]);
    const [actualDep, setActualDep] = useState([]);
    const [actualProv, setActualProv] = useState([]);

    useEffect( () => {
        setPaises(dataPaises);
    }, []);

    const onSelectPais = (event) => {
        event.preventDefault();        
        const depsPorPais = dataDepartamentos.filter( (dep) => {
            return dep.idPais == event.target.value;
        });
        const provPorDepatamento = dataProvincias.filter( (prov) => {
            return prov.idDepartamento == 0;
        });        
        setDepartamentos(depsPorPais);        
        setProvincias(provPorDepatamento);
        setActualPais(event.target.selectedOptions[0].text);
        
    }

    const onSelectDepartamento = (event) => {
        event.preventDefault();        
        const provPorDepatamento = dataProvincias.filter( (prov) => {
            return prov.idDepartamento == event.target.value;
        });
        setProvincias(provPorDepatamento);
        setActualDep(event.target.selectedOptions[0].text);
    }
    const onSelectProv = (event) => {
        event.preventDefault();        
        setActualProv(event.target.selectedOptions[0].text);

    }    

    const onClickEnivarDatos = (event) => {
        event.preventDefault();
        console.log('Se presionó el botón Enviar Datos');
        console.log('Pais:', actualPais);
        console.log('Dep:', actualDep);
        console.log('Prov:', actualProv);
    }

    return (
        <div>
            <h2>Filtros por Pais/Provincia/Depto</h2>
            <select id='paises' name='paises' onChange={onSelectPais}>
                <option >Seleccione País</option>
                {
                    paises.map( (pais) => {
                        return (
                            <option key={pais.id} value={pais.id}>{pais.nombre} </option>
                        );
                    }
                    )
                }
            </select>
            &nbsp; &nbsp; 
             <select id='departamento' name='departamento' onChange={onSelectDepartamento}>
                <option>Selecciona Departamento</option>
                {
                    departamentos.map( (dep) => {
                        return (
                            <option key={dep.id} value={dep.id}>{dep.nombre}</option>
                        )
                    })
                }
            </select>            
            &nbsp; &nbsp; 
             <select id='provincia' name='provincia' onChange={onSelectProv}>
                <option>Selecciona Provincia</option>
                {
                    provincias.map( (prov) => {
                        return (
                            <option key={prov.id} value={prov.id}>{prov.nombre}</option>
                        )
                    })
                }
            </select>
            <br/>
            <button type='submit' onClick={onClickEnivarDatos}>Enviar Datos</button>
        </div>
    )
}

export default SelectPaises;