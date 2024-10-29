import { useState, useEffect } from "react";

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    // mount
    // update
    // onmount

    useEffect(() => {
        console.log("o estado nome mudou");

        return () => {
            console.log("Esse componente Finalizou ")
        }
    },[props])

    useEffect(() => {
        console.log("o estado nome mudou");
    },[nome])

    const alterarNome = (evento) => {
        // setNome(evento.target.value);

        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const rederizaResultado = () => {
        const soma = materiaA + materiaB + materiaC ;
        const media = soma / 3;
        
        if (media >= 7) {
            return (
                <p>Olá {nome} você foi aprovado</p>
            )
        }  else {
            return (
                <p>Olá {nome} você não foi aprovado</p>
            )
        }
    }

    onchange

    return (
        <form action="">
            <ul>
                {[1,2,3,4,5].map(item =>(
                    <li key={item}> {item} </li>
                ))}
            </ul>

            <input type="text" placeholder="Seu Nome" onChange={alterarNome}/>
            <input type="number" placeholder="Nota Materia A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {rederizaResultado()}
            
        </form>
    )
}

export default Formulario