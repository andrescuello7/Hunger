import { getStorageArray } from "../Utils/UtilsStorage"
import { useState, useEffect } from "react"
import UseHome from "./UseHome"

const Usefilter = () =>{
    const { input } = UseHome()  
    const [ dato, setDato ] = useState("")
    const [ temperatura, setTemperatura ] = useState([])
    const datos = getStorageArray('comida')
    const extract = temperatura.filter((ext)=> ext.dia === dato);

    useEffect(()=>{
        TemperaturaResultado()
    }, [])

    const lunes = () =>{
        setDato("Lunes")
    }
    const Martes = () =>{
        setDato("Martes")
    }
    const Miercoles = () =>{
        setDato("Miercoles")
    }
    const Jueves = () =>{
        setDato("Jueves")
    }
    const Viernes = () =>{
        setDato("Viernes")
    }
    const Sabado = () =>{
        setDato("Sabado")
    }
    const Domingo = () =>{
        setDato("Domingo")
    }
    const TemperaturaResultado = () =>{
        if (input > 22) {
            const extracTemp = datos.filter((temp)=>  temp.temperatura === "Frio");
            setTemperatura(extracTemp)
        } else {
            const extracTemp = datos.filter((temp)=>  temp.temperatura === "Calor");
            setTemperatura(extracTemp)
        }
    }
    const proyectar = extract.map((ext, i) => (<div className="name" key={i}>{ext.comida}</div>))
    return {
        temperatura,
        proyectar,
        extract,
        input,
        dato,
        lunes,
        Martes,
        Miercoles,
        Jueves,
        Viernes,
        Sabado,
        Domingo,
        datos
    }
}

export default Usefilter;